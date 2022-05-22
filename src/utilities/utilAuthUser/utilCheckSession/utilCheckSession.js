export const utilCheckSession = (pathName) => {
  const getToken = { status_t: false }

  if (pathName === "login") {
    localStorage.getItem("token_user") && (getToken.status_t = true)
  }
  
  return getToken
}
