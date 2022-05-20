import Form from "./components/Form/Form"
import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"
import { useAuthData } from "hooks/useAuthUser/useAuthData"
import { motion } from "framer-motion"

import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"
import { alertMsg } from "utilities/utilAlert/utilAlertMsg"

import "./Auth.styles.css"

export const Auth = ({ pageTransition }) => {
  const { loadingUser, pathName } = useUserForm()

  const { authData, authDataError } = useAuthData()

  if (authDataError && pathName === "register") return alertMsg({ title: "ERROR", text: "Ups... Ocurrió un problema", icon: "error" })

  return (
    <>
      {loadingUser && <SpinnerLoad />}
      <motion.div className="auth" initial="out" animate="in" exit="out" variants={pageTransition}>
        <Form pathName={pathName} authData={authData} />
      </motion.div>
    </>
  )
}
