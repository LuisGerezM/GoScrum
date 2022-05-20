import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"
import React from "react"
import { Link } from "react-router-dom"

const FooterForm = ({ to, valueLink }) => {
  const { loadingUser } = useUserForm()
  return (
    <>
      <button type="submit" className="submit" disabled={loadingUser ? true : false}>
        Enviar
      </button>
      <div className="div-a">
        <Link className="a-form" to={to}>
          {valueLink}
        </Link>
      </div>
    </>
  )
}

export default FooterForm
