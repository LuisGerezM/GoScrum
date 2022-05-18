import Swal from "sweetalert2";

export const alertMsg = async ({
  title,
  text,
  icon,
  confirmButtonText = "Aceptar",
}) => {
  // console.log("tbn");
  // console.log("recibo", title, text, confirmButtonText);
  let takeResponse = await Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: `${icon}`,
    confirmButtonText: `${confirmButtonText}`,
    width: "400px",
    timer: 3000,
    timerProgressBar: true,
  });

  return takeResponse;
};
