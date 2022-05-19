import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { loginUser, registerUser, resetUserNotification } from "redux/store/actions/userActions"
import { alertMsg } from "utilities/utilAlert/utilAlertMsg"
import { startValues, validateUserFormFields } from "utilities/utilAuthUser/utilUserFormsFields/utilUserFormsFields"

import { v4 as uuidv4 } from "uuid"

export const useUserForm = () => {
  const [showUserNotification, setShowUserNotification] = useState(false)

  const location = useLocation()
  const pathName = location.pathname.slice(1)

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { loadingUser, user, error, success } = useSelector((state) => {
    return state.userReducer
  })

  const initialValues = startValues(pathName)

  const validationSchema = validateUserFormFields(pathName)

  useEffect(() => {
    if (showUserNotification) toast(`${pathName === "login" ? `Inicio de sesión exitoso` : `${user.userName} te has registrado con éxito`}`)

    return () => {
      console.log("desmontando efecto useAuthUserForm --> showUserNotification")
    }
  }, [showUserNotification, pathName, user])

  useEffect(() => {
    if (error) {
      alertMsg({ title: "ERROR", text: `${error}`, icon: "error" })
      dispatch(resetUserNotification())
    } else if (success) {
      // const possibleNavigate = {
      //   1:"/",
      //   2:"/login",
      //   3:`/registered/${user.teamID}`
      // }

      let caseNavigate = ""
      if (pathName === "login") caseNavigate = 1
      else if (user.role === "Team Member") caseNavigate = 2
      else caseNavigate = 3

      setShowUserNotification(true)
    
      dispatch(resetUserNotification())

      setTimeout(() => {
        setShowUserNotification(false)

      }, 2000)
    
      console.log("user final -->", user)
      console.log("caseNavigate -->", caseNavigate)
    }
  }, [user, error, success, navigate, pathName, dispatch])

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

  return { formik, loadingUser, showUserNotification, pathName, handleChangeContinent, handleChangeSwitch }
}
