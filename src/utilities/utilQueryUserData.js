export const utilQueryUserData = ({ userName = null, queryUserOnLine = null }) => {
  const dataUserOnLine = queryUserOnLine()

  const nameUser = dataUserOnLine.userName ? dataUserOnLine.userName : localStorage.getItem("userName")
  const roleUser = dataUserOnLine.role ? dataUserOnLine.role : localStorage.getItem("role")

  const enableUserActions = { status: false }

  if (nameUser === userName || roleUser === "Team Leader") enableUserActions.status = true

  return { enableUserActions }
}
