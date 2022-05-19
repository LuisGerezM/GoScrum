export const utilStatusFetch = (status) => {
  const statusFetch = {
    200: "Ingreso exitoso",
    201: "Usuario creado correctamente",
    400: "Ups.. Ocurrió un problema",
    401: "Ups.. Por favor verifica tus credenciales",
    409: "Ups.. Conflicto de solicitúd de usuario",
  }

  return statusFetch[status]
}
