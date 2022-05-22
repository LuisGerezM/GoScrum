import { Button } from "components/Button/Button"
import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter"
import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"

const FooterForm = ({ to, valueLink }) => {
  const { loadingUser } = useUserForm()
  return (
    <>
      <Button type="submit" textBtn="Enviar" classN="submit" disabled={loadingUser ? true : false} />
      <LinkReactRouter divClass={"div-a"} linkClass={"a-form"} to={to} valueLink={valueLink} />
    </>
  )
}

export default FooterForm
