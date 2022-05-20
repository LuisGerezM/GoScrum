export const utilStatusRequest = (status) => {
  console.log(status)

  const statusRequest = {
    200: "Inicio de sesión existoso",
    201: "Usuario registrado con éxito",
    400: "Ups.. Ocurrió un problema",
    401: "Ups.. Por favor verifica tus credenciales",
    404: "Ups.. tenemos un problema",
    409: "Ups.. Conflicto de solicitúd de usuario",
  }

  return statusRequest[Number.parseInt(status)] ? statusRequest[Number.parseInt(status)] : "Ups.."
}
