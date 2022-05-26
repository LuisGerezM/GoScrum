export const utilStatusRequest = ({ status, where = "auth", typeAction = null }) => {
  const type = {
    EDIT: "Editar",
    DELETE: "Borrar",
    CREATE: "Crear",
    DEFAULT: "",
  }

  const action = typeAction ? type[typeAction] : status

  // console.log("status", status)

  const statusRequest = {
    200: `${where === "auth" ? "Inicio de sesión existoso..." : `Operación realizada con éxito... ${action}`}`,
    201: `${where === "auth" ? "Usuario registrado con éxito..." : `Operación realizada con éxito... ${action}`}`,
    400: `Ups.. Ocurrió un problema... ${action}`,
    401: `Ups.. Por favor verifica tus credenciales... ${action}`,
    404: `Ups.. tenemos un problema... ${action}`,
    409: `Ups.. Conflicto de solicitúd de usuario... ${action}`,
  }

  return statusRequest[status] ? statusRequest[status] : `Ups..Ponte en contacto con el administrador... ${status}`
}
