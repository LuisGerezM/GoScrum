import { Button } from "components/Button/Button"
import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter"
import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"
import React from "react"

const FooterForm = ({ to, valueLink }) => {
  const { loadingUser } = useUserForm()
  return (
    <>
      <Button type="submit" textBtn="Enviar" classN="submit" disabled={loadingUser ? true : false} />
      <LinkReactRouter classDiv="div-a" classL="a-form" to={to} valueLink={valueLink} />
    </>
  )
}

export default FooterForm
