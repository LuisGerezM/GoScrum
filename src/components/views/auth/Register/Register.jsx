import { useState, useEffect } from "react"
import { useFormik } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import { Switch, FormControlLabel } from "@mui/material"

import "../Auth.styles.css"

// al poner REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL, estamos diciendo que basta con poner BASEURL
const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env

export const Register = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${BASEURL}auth/data`)
      .then((response) => response.json())
      .then((data) => setData(data.result))
  }, [])

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
    setFieldValue("continent", value)
    if (value !== "America") setFieldValue("region", "Otro")
  }

  const onSubmit = () => {
    console.log(values)
  }

  const formik = useFormik({ initialValues, onSubmit, validationSchema })

  const { handleSubmit, handleChange, handleBlur, errors, touched, values, setFieldValue } = formik

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
