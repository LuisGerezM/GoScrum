// import apiCall from "services/apiCall/apiCall"
// import { utilStatusRequest } from "utilities/utilStatusRequest/utilStatusRequest"

// const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env
// const { REACT_APP_AUTHORIZATION: AUTH } = process.env

// export const interEditTask = async (data, newStatus = null) => {
//   const { tile, importance, description } = data
//   const status = newStatus ? newStatus : data.status
//   try {
//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem(AUTH)}`,
//     }

//     const fetchingTasks = await apiCall({
//       method: "PATCH",
//       url: `${BASEURL}task/${data._id}`,
//       headers,
//       body: JSON.stringify({
//         task: {
//           tile,
//           importance,
//           status,
//           description,
//         },
//       }),
//     })

//     const { status_code, message } = fetchingTasks

//     if (fetchingTasks.status_code === 200) {
//       return { statusGet: "success", status_code, message }
//     } else {
//       throw new Error(Number.parseInt(status_code))
//     }
//   } catch (error) {
//     return { status: "error", msg: utilStatusRequest({ status: error.message, where: "tasks" }) }
//   }
// }
