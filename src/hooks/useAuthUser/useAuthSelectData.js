import { useEffect, useState } from "react"
import { adapterFormSelectData } from "views/Auth/adapters/adapterRegister/adapterFormSelectData"

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env

export const useAuthSelectData = () => {
  const [authData, setAuthData] = useState(null)
  const [loadingMountAuth, setLoadingMountAuth] = useState(true)

  useEffect(() => {
    fetch(`${BASEURL}auth/data`)
      .then((response) => response.json())
      .then((data) => {
        setAuthData(adapterFormSelectData(data.result))
      })
      .catch((error) => {
        console.log("error", error)
      })
      .finally(() => setLoadingMountAuth(false))

    return () => {
      setAuthData(null)
    }
  }, [])

  return { authData, loadingMountAuth }
}
