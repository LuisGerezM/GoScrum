import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { utilCheckSession } from "utilities/utilAuthUser/utilCheckSession/utilCheckSession"

export const useVerifyLoggedSesion = (pathName) => {
  const [showRegister, setShowRegister] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (utilCheckSession(pathName).status_t) return navigate("/", { replace: true })
    if (pathName === "register") setShowRegister(true)

    return () => {
      setShowRegister(false)
    }
  }, [navigate, pathName])

  return { showRegister }
}
