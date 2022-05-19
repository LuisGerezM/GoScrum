import { useFormik } from "formik"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { loginUser, registerUser, resetUserNotification } from "redux/store/actions/userActions"
import { alertMsg } from "utilities/utilAlert/utilAlertMsg"
import { startValues, validateUserFormFields } from "utilities/utilAuthUser/utilUserFormsFields/utilUserFormsFields"

import { v4 as uuidv4 } from "uuid"

export const useUserForm = () => {
  const location = useLocation()
  const pathName = location.pathname.slice(1)

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { loadingUser, user, error, success, status_code } = useSelector((state) => {
    return state.userReducer
  })

  const initialValues = startValues(pathName)

  const validationSchema = validateUserFormFields(pathName)

  useEffect(() => {
    if (error) {
      alertMsg({ title: "ERROR", text: `${error}`, icon: "error" })
      dispatch(resetUserNotification())
    }
    // else if (Object.keys(user).length) {
    else if (success) {
      // const possibleNavigate = {
      //   1:"/",
      //   2:"/login",
      //   3:`/registered/${user.teamID}`
      // }

      console.log("status_code -->-->", status_code)
      toast(`${status_code}`)

      let caseNavigate = ""
      if (pathName === "login") caseNavigate = 1
      else if (user.role === "Team Member") caseNavigate = 2
      else caseNavigate = 3

      setTimeout(() => {
        dispatch(resetUserNotification())
      }, 2300)
      // navigate(possibleNavigate[caseNavigate], { replace: true })
      console.log("user final --> user, status_code -->", user, status_code)
      console.log("caseNavigate -->", caseNavigate)
    }
  }, [user, error, success, status_code, navigate, pathName, dispatch])

  const onSubmit = () => {
    if (pathName === "login") {
      dispatch(loginUser(formik.values))
    } else {
      formik.values.teamID = !formik.values.teamID ? uuidv4() : formik.values.teamID

      dispatch(registerUser(formik.values))
    }
  }

  // change continent select
  const handleChangeContinent = (value) => {
    formik.setFieldValue("continent", value)
    if (value !== "America") formik.setFieldValue("region", "Otro")
  }

  // change value switch - checked - not check
  const handleChangeSwitch = (value) => {
    formik.setFieldValue("switch", !formik.values.switch)
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  return { formik, loadingUser, status_code, handleChangeContinent, handleChangeSwitch }
}
