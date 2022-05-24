import Swal from "sweetalert2";

export const utilAlertConfirm = async ({
  title,
  text = "",
  icon,
  confirmButtonText = "Aceptar",
  showCancelButton = null,
}) => {
  // console.log("tbn");
  // console.log("recibo", title, text, confirmButtonText);
  let takeResponse = await Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: `${icon}`,
    confirmButtonText: `${confirmButtonText}`,
    showCancelButton: `${showCancelButton}`,
    width: "400px",
  });

  if (takeResponse.isConfirmed) Swal.fire("Operación exitosa!", "", "success");

  return takeResponse.isConfirmed;
};
