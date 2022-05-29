import React from "react"
import { ToastContainer } from "react-toastify"

import "./Toast.styles.css"

export const Toast = ({ autoClose = 1500, error }) => {
  return (
    <ToastContainer
      position="top-right"
      icon={Object.keys(error).length > 0 && error.name ? "😥" : "😎"}
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
