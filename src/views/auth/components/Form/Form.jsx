import { FormControlLabel, Switch } from "@mui/material"
import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"
import Input from "../Input/Input"
import Select from "../Select/Select"
import FooterForm from "./FooterForm"

const Form = ({ pathName, authData = null }) => {
  const {
    formik: { handleSubmit, handleChange, handleBlur, errors, touched, values },
    handleChangeSwitch,
    handleChangeContinent,
  } = useUserForm()

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="title">{pathName === "login" ? "Iniciar sesión" : "Registro"}</div>
        <div>
          <Input
            txtLabel="Nombre de usuario"
            name="userName"
            type="text"
            errors={errors}
            touched={touched}
            values={values.userName}
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
            values={values.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        {pathName === "register" && (
          <>
            <div>
              <Input
                txtLabel="Email"
                name="email"
                type="email"
                errors={errors}
                touched={touched}
                values={values.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
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
                <Input
                  txtLabel="Por favor, introduce el identificador del equipo"
                  name="teamID"
                  type="text"
                  errors={errors}
                  touched={touched}
                  value={values.teamID}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
            )}
            <div>
              <Select
                dataOption={authData?.Rol}
                txtLabel="Rol"
                name="role"
                values={values.role}
                txtDefaultOption="Selecciona rol"
                touched={touched}
                errors={errors.role}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
            <div>
              <Select
                dataOption={authData?.continente}
                txtLabel="Continente"
                name="continent"
                values={values.continent}
                txtDefaultOption="Selecciona continente"
                touched={touched}
                errors={errors.continent}
                handleChange={handleChangeContinent}
                handleBlur={handleBlur}
              />
            </div>
            {values.continent === "America" && (
              <div>
                <Select
                  dataOption={authData?.region}
                  txtLabel="Región"
                  name="region"
                  values={values.region}
                  txtDefaultOption="Selecciona región"
                  touched={touched}
                  errors={errors.region}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
            )}
          </>
        )}
        <div>
          <FooterForm to={pathName === "login" ? "/register" : "/login"} valueLink={pathName === "login" ? "Registrarme" : "Ir a Iniciar sesión"} />
        </div>
      </div>
    </form>
  )
}

export default Form
