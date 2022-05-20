import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { resetUserNotification } from "redux/store/actions/userActions"

export const useNotification = () => {
  const { error, status_code, success_request } = useSelector((state) => {
    return state.userReducer
  })
  const dispatch = useDispatch()

  // console.log("error, success", error, success)
  const [showNotification, setShowNotification] = useState(false)

  // if ((!error || !success) && showNotification) {
  //   setShowNotification(false)
  //   console.log("estoy en useNotification")
  // }

  // console.log("estoy en handleShowNotification --> ", "SUCCESSS", success, "SHOW NOTIII", showNotification)

  const handleShowNotification = () => {
    if (success_request && !showNotification) {
      // console.log("SE EJECUTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
      // console.log("setShowNotification", showNotification)
      setShowNotification(true)
      // toast("toast lanzado")
      setTimeout(() => {
        setShowNotification(false)
      }, 2500)
    }
  }

  handleShowNotification()

  // const handleNotification = () => {
  //   // console.log("estoy en handleShowNotification --> ", "SUCCESSS", success, "SHOW NOTIII", showNotification)
  //   if (success && !showNotification) {
  //     // console.log("SE EJECUTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
  //     // console.log("setShowNotification", showNotification)
  //     setShowNotification(true)
  //     toast("toast lanzado")
  //   }
  // }

  return { showNotification }
}
