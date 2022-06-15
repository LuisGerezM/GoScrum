import { debounce } from "@mui/material"
import { useResize } from "hooks/useResize"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { getTasks, resetTasksNotification, tasksFailure } from "redux/store/actions/tasksActions"

export const useListCardSection = () => {
  const { isPhone } = useResize()

  const [listTasks, setListTasks] = useState(null)
  const [renderListTasks, setRenderListTasks] = useState(null)

  const [msgTasks, setMsgTasks] = useState(null)

  const { loadingTasks, tasks, error, success_request, status_code } = useSelector((state) => {
    return state.tasksReducer
  })
  const dispatch = useDispatch()

  // section filter cards
  // radio button
  const [tasksFromWho, setTasksFromWho] = useState("ALL")

  // input search
  const [searchTitle, setSearchTitle] = useState(null)

  // select
  const [valueSelect, setValueSelect] = useState("")

  useEffect(() => {
    if (
      Object.keys(error).length > 0 &&
      error.name !== "error create" &&
      error.name !== "error edit card" &&
      error.name !== "error edit status card"
    ) {
      setMsgTasks("Ups... Ocurrió un problema ... Pongase en contacto con el administrador ")
      toast.info(error.message)
      dispatch(resetTasksNotification(error))
    }
  }, [error, dispatch])

  useEffect(() => {
    if (tasks.length > 0) {
      setListTasks(tasks)
      setRenderListTasks(tasks)
      setMsgTasks(null)
    } else if (tasks?.length === 0) {
      setMsgTasks("Aún no tienes tareas")
    }
  }, [tasks, dispatch])

  useEffect(() => {
    if (success_request === "DELETE") {
      toast.info(status_code)
      dispatch(resetTasksNotification())
    } else if (success_request === "default") dispatch(resetTasksNotification())
  }, [success_request, status_code, dispatch])

  useEffect(() => {
    setRenderListTasks(null)
    dispatch(getTasks(tasksFromWho === "MY" ? { path: "/me" } : { path: "" }))
  }, [tasksFromWho, dispatch])

  useEffect(() => {
    const filterTasksByTitle = (query) => {
      return listTasks?.filter((task) => task.title.toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    if (searchTitle) setRenderListTasks(filterTasksByTitle(searchTitle))
    else setRenderListTasks(listTasks)
  }, [searchTitle, listTasks])

  const handleChangeRadioBtn = (e) => {
    setValueSelect("")
    setTasksFromWho(e.currentTarget.value)
  }

  const handleSearchTitle = debounce((e) => {
    setSearchTitle(e.target.value)
  }, 1000)

  const handleChangeImportance = (e) => {
    if (e.currentTarget.value === "ALL") {
      setValueSelect(e.currentTarget.value)
      setRenderListTasks(listTasks)
    } else if (e.currentTarget.value !== "") {
      setValueSelect(e.currentTarget.value)
      setRenderListTasks(listTasks.filter((data) => data.importance === e.currentTarget.value))
    }
  }

  return {
    handleChangeRadioBtn,
    handleSearchTitle,
    handleChangeImportance,
    renderListTasks,
    valueSelect,
    isPhone,
    error,
    loadingTasks,
    listTasks,
    tasksFromWho,
    searchTitle,
    msgTasks,
  }
}
