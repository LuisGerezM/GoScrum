import { useLocation, useNavigate } from "react-router-dom"

export const useHeader = (success_request) => {
  const navigate = useNavigate()

  const handlerLogout = () => {
    localStorage.removeItem("token_user")
    navigate("/login", { replace: true })
  }

  const location = useLocation()
  const pathName = location.pathname.slice(1)

  const to = pathName === "donate" ? "/" : "/donate"
  const valueLink = pathName === "donate" ? "Ir a Inicio" : "Donar"

  return { handlerLogout, to, valueLink }
}
