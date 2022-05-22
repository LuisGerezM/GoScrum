import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { utilCheckSession } from "utilities/utilAuthUser/utilCheckSession/utilCheckSession"

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env

export const useAuth = (pathName) => {
  const [authData, setAuthData] = useState(null)
  const [authDataError, setAuthDataError] = useState(false)
  
  const navigate = useNavigate()

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

  useEffect(() => {
    
    if (utilCheckSession(pathName).status_t) return navigate('/', {replace: true})
  
    return () => {
      console.log('desmontando efect useAuth - navigate')
    }
  }, [navigate, pathName])
  

  return { authData, authDataError }
}
