import { interDeleteTask } from "views/Tasks/Interceptor/interDeleteTask"
import { interEditTask } from "views/Tasks/Interceptor/interEditTask"
import { interGetTask } from "views/Tasks/Interceptor/interGetTask"
import { interPostTask } from "views/Tasks/Interceptor/interPostTask"
import { TYPES } from "../types/types"

export const tasksRequest = (data) => ({
  type: TYPES.TASKS_REQUEST,
  payload: data,
})

export const tasksSuccess = (data) => ({
  type: TYPES.TASKS_SUCCESS,
  payload: data,
})

export const tasksFailure = (error) => ({
  type: TYPES.TASKS_FAILURE,
  payload: error,
})

export const resetTasksNotification = () => ({
  type: TYPES.TASKS_RESET_NOTIFICATION,
})

export const resetTasksState = () => ({
  type: TYPES.TASKS_RESET_STATE,
})

export const getTasks =
  ({ path, statusResponse = "" }) =>
  async (dispatch) => {
    try {
      const typeAction = statusResponse ? statusResponse : "default"
      dispatch(tasksRequest(typeAction))

      const taskRequest = await interGetTask(path, typeAction)

      if (taskRequest.statusGet === "success") {
        const { data, statusCode } = taskRequest.data
        dispatch(tasksSuccess({ data, typeAction, statusCode }))
      } else {
        throw new Error(taskRequest.msg)
      }
    } catch (error) {
      console.log({ error })
      dispatch(tasksFailure(error.message))
    }
  }

export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch(tasksRequest("DELETE"))

    const taskRequest = await interDeleteTask(id)

    console.log("taskRequest -->> createTask -->>", taskRequest)

    if (taskRequest.statusGet === "success") {
      const { status_code } = taskRequest
      dispatch(getTasks({ path: "", statusResponse: "DELETE", status_code }))
    } else throw new Error(taskRequest.msg)
  } catch (error) {
    console.log({ error })
    dispatch(tasksFailure(error.message))
  }
}

export const editCardStatus = (data) => async (dispatch) => {
  try {
    dispatch(tasksRequest("EDIT"))

    const statusArray = ["NEW", "IN PROGRESS", "FINISHED"]
    const newStatusIndex = statusArray.indexOf(data.status) > 1 ? 0 : statusArray.indexOf(data.status) + 1

    const newStatus = statusArray[newStatusIndex]

    const taskRequest = await interEditTask(data, newStatus)

    if (taskRequest.statusGet === "success") {
      const { status_code } = taskRequest
      dispatch(getTasks({ path: "", statusResponse: "EDIT", status_code }))
    } else throw new Error(taskRequest.msg)
  } catch (error) {
    console.log({ error })
    dispatch(tasksFailure(error.message))
  }
}

export const createTask = (data) => async (dispatch) => {
  try {
    dispatch(tasksRequest("CREATE"))

    const taskRequest = await interPostTask(data)

    if (taskRequest.statusGet === "success") {
      const { status_code } = taskRequest
      dispatch(getTasks({ path: "", statusResponse: "CREATE", status_code }))
    } else throw new Error(taskRequest.msg)
  } catch (error) {
    console.log({ error })
    dispatch(tasksFailure(error.message))
  }
}
