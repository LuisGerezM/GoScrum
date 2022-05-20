import { useFormik } from "formik"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"

import { loginUser, registerUser, resetUserNotification } from "redux/store/actions/userActions"
import { useNotification } from "hooks/useNotification"
import { alertMsg } from "utilities/utilAlert/utilAlertMsg"
import { startValues, validateUserFormFields } from "utilities/utilAuthUser/utilUserFormsFields/utilUserFormsFields"

import { v4 as uuidv4 } from "uuid"

export const useUserForm = () => {
  const location = useLocation()
  const pathName = location.pathname.slice(1)

  const navigate = useNavigate()

  const { loadingUser, user, error, success_request } = useSelector((state) => {
    return state.userReducer
  })
  const dispatch = useDispatch()

  const { showNotification } = useNotification()
  // console.log(useNotification(error, success_request))

  const initialValues = startValues(pathName)

  const validationSchema = validateUserFormFields(pathName)

  useEffect(() => {
    if (error) {
      console.log("TRUE ERRORRRRRR", error)
      alertMsg({ title: "ERROR", text: `${error}`, icon: "error" })
      dispatch(resetUserNotification())
    } else if (success_request) {
      console.log("estoy en EFECTOOO --->>", { success_request })
      dispatch(resetUserNotification())

      const possibleRoutes = {
        1: "/",
        2: "/login",
        3: `/registered/${user.teamID}`,
      }

      let routeToNavigate = ""
      if (pathName === "login") routeToNavigate = 1
      else if (user.role === "Team Member") routeToNavigate = 2
      else routeToNavigate = 3

      // navigate(possibleRoutes[routeToNavigate])

      console.log("user final -->", user)
      console.log("routeToNavigate -->", routeToNavigate)
      console.log("possibleRoutes[routeToNavigate] -->", possibleRoutes[routeToNavigate])
    }
  }, [user, error, success_request, dispatch, pathName, navigate])

  const onSubmit = () => {
    if (pathName === "login") dispatch(loginUser(formik.values))
    else {
      formik.values.teamID = !formik.values.teamID ? uuidv4() : formik.values.teamID
      dispatch(registerUser(formik.values))
    }
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  // change continent select
  const handleChangeContinent = (value) => {
    formik.setFieldValue("continent", value)
    if (value !== "America") formik.setFieldValue("region", "Otro")
  }

  // change value switch - checked - not check
  const handleChangeSwitch = () => formik.setFieldValue("switch", !formik.values.switch)

  return { formik, loadingUser, showNotification, pathName, handleChangeSwitch, handleChangeContinent }
}
