import { adapterFormSelectData } from "adapters/adapterAuth/adapterRegister/adapterFormSelectData"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { utilCheckSession } from "utilities/utilAuthUser/utilCheckSession/utilCheckSession"

import { alertMsg } from "utilities/utilAlert/utilAlertMsg"

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env

export const useAuth = (pathName) => {
  const [authData, setAuthData] = useState(null)
  const [authDataError, setAuthDataError] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${BASEURL}auth/data`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data)
        setAuthData(adapterFormSelectData(data.result))
        setAuthDataError(false)
      })
      .catch((error) => {
        setAuthDataError(true)
        alertMsg({ title: "ERROR", text: "Ups... Ocurrió un problema", icon: "error" })
      })

    return () => {
      setAuthData(null)
      setAuthDataError(false)
    }
  }, [])

  useEffect(() => {
    if (utilCheckSession(pathName).status_t) return navigate("/", { replace: true })
  }, [navigate, pathName])

  return { authData, authDataError }
}
