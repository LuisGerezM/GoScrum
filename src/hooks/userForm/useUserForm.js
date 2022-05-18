import { useFormik } from "formik"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "redux/store/actions/userActions"
import { alertMsg } from "utilities/alert/alertMsg"
import { patternNoNumbers, patternPassword } from "utilities/formulasFunctions/formulasFunctions"
import * as Yup from "yup"

export const useUserForm = (initialValues) => {
  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { loadingUser, user, error } = useSelector((state) => {
    return state.userReducer
  })

  useEffect(() => {

    const pathName = location.pathname.slice(1) === "login" ? "/" : "login"
    if (error) alertMsg({ title: "ERROR", text: `${error}`, icon: "error" })
    // else if (user.length) navigate(pathName, { replace: true })
    else if (user.length) console.log("pathName", pathName)

  
  }, [user, error, navigate, location])

  const required = "*Campo obligatorio"
  const validationSchema = Yup.object().shape({
    userName: Yup.string().matches(patternNoNumbers, "Nombre de usuario no debe contener números").required(required),
    password: Yup.string()
      .min(6, "La cantidad mínima de caracteres es 6")
      .matches(patternPassword, "Contraseña requiere al menos un número y una letra mayúscula")
      .required(required),
  })

 

  const onSubmit = async () => {
    const { userName, password } = formik.values
    console.log("userName, password -->", userName, password)
    console.log("loadingUser, user, error  - ADENTRO -->", loadingUser, user, error)
    dispatch(loginUser(formik.values))
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  return { formik }
}
