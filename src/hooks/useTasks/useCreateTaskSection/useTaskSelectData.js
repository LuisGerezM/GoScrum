import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env

export const useTaskSelectData = () => {
  const [dataSelect, setDataSelect] = useState(null)
  const [loadingTaskData, setLoadingTaskData] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setLoadingTaskData(true)
    fetch(`${BASEURL}task/data`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token_user")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataSelect(data.result)
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoadingTaskData(false))
  }, [dispatch])

  return { dataSelect, loadingTaskData }
}
