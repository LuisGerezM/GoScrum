import * as Yup from "yup"

const patternNoNumbers = /^[a-zA-Z]+\s*[-_@!.]*[a-zA-Z]*[-_@.!]*$/g
const patternPassword = /^(?=.*[A-Z])(?=.*\d)+/g

export const startValues = (pathName) => {
  return pathName === "login"
    ? { userName: "", password: "" }
    : {
        userName: "",
        password: "",
        email: "",
        teamID: "",
        role: "",
        continent: "",
        region: "",
        switch: false,
      }
}

export const validateUserFormFields = (pathName) => {
  const required = "*Campo obligatorio"
  const validateFormFields = Yup.object().shape(
    pathName === "login"
      ? {
          userName: Yup.string().matches(patternNoNumbers, "Nombre de usuario no debe contener números").required(required),
          password: Yup.string()
            .min(6, "La cantidad mínima de caracteres es 6")
            .matches(patternPassword, "Contraseña requiere al menos un número y una letra mayúscula")
            .required(required),
        }
      : {
          userName: Yup.string().matches(patternNoNumbers, "Nombre de usuario no debe contener números").required(required),
          password: Yup.string()
            .min(6, "La cantidad mínima de caracteres es 6")
            .matches(patternPassword, "Contraseña requiere al menos un número y una letra mayúscula")
            .required(required),
          email: Yup.string().email("Ingresa un email válido").required(required),
          role: Yup.string().required(required),
          continent: Yup.string().required(required),
          region: Yup.string().required(required),
        }
  )

  return validateFormFields
}
