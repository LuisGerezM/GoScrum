import useAuthUserForm from "hooks/useAuthUser/useAuthUserForm"
import { useAuthSelectData } from "hooks/useAuthUser/useAuthSelectData"

import Form from "./components/Form/Form"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"
import { motion } from "framer-motion"

import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter"
import { useVerifyLoggedSesion } from "hooks/useAuthUser/useVerifyLoggedSesion"

import "./Auth.styles.css"

export const Auth = ({ pageTransition }) => {
  const { loadingUser, pathName, formik, handleChangeSwitch, handleChangeContinent } = useAuthUserForm()

  const { showRegister } = useVerifyLoggedSesion(pathName)

  const { authData, loadingMountAuth } = useAuthSelectData()

  if (loadingMountAuth) return <SpinnerLoad />

  if (!authData && pathName === "register")
    return (
      <div className="error-auth-data">
        <div>😥 Ocurrió un problema ... Pongase en contacto con el administrador</div>
        <LinkReactRouter divClass="div-a" linkClass="a-error-auth-data" to="/login" valueLink="Ir a login" />
      </div>
    )

  return (
    <>
      {loadingUser && <SpinnerLoad />}
      <motion.div className="auth" initial="out" animate="in" exit="out" variants={pageTransition}>
        <Form
          authData={authData}
          showRegister={showRegister}
          formik={formik}
          handleChangeSwitch={handleChangeSwitch}
          handleChangeContinent={handleChangeContinent}
          loadingUser={loadingUser}
        />
      </motion.div>
    </>
  )
}
