import { Button } from "components/Button/Button"
import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter"
import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"

const FooterForm = ({ to, valueLink }) => {
  const { loadingUser, handleMountedAuth } = useUserForm()

  return (
    <>
      <Button type="submit" textBtn="Enviar" nameClass="submit" disabled={loadingUser ? true : false} />
      <LinkReactRouter divClass={"div-a"} linkClass={"a-form"} to={to} valueLink={valueLink} onClick={handleMountedAuth} />
    </>
  )
}

export default FooterForm
