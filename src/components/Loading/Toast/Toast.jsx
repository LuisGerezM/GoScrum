import React from "react"
import { ToastContainer } from "react-toastify"

import "./Toast.styles.css"

export const Toast = ({ error = null, autoClose = 1500 }) => {

  return (
    <ToastContainer
      position="top-right"
      icon={error}
      autoClose={autoClose}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme={"dark"}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}
