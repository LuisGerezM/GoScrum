import Swal from "sweetalert2"

import "./utilAlertMsj.styles.css"

export const alertMsg = async ({ position = "center", title, text, icon, confirmButtonText = "Aceptar", typeALert = "success" }) => {
  if (typeALert === "error") {
    Swal.fire({
      title: `${title}`,
      text: `${text}`,
      icon: `${icon}`,
      width: "400px",
      timer: 3000,
      confirmButtonText: `${confirmButtonText}`,
      timerProgressBar: true,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    })
    return false
  } else {
    Swal.fire({
      position: "top-end",
      icon: `${icon}`,
      title: `${title}`,
      text: `${text}`,
      showConfirmButton: false,
      timer: 1500,
      color: "#214d87",
    })
    return true
  }
}
