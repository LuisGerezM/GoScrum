import { Button } from "components/Button/Button"
import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter"

const FooterForm = ({ to, valueLink, loadingUser }) => {
  return (
    <>
      <Button type="submit" textBtn="Enviar" nameClass="submit" disabled={loadingUser ? true : false} />
      <LinkReactRouter divClass={"div-a"} linkClass={"a-form"} to={to} valueLink={valueLink} />
    </>
  )
}

export default FooterForm
