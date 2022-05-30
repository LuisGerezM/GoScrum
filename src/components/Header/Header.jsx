import { Button } from "components/Button/Button"
import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter"
import { useHeader } from "hooks/useHeader/useHeader"
import { useSelector } from "react-redux"

import logo from "assets/img/GoScrum.png"

import "./Header.styles.css"

export const Header = () => {
  const { tasks } = useSelector((state) => {
    return state.tasksReducer
  })

  const { user, success_request } = useSelector((state) => {
    return state.userReducer
  })

  const { handlerLogout, to, valueLink } = useHeader(success_request)

  const nameUser = user?.userName || localStorage.getItem("userName")

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
