import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"
import { useAuthData } from "hooks/useAuthUser/useAuthData"

import { alertMsg } from "utilities/utilAlert/utilAlertMsg"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"
import { Toast } from "components/Loading/Toast/Toast"
import "react-toastify/dist/ReactToastify.css"

import Form from "../components/Form/Form"

import "../Auth.styles.css"

export const Register = () => {
  const { loadingUser, pathName, showNotification } = useUserForm()

  const { authData, authDataError } = useAuthData()

  if (authDataError) return alertMsg({ title: "ERROR", text: "Ups... Ocurrió un problema", icon: "error" })

  return (
    <>
      {loadingUser && <SpinnerLoad />}
      <div className="auth">
        <Form pathName={pathName} authData={authData} />
      </div>
      {showNotification && pathName === "register" && <Toast />}
    </>
  )
}
