import { Link as LinkRR } from "react-router-dom"

export const LinkReactRouter = ({ divClass = "", linkClass = "", to, valueLink }) => {
  return (
    <div className={divClass}>
      <LinkRR className={linkClass} to={to}>
        {valueLink}
      </LinkRR>
    </div>
  )
}
