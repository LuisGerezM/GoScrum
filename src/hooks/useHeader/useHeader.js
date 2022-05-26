import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { resetTasksState } from "redux/store/actions/tasksActions"

export const useHeader = (success_request) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handlerLogout = () => {
    dispatch(resetTasksState())
    localStorage.removeItem("token_user")
    localStorage.removeItem("userName")
    navigate("/login", { replace: true })
  }

  const location = useLocation()
  const pathName = location.pathname.slice(1)

  const to = pathName === "donate" ? "/" : "/donate"
  const valueLink = pathName === "donate" ? "Ir a Inicio" : "Donar"

  return { handlerLogout, to, valueLink }
}
