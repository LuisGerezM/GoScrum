import { useEffect, useState } from "react"

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env

export const useAuthData = () => {
  const [authData, setAuthData] = useState(null)
  const [authDataError, setAuthDataError] = useState(false)

  useEffect(() => {
    fetch(`${BASEURL}auth/data`)
      .then((response) => response.json())
      .then((data) => {
        setAuthData(data.result)
        setAuthDataError(false)
      })
      .catch((error) => setAuthDataError(true))

    return () => {
      setAuthData(null)
      setAuthDataError(false)
    }
  }, [])

  return { authData, authDataError }
}
