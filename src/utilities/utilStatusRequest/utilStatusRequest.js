export const utilStatusRequest = ({ status, where = "auth", typeOfOperation = "" }) => {
  console.log("status", status)
  // typeOfOperation -> create, edit, etc
  const statusRequest = {
    200: `${where === "auth" ? "Inicio de sesión existoso..." : `Operación realizada con éxito... ${typeOfOperation}`}`,
    201: `${where === "auth" ? "Usuario registrado con éxito..." : `Operación realizada con éxito... ${typeOfOperation}`}`,
    400: `Ups.. Ocurrió un problema... ${typeOfOperation}`,
    401: `Ups.. Por favor verifica tus credenciales... ${typeOfOperation}`,
    404: `Ups.. tenemos un problema... ${typeOfOperation}`,
    409: `Ups.. Conflicto de solicitúd de usuario... ${typeOfOperation}`,
  }

  return statusRequest[status] ? statusRequest[status] : `Ups..Ponte en contacto con el administrador... ${typeOfOperation}`
}
