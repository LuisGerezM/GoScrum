import React from "react"
import { ToastContainer } from "react-toastify"

export const Toast = ({ error }) => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1300}
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
