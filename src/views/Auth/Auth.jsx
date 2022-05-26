import useAuthUserForm from "hooks/useAuthUser/useAuthUserForm"
import { useAuthSelectData } from "hooks/useAuthUser/useAuthSelectData"

import Form from "./components/Form/Form"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"
import { motion } from "framer-motion"

import "./Auth.styles.css"

export const Auth = ({ pageTransition }) => {
  const { loadingUser, pathName, formik, handleChangeSwitch, handleChangeContinent } = useAuthUserForm()

  const { authData, showRegister, loadingMountAuth } = useAuthSelectData(pathName)

  if (loadingMountAuth) return <SpinnerLoad />

  if (!authData && pathName === "register") return <div>Ocurrió un problema ... Pongase en contacto con el administrador</div>

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
