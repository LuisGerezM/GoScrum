import React from "react"
import { ToastContainer } from "react-toastify"

export const Toast = ({ error = null, theme = "dark" }) => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1200}
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

