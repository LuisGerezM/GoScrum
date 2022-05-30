import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { alertMsg } from "utilities/utilAlert/utilAlertMsg"
import { adapterTaskDataSelect } from "views/Tasks/adapters/adapterTaskDataSelect/adapterTaskDataSelect"

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env
const { REACT_APP_AUTHORIZATION: AUTH } = process.env

export const useTaskSelectData = () => {
  const [dataSelect, setDataSelect] = useState(null)
  const [loadingTaskData, setLoadingTaskData] = useState(false)
  const [errorTaskData, setErrorTaskData] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setLoadingTaskData(true)
    fetch(`${BASEURL}task/data`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(AUTH)}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          setDataSelect(adapterTaskDataSelect(data.result))
        } else throw new Error(data.message)
      })
      .catch((error) => {
        setErrorTaskData(true)
        alertMsg({ title: "ERROR", text: `Ups... Ocurrió un problema ${error.message}`, icon: "error" })
      })
      .finally(() => setLoadingTaskData(false))

    return () => {
      setErrorTaskData(false)
      setDataSelect(null)
    }
  }, [dispatch])

  return { dataSelect, loadingTaskData, errorTaskData }
}
