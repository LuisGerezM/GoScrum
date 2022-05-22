import { useLocation, useNavigate } from "react-router-dom"

// importamos sólo useSelector ya que useDispatch ya se usó, y por tanto no hace falta usarlo varias veces
import { useSelector } from "react-redux"

import "./Header.styles.css"
import { Button } from "components/Button/Button"
import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter"
import { useHeader } from "hooks/useHeader/useHeader"

export const Header = () => {
  const { user } = useSelector((state) => {
    return state.userReducer
  })

  const { handlerLogout, to, valueLink } = useHeader()

  return (
    <header>
      <span>
        <img src="/img/GoScrum.png" alt="logo" />
      </span>
      <div className="wrapper_rigth_header">
        <LinkReactRouter to={to} valueLink={valueLink} />
        <div>
          <strong>{user.userName}</strong>
        </div>
        <Button textBtn="X" classN="logout" onClick={handlerLogout} />
      </div>
    </header>
  )
}
