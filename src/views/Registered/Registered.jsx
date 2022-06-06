import { useSelector } from "react-redux"
import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter"
import logo from "assets/img/GoScrum.png"

import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import "react-toastify/dist/ReactToastify.css"

import { useRegistered } from "hooks/useAuthUser/useRegistered"

import { Toast } from "components/Loading/Toast/Toast"
import { Button } from "components/Button/Button"

import "./Registered.styles.css"

export default function Registered() {
  const { user } = useSelector((state) => {
    return state.userReducer
  })

  const { teamID, handleCopyTeamId } = useRegistered()

  return (
    <main>
      <section className="registered">
        <div className="top">
          <img src={logo} alt="logo GOScrum" />
          <div className="title">Bienvenido Team Lider {user.userName}</div>
        </div>
        <p className="p-id-team">
          El teamID de tu equipo es: {teamID}
          <Button nameClass="btn-copy" textBtn={<ContentCopyIcon />} onClick={handleCopyTeamId} />
        </p>

        <p>Ahora puedes compartirlo a los miembros de tu equipo</p>
        <LinkReactRouter linkClass="btn-link" to="/login" valueLink="Ir a Login" />
      </section>
      <Toast theme="info" />
    </main>
  )
}
