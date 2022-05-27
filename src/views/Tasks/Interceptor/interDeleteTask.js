import apiCall from "services/apiCall/apiCall"
import { utilStatusRequest } from "utilities/utilStatusRequest/utilStatusRequest"

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env
const { REACT_APP_AUTHORIZATION: AUTH } = process.env

export const interDeleteTask = async (id) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(AUTH)}`,
    }

    const deleteTask = await apiCall({
      method: "DELETE",
      url: `${BASEURL}task/${id}`,
      headers,
    })

    const { status_code, message } = deleteTask

    if (deleteTask.status_code === 200) {
      return { statusGet: "success", status_code, message }
    } else {
      throw new Error(Number.parseInt(status_code))
    }
  } catch (error) {
    return { status: "error", msg: utilStatusRequest({ status: error.message, where: "tasks" }) }
  }
}
