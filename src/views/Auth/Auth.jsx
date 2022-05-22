import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"
import { useAuth } from "hooks/useAuthUser/useAuth"
import { utilCheckSession } from "utilities/utilAuthUser/utilCheckSession/utilCheckSession"

import Form from "./components/Form/Form"
import { useNavigate } from "react-router-dom"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"
import { alertMsg } from "utilities/utilAlert/utilAlertMsg"

import "./Auth.styles.css"

export const Auth = () => {
  const { loadingUser, pathName } = useUserForm()

  const { authData, authDataError } = useAuth(pathName)

  if (authDataError && pathName === "register") return alertMsg({ title: "ERROR", text: "Ups... Ocurrió un problema", icon: "error" })

  return (
    <>
      {loadingUser && <SpinnerLoad />}
      <div className="auth">
        <Form pathName={pathName} authData={authData} />
      </div>
    </>
  )
}
