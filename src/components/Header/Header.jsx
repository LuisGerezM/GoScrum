import { Button } from "components/Button/Button"
import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter"
import { useHeader } from "hooks/useHeader/useHeader"
import { useSelector } from "react-redux"

import "./Header.styles.css"

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
