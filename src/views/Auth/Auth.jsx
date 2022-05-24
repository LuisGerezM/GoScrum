import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"
import { useAuth } from "hooks/useAuthUser/useAuth"
import { useMountAuth } from "hooks/useAuthUser/useMountAuth"

import Form from "./components/Form/Form"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"
import { motion } from "framer-motion"

import "./Auth.styles.css"

export const Auth = ({ pageTransition }) => {
  const { loadingUser, pathName } = useUserForm()
  const { loadingMountAuth, showRegister } = useMountAuth(pathName)

  const { authData, authDataError } = useAuth(pathName)

  if (authDataError && pathName === "register") return <div>Ocurrió un problema ... Pongase en contacto con el administrador</div>

  if (loadingMountAuth) return <SpinnerLoad />

  return (
    <>
      {loadingUser && <SpinnerLoad />}
      <motion.div className="auth" initial="out" animate="in" exit="out" variants={pageTransition}>
        <Form authData={authData} showRegister={showRegister} />
      </motion.div>
    </>
  )
}
