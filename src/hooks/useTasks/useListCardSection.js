import { debounce } from "@mui/material"
import { useResize } from "hooks/useResize"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTasks, resetTasksNotification } from "redux/store/actions/tasksActions"

export const useListCardSection = () => {
  const { isPhone } = useResize()

  const [listTasks, setListTasks] = useState(null)
  const [renderListTasks, setRenderListTasks] = useState(null)

  const [msgTasks, setMsgTasks] = useState(null)

  const { loadingTasks, tasks, error, success_request } = useSelector((state) => {
    return state.tasksReducer
  })
  const dispatch = useDispatch()

  // section filter cards
  // radio button
  const [tasksFromWho, setTasksFromWho] = useState("ALL")

  // input search
  const [searchTitle, setSearchTitle] = useState(null)
  const [loadingInputSearch, setLoadingInputSearch] = useState(false)

  // select
  const [valueSelect, setValueSelect] = useState("")

  useEffect(() => {
    if (error) {
      setMsgTasks("Ups... Ocurrió un problema ... Pongase en contacto con el administrador ")
    }

    return () => {
      console.log("desmontando efect --> error")
    }
  }, [error])

  useEffect(() => {
    console.log("success_request", success_request)
    if (tasks?.length) {
      setListTasks(tasks)
      setRenderListTasks(tasks)
      setMsgTasks(null)
    } else if (success_request) {
      console.log("entre aqui")
      setMsgTasks("Aún no tienes tareas")
      dispatch(resetTasksNotification())
    }
  }, [tasks, success_request, dispatch])

  useEffect(() => {
    setRenderListTasks(null)

    dispatch(getTasks(tasksFromWho === "MY" ? { path: "/me", statusResponse: "" } : { path: "", statusResponse: null }))
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
    setLoadingInputSearch(true)
    setTimeout(() => {
      setSearchTitle(e.target.value)
      setLoadingInputSearch(false)
    }, 500)
  }, 500)

  const handleChangeImportance = (e) => {
    setLoadingInputSearch(true)
    if (e.currentTarget.value === "ALL") {
      setValueSelect(e.currentTarget.value)
      setRenderListTasks(listTasks)
    } else if (e.currentTarget.value !== "") {
      setValueSelect(e.currentTarget.value)
      setRenderListTasks(listTasks.filter((data) => data.importance === e.currentTarget.value))
    }
    setTimeout(() => {
      setLoadingInputSearch(false)
    }, 500)
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
    loadingInputSearch,
  }
}
