export const utilCheckSession = (pathName) => {
  console.log("pathname", pathName)
  const getToken = { status_t: false }

  if (pathName === "login") {
    localStorage.getItem("token_user") && (getToken.status_t = true)
  }
  console.log("getToken A RETORNAS --->>", getToken)
  return getToken
}
