import { TYPES } from "../types/types"

const initialState = {
  loadingTasks: false,
  tasks: [],
  error: "",
  status_code: "",
  success_request: false,
}

const { TASKS_REQUEST, TASKS_SUCCESS, TASKS_FAILURE, TASKS_RESET_NOTIFICATION } = TYPES

// el action para el switch (como el useReducer)
export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_REQUEST:
      return {
        ...state,
        loadingTasks: true,
      }

    case TASKS_SUCCESS:
      console.log("SUCCESS TASKS")
      console.log("aqui", { action })
      return {
        ...initialState,
        tasks: action.payload.result,
        // agrgar status code
        success_request: action.payload.statusResponse,
      }

    case TASKS_FAILURE:
      return {
        ...initialState,
        // agrgar status code
        error: action.payload,
      }

    case TASKS_RESET_NOTIFICATION:
      console.log("TASKS_RESET_NOTIFICATION")
      return { ...initialState, tasks: state.tasks}

    default:
      return state
  }
}
