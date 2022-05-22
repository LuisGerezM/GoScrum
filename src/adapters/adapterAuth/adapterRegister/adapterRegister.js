export const adapterRegister = ({
  status_code,
  result: {
    user: { teamID, role },
  },
}) => {
  return { teamID, role, status_code: Number.parseInt(status_code) }
}
