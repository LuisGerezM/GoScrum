export const utilStatusRequest = ({ status, where = "auth", messageRequest = null, typeAction = null }) => {
  const statusRequest = {
    200: `${where === "auth" ? "Inicio de sesión existoso..." : `Operación realizada con éxito... ${messageRequest}`}`,
    201: `${where === "auth" ? "Usuario registrado con éxito..." : `Operación realizada con éxito... ${messageRequest}`}`,
    400: `Ups.. Ocurrió un problema... ${status}`,
    401: `Ups.. Por favor verifica tus credenciales... ${status}`,
    404: `Ups.. tenemos un problema... ${status}`,
    409: `Ups.. Conflicto de solicitúd de usuario... ${status}`,
  }

  return statusRequest[status] ? statusRequest[status] : `Ups..Ponte en contacto con el administrador... ${status}`
}
