import { TYPES } from "../types/types"
import { interGetTask, interDeleteTask, interEditTask, interPostTask } from "views/Tasks/Interceptor/interIndex"

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

export const taskFormFieldsForEditing = (data) => ({
  type: TYPES.TASKS_FORM_FIELDS_FOR_EDITING,
  payload: data,
})

export const resetTasksNotification = (data) => ({
  type: TYPES.TASKS_RESET_NOTIFICATION,
  payload: data,
})

export const resetTasksState = () => ({
  type: TYPES.TASKS_RESET_STATE,
})

export const getTasks =
  ({ path, statusResponse = "", messageRequest = null }) =>
  async (dispatch) => {
    try {
      const typeAction = statusResponse ? statusResponse : "default"
      dispatch(tasksRequest(typeAction))

      const taskRequest = await interGetTask(path, messageRequest)

      if (taskRequest.statusGet === "success") {
        const { data, statusCode } = taskRequest.data
        dispatch(tasksSuccess({ data, typeAction, statusCode }))
      } else {
        throw new Error(taskRequest.msg)
      }
    } catch (error) {
      const message = error.message
      dispatch(tasksFailure({ message, name: "error get card" }))
    }
  }

export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch(tasksRequest("DELETE"))

    const taskRequest = await interDeleteTask(id)

    if (taskRequest.statusGet === "success") {
      const { status_code, message } = taskRequest
      dispatch(getTasks({ path: "", statusResponse: "DELETE", status_code, messageRequest: message }))
    } else throw new Error(taskRequest.msg)
  } catch (error) {
    const message = error.message
    dispatch(tasksFailure({ message, name: "error delete card" }))
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
      const { status_code, message } = taskRequest
      dispatch(getTasks({ path: "", statusResponse: "EDIT", status_code, messageRequest: message }))
    } else throw new Error(taskRequest.msg)
  } catch (error) {
    const message = error.message
    dispatch(tasksFailure({ message, name: "error edit status card" }))
  }
}

export const editCard = (data) => async (dispatch) => {
  try {
    dispatch(tasksRequest("EDIT"))

    const taskRequest = await interEditTask(data)

    if (taskRequest.statusGet === "success") {
      const { status_code, message } = taskRequest
      dispatch(getTasks({ path: "", statusResponse: "EDIT", status_code, messageRequest: message }))
    } else throw new Error(taskRequest.msg)
  } catch (error) {
    const message = error.message
    dispatch(tasksFailure({ message, name: "error edit card" }))
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
    const message = error.message
    dispatch(tasksFailure({ message, name: "error create" }))
  }
}
