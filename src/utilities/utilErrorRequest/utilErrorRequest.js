export const utilErrorRequest = (status) => {
  console.log(status)
  console.log(typeof Number.parseInt(status))
  const statusFetch = {
    400: "Ups.. Ocurrió un problema",
    401: "Ups.. Por favor verifica tus credenciales",
    404: "Ups.. tenemos un problema",
    409: "Ups.. Conflicto de solicitúd de usuario",
  }

  return statusFetch[Number.parseInt(status)] ? statusFetch[Number.parseInt(status)] : "Ups.."
}
