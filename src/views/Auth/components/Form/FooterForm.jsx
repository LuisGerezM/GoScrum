import { Button } from "components/Button/Button"
import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter"
import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"
import React from "react"
import { Link } from "react-router-dom"

const FooterForm = ({ to, valueLink }) => {
  const { loadingUser } = useUserForm()
  return (
    <>
      <Button type="submit" textBtn="Enviar" classN="submit" disabled={loadingUser ? true : false} />
      <div className="div-a">
        <LinkReactRouter classN="a-form" to={to} valueLink={valueLink} />
      </div>
    </>
  )
}

export default FooterForm
