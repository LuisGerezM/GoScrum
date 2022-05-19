import { Link } from "react-router-dom"
import { Switch, FormControlLabel } from "@mui/material"
import { alertMsg } from "utilities/utilAlert/utilAlertMsg"

import { useUserForm } from "hooks/authUser/useAuthUserForm"
import { useAuthData } from "hooks/authUser/useAuthData"

import "../Auth.styles.css"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"
import { Toast } from "components/Loading/Toast/Toast"

export const Register = () => {
  const {
    formik: { handleSubmit, handleChange, handleBlur, errors, touched, values },
    loadingUser,
    pathName,
    showUserNotification,
    handleChangeContinent,
    handleChangeSwitch,
  } = useUserForm()

  const { authData, authDataError } = useAuthData()

  if (authDataError) return alertMsg({ title: "ERROR", text: "Ups... Ocurrió un problema", icon: "error" })

  return (
    <>
      {loadingUser && <SpinnerLoad />}
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
                  onChange={handleChangeSwitch}
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
                {authData?.Rol.map((option) => (
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
                {authData?.continente.map((option) => (
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
                  {authData?.region.map((option) => (
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
      {showUserNotification && pathName === "register" && <Toast />}
    </>
  )
}
