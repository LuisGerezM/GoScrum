import { useEffect, useState } from "react"

export const useMountAuth = (pathName) => {
  const [showRegister, setShowRegister] = useState(false)
  const [loadingMountAuth, setLoadingMountAuth] = useState(false)

  useEffect(() => {
    setLoadingMountAuth(true)

    setTimeout(() => {
      setLoadingMountAuth(false)
      if (pathName === "register") setShowRegister(true)
    }, 500)

    return () => setShowRegister(false)
  }, [pathName])

  return { loadingMountAuth, showRegister }
}
