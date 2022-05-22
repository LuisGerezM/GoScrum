import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"
import { useAuthData } from "hooks/useAuthUser/useAuthData"
import { utilCheckSession } from "utilities/utilAuthUser/utilCheckSession/utilCheckSession"

import Form from "./components/Form/Form"
import { Navigate } from "react-router-dom"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"
import { alertMsg } from "utilities/utilAlert/utilAlertMsg"

import { motion } from "framer-motion"

import "./Auth.styles.css"

export const Auth = ({ pageTransition }) => {
  const { loadingUser, pathName } = useUserForm()

  // register
  const { authData, authDataError } = useAuthData()

  if (authDataError && pathName === "register") return alertMsg({ title: "ERROR", text: "Ups... Ocurrió un problema", icon: "error" })

  // login
  if (utilCheckSession(pathName).status_t) return <Navigate to="/" replace={true} />

  return (
    <>
      {loadingUser && <SpinnerLoad />}
      <motion.div className="auth" initial="out" animate="in" exit="out" variants={pageTransition}>
      {/* <div className="auth"> */}
        <Form pathName={pathName} authData={authData} />
      {/* </div> */}
      </motion.div>
    </>
  )
}
