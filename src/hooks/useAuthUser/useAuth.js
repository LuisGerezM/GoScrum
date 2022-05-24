import { adapterFormSelectData } from "adapters/adapterAuth/adapterRegister/adapterFormSelectData"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { utilCheckSession } from "utilities/utilAuthUser/utilCheckSession/utilCheckSession"

import { alertMsg } from "utilities/utilAlert/utilAlertMsg"

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env

export const useAuth = (pathName) => {
  const [authData, setAuthData] = useState(null)
  // const [authDataError, setAuthDataError] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [loadingMountAuth, setLoadingMountAuth] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setLoadingMountAuth(true)
    fetch(`${BASEURL}auth/data`)
      .then((response) => response.json())
      .then((data) => {
        setAuthData(adapterFormSelectData(data.result))
      })
      .catch((error) => {
        alertMsg({ title: "ERROR", text: "Ups... Ocurrió un problema", icon: "error" })
      })
      .finally(() => setLoadingMountAuth(false))

    return () => {
      setAuthData(null)
    }
  }, [])

  useEffect(() => {
    if (utilCheckSession(pathName).status_t) return navigate("/", { replace: true })
    if (pathName === "register") setShowRegister(true)

    return () => {
      setShowRegister(false)
    }
  }, [navigate, pathName])

  return { authData, showRegister, loadingMountAuth }
}
