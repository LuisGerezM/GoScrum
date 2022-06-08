import { Button } from "components/Button/Button"
import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter"
import { useHeader } from "hooks/useHeader/useHeader"
import { useSelector } from "react-redux"

import logo from "assets/img/GoScrum.png"

import "./Header.styles.css"

export const Header = () => {
  const { handlerLogout, to, valueLink, tasks, nameUser } = useHeader()

  return (
    <header>
      <span>
        <img src={logo} alt="logo GOScrum" />
      </span>
      <div className="wrapper_rigth_header">
        <LinkReactRouter to={to} valueLink={valueLink} />
        <div>Tareas creadas: {tasks?.length}</div>
        <div>
          <strong>{nameUser}</strong>
        </div>
        <Button textBtn="X" nameClass="logout" onClick={handlerLogout} />
      </div>
    </header>
  )
}
