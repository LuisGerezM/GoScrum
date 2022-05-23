import { FormControlLabel, Switch } from "@mui/material"
import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"
import Input from "../Input/Input"
import Select from "../Select/Select"
import FooterForm from "./FooterForm"

import { motion } from "framer-motion"

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
        <Input
          txtLabel="Nombre de usuario"
          name="userName"
          type="text"
          errors={errors.userName}
          touched={touched}
          values={values.userName}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        <Input
          txtLabel="Contraseña"
          name="password"
          type="password"
          errors={errors.password}
          touched={touched}
          values={values.password}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        {pathName === "register" && (
          <>
            <Input
              txtLabel="Email"
              name="email"
              type="email"
              errors={errors.email}
              touched={touched}
              values={values.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormControlLabel
              control={
                <Switch
                  className={!values.switch ? "shadow" : ""}
                  value={values.switch}
                  onChange={handleChangeSwitch}
                  name="switch"
                  input="primary"
                />
              }
              label="Perteneces a un equipo creado"
              checked={values.switch}
            />
            {values.switch && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 1.5 }}
              >
                <Input
                  txtLabel="Por favor, introduce el identificador del equipo"
                  name="teamID"
                  type="text"
                  errors={errors.teamID}
                  touched={touched}
                  value={values.teamID}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </motion.div>
            )}

            <Select
              dataOption={authData?.role}
              txtLabel="Rol"
              name="role"
              values={values.role}
              txtDefaultOption="Selecciona rol"
              touched={touched}
              errors={errors.role}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <Select
              dataOption={authData?.continent}
              txtLabel="Continente"
              name="continent"
              values={values.continent}
              txtDefaultOption="Selecciona continente"
              touched={touched}
              errors={errors.continent}
              handleChange={handleChangeContinent}
              handleBlur={handleBlur}
            />
            {values.continent === "America" && (
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
