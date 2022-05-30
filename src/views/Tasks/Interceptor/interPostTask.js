import apiCall from "services/apiCall/apiCall"
import { utilStatusRequest } from "utilities/utilStatusRequest/utilStatusRequest"

const { REACT_APP_AUTHORIZATION: AUTH } = process.env
const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env

export const interPostTask = async (data) => {
  try {
    const { description, importance, status, title } = data

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(AUTH)}`,
    }

    const fetchingTasks = await apiCall({
      method: "POST",
      url: `${BASEURL}task`,
      headers,
      body: JSON.stringify({
        task: { description, importance, status, title },
      }),
    })

    const { status_code } = fetchingTasks

    if (fetchingTasks.status_code === 200) {
      return { statusGet: "success", status_code }
    } else {
      throw new Error(Number.parseInt(status_code))
    }
  } catch (error) {
    return { status: "error", msg: utilStatusRequest({ status: error.message, where: "tasks" }) }
  }
}
