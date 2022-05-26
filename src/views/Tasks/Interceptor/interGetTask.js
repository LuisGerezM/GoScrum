import apiCall from "services/apiCall/apiCall"
import { utilStatusRequest } from "utilities/utilStatusRequest/utilStatusRequest"
import { adapterGetTask } from "../adapters/adapterGetTask"

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env
const { REACT_APP_AUTHORIZATION: AUTH } = process.env

export const interGetTask = async (path, typeAction) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(AUTH)}`,
    }

    const fetchingTasks = await apiCall({ url: `${BASEURL}task${path}`, headers })
    const { status_code } = fetchingTasks

    if (fetchingTasks.message === "OK") {
      const adapterResponse = adapterGetTask({ fetchingTasks, status_code, typeAction })
      return { statusGet: "success", data: adapterResponse }
    } else {
      throw new Error(status_code)
    }
  } catch (error) {
    return { status: "error", msg: utilStatusRequest({ status: error.message, where: "tasks" }) }
  }
}
