export const adapterRegister = ({
  status_code,
  result: {
    user: { userName, teamID, role },
  },
}) => {
  return { userName, teamID, role, status_code: Number.parseInt(status_code) }
}
