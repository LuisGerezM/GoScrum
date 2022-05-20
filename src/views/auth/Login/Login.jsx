import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"
import Form from "../components/Form/Form"

import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"
import { Toast } from "components/Loading/Toast/Toast"
import "react-toastify/dist/ReactToastify.css"

import "../Auth.styles.css"

export const Login = () => {
  const { loadingUser, showNotification, pathName } = useUserForm()

  return (
    <>
      {loadingUser && <SpinnerLoad />}
      <div className="auth">
        <Form pathName={pathName}/>
      </div>
      {showNotification && pathName === "login" && <Toast />}
    </>
  )
}
