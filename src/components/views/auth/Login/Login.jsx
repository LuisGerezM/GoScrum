import { useUserForm } from "hooks/userForm/useUserForm"
import { Link } from "react-router-dom"

import "../Auth.styles.css"

const initialValues = { userName: "", password: "" }

export const Login = () => {
  const {
    formik: { handleSubmit, handleChange, handleBlur, errors, touched, values },
  } = useUserForm(initialValues)

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <div className="title">Iniciar sesión</div>
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
          <button type="submit">Enviar</button>
          <div className="register-form">
            <Link className="register" to="/register">
              Registrarme
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
