import { useState, useEffect } from "react"
import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import * as Yup from "yup"
import { v4 as uuidv4 } from "uuid"
import { Switch, FormControlLabel } from "@mui/material"

import "../Auth.styles.css"

// al poner REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL, estamos diciendo que basta con poner BASEURL
const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env

export const Register = () => {
  const navigate = useNavigate()
  //   data to complete select
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${BASEURL}auth/data`)
      .then((response) => response.json())
      .then((data) => setData(data.result))
  }, [])
  // ----- end data to complete select

  // ----- formik
  const initialValues = {
    userName: "",
    password: "",
    email: "",
    teamID: "",
    role: "",
    continent: "",
    region: "",
    switch: false,
  }

  const required = "*Campo obligatorio"
  const validationSchema = Yup.object().shape({
    userName: Yup.string().min(4, "La cantidad mímina de caracteres es 4").required(required),
    password: Yup.string().required(required),
    email: Yup.string().email("Ingresa un email válido").required(required),
    role: Yup.string().required(required),
    continent: Yup.string().required(required),
    region: Yup.string().required(required),
  })

  const handleChangeContinent = (value) => {
    // con esto corregimos el error de region, cuando no se selecciona continente, asi no tira error por campo obligatorio o no seleccionado;; Por tanto de esta forma, cuándo en continente elegimos en America me muestra la region, cuándo elegimos Europa u otro (DE CONTINENTE), seteamos 'otro' en region dinamicamente
    setFieldValue("continent", value)
    if (value !== "America") setFieldValue("region", "Otro")
  }

  const onSubmit = () => {
    console.log(values)
    const teamID = !values.teamID ? uuidv4() : values.teamID
    console.log("teamID", teamID)

    const { userName, password, email, role, continent, region } = values

    fetch(`${BASEURL}auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          userName,
          password,
          email,
          teamID,
          role,
          continent,
          region,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data) //  https://goscrum-api.alkemy.org/auth/register 409 (Conflict) .. capturar errores
        if (data.result.user.role === "Team Member") navigate(`/login`, { replace: true })
        else navigate(`/registered/${data.result.user.teamID}`, { replace: true })
      })
  }

  const formik = useFormik({ initialValues, onSubmit, validationSchema })

  const { handleSubmit, handleChange, handleBlur, errors, touched, values, setFieldValue } = formik
  // ----- end formik

  // Con este log veo si existe error cuándo aprieto "enviar" y no hace el submit
  //console.log(errors);
  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="title">Registro</div>
          <div>
            <label>Nombre de usuario</label>
            <input
              className={touched.userName && errors.userName ? "error" : ""}
              type="text"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.userName && touched.userName && <span className={errors.userName ? "error" : ""}>{errors.userName}</span>}
          </div>
          <div>
            <label>Contraseña</label>
            <input
              className={touched.password && errors.password ? "error" : ""}
              type="password"
              name="password"
              autoComplete="on"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && <span className={errors.password ? "error" : ""}>{errors.password}</span>}
          </div>
          <div>
            <label>Email</label>
            <input
              className={touched.email && errors.email ? "error" : ""}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <span className={errors.email ? "error" : ""}>{errors.email}</span>}
          </div>
          <FormControlLabel
            control={
              <Switch
                className={!values.switch ? "shadow" : ""}
                value={values.switch}
                onChange={() => formik.setFieldValue("switch", !formik.values.switch)}
                name="switch"
                // colorSecondary="warning"
                input="primary"
              />
            }
            label="Perteneces a un equipo creado"
          />
          {values.switch && (
            <div>
              <label>Por favor, introduce el identificador del equipo</label>
              <input type="text" name="teamID" value={values.teamID} onChange={handleChange} />
            </div>
          )}

          <div>
            <label>Rol</label>
            <select
              className={touched.role && errors.role ? "error" : ""}
              name="role"
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Selecciona rol</option>
              {data?.Rol.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.role && touched.role && <span className={errors.role ? "error" : ""}>{errors.role}</span>}
          </div>
          <div>
            <label>Continente</label>
            <select
              className={touched.continent && errors.continent ? "error" : ""}
              name="continent"
              value={values.continent}
              onChange={(e) => handleChangeContinent(e.currentTarget.value)}
              onBlur={handleBlur}
            >
              <option value="">Selecciona continente</option>
              {data?.continente.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.continent && touched.continent && <span className={errors.continent ? "error" : ""}>{errors.continent}</span>}
          </div>
          {/* ------------------------- AQUI AGREGAR EFECTO DE FRAMER MOTION ------------------------- */}
          {values.continent === "America" && (
            <div>
              <label>Región</label>
              <select
                className={touched.region && errors.region ? "error" : ""}
                name="region"
                value={values.region}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Selecciona región</option>
                {data?.region.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.region && touched.region && <span className={errors.region ? "error" : ""}>{errors.region}</span>}
            </div>
          )}
          <div>
            <button type="submit" className="submit">
              Enviar
            </button>
            <div className="div-a">
              <Link className="a-form" to="/login">
                Ir a Iniciar sesión
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
