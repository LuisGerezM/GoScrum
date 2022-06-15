import apiCall from "services/apiCall/apiCall"
import { utilStatusRequest } from "utilities/utilStatusRequest/utilStatusRequest"
import { adapterGetTask } from "../adapters/adapterGetTask"

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env
const { REACT_APP_AUTHORIZATION: AUTH } = process.env

const interGetTask = async (path, messageRequest) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(AUTH)}`,
    }

    const fetchingTasks = await apiCall({ url: `${BASEURL}task${path}`, headers })
    const { status_code } = fetchingTasks

    if (fetchingTasks.message === "OK") {
      const adapterResponse = adapterGetTask({ fetchingTasks, status_code, messageRequest })
      return { statusGet: "success", data: adapterResponse }
    } else {
      throw new Error(status_code)
    }
  } catch (error) {
    return { status: "error", msg: utilStatusRequest({ status: error.message, where: "tasks" }) }
  }
}

const interPostTask = async (data) => {
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

const interDeleteTask = async (id) => {
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

const interEditTask = async (data, newStatus = null) => {
  const { tile, importance, description } = data
  const status = newStatus ? newStatus : data.status
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(AUTH)}`,
    }

    const fetchingTasks = await apiCall({
      method: "PATCH",
      url: `${BASEURL}task/${data._id}`,
      headers,
      body: JSON.stringify({
        task: {
          tile,
          importance,
          status,
          description,
        },
      }),
    })

    const { status_code, message } = fetchingTasks

    if (fetchingTasks.status_code === 200) {
      return { statusGet: "success", status_code, message }
    } else {
      throw new Error(Number.parseInt(status_code))
    }
  } catch (error) {
    return { status: "error", msg: utilStatusRequest({ status: error.message, where: "tasks" }) }
  }
}

export { interGetTask, interPostTask, interDeleteTask, interEditTask }
