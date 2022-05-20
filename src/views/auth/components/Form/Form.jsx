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
        </div>
        <div>
          <FooterForm to="/register" valueLink="Registrarme" />
        </div>
      </div>
    </form>
  )
}

export default Form
