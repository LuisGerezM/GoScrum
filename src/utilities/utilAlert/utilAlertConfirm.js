import Swal from "sweetalert2"

export const utilAlertConfirm = async ({ title, text = "", icon, confirmButtonText = "Aceptar", showCancelButton = null }) => {
  let takeResponse = await Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: `${icon}`,
    confirmButtonText: `${confirmButtonText}`,
    showCancelButton: `${showCancelButton}`,
    width: "400px",
  })

  return takeResponse.isConfirmed
}
