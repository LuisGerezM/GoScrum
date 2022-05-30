export const adapterFormSelectData = (data) => {
  const dataAdapter = {
    role: [...data.Rol],
    continent: [...data.continente],
    region: [...data.region],
  }

  return dataAdapter
}
