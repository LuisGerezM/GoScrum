import React from "react"
import { ToastContainer } from "react-toastify"

export const Toast = ({ error = null, autoClose }) => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={autoClose}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      icon={error === "error create" ? "😥" : "😎"}
      theme={"dark"}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}

