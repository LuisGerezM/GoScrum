import { TYPES } from "../types/types"

const initialState = {
  loadingTasks: false,
  tasks: [],
  error: "",
  status_code: "",
  success_request: false,
}

const { TASKS_REQUEST, TASKS_SUCCESS, TASKS_FAILURE, TASKS_RESET_NOTIFICATION, TASKS_RESET_STATE } = TYPES

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_REQUEST:
      return {
        ...state,
        loadingTasks: action.payload,
      }

    case TASKS_SUCCESS:
      return {
        ...initialState,
        tasks: action.payload.data,
        status_code: action.payload.statusCode,
        success_request: action.payload.typeAction,
      }

    case TASKS_FAILURE:
      return {
        ...initialState,
        error: action.payload,
      }

    case TASKS_RESET_NOTIFICATION:
      return { ...initialState, tasks: state.tasks }

    case TASKS_RESET_STATE:
      return { ...initialState }

    default:
      return state
  }
}
