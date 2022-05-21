export const adapterLogin = ({
  status_code,
  result: {
    user: { userName, role },
  },
}) => {
  return { userName, role, status_code: Number.parseInt(status_code) }
}
