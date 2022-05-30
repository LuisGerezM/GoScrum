export const adapterTaskDataSelect = (data) => {
  const dataAdapter = {
    status: [...data.status],
    importance: [...data.importance],
  }

  return dataAdapter
}
