import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { resetTasksState } from "redux/store/actions/tasksActions"
import { utilAlertConfirm } from "utilities/utilAlert/utilAlertConfirm"

export const useHeader = () => {
  const { tasks } = useSelector((state) => {
    return state.tasksReducer
  })

  const { user } = useSelector((state) => {
    return state.userReducer
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const nameUser = user?.userName || localStorage.getItem("userName")

  const handlerLogout = async () => {
    let takeResponse = await utilAlertConfirm({
      title: `Estás seguro que desea cerrar sesión?`,
      text: `Por favor confirmar acción`,
      icon: "question",
      showCancelButton: true,
    })

    if (takeResponse) {
      dispatch(resetTasksState())
      localStorage.removeItem("token_user")
      localStorage.removeItem("role")
      localStorage.removeItem("userName")
      navigate("/login", { replace: true })
    }
  }

  const location = useLocation()
  const pathName = location.pathname.slice(1)

  const to = pathName === "donate" ? "/" : "/donate"
  const valueLink = pathName === "donate" ? "Inicio" : "Donar"

  return { handlerLogout, to, valueLink, tasks, nameUser }
}
