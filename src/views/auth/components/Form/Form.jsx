import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"
import Input from "../Input/Input"
import FooterForm from "./FooterForm"

const Form = () => {
  const {
    formik: { handleSubmit, handleChange, handleBlur, errors, touched, values },
  } = useUserForm()

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="title">Iniciar sesión</div>
        <div>
          <Input
            txtLabel="Nombre de usuario"
            name="userName"
            type="text"
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          {/* <label>Nombre de usuario</label>
          <input
            className={touched.userName && errors.userName ? "error" : ""}
            type="text"
            name="userName"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.userName && touched.userName && <span className={errors.userName ? "error" : ""}>{errors.userName}</span>} */}
        </div>
        <div>
          <Input
            txtLabel="Contraseña"
            name="password"
            type="password"
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          {/* <label>Contraseña</label>
          <input
            className={touched.password && errors.password ? "error" : ""}
            type="password"
            name="password"
            autoComplete="on"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && <span className={errors.password ? "error" : ""}>{errors.password}</span>} */}
        </div>
        <div>
          <FooterForm to="/register" valueLink="Registrarme" />
          {/* <button type="submit" className="submit">
            Enviar
          </button>
          <div></div>
          <FooterForm valueLink="Registrarme" to="/register" /> */}
        </div>
      </div>
    </form>
  )
}

export default Form
