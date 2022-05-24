import { TYPES } from "../types/types"


const initialState = {
  loadingTasks: false,
  tasks: [],
  error: "",
}

const { TASKS_REQUEST, TASKS_SUCCESS, TASKS_FAILURE } = TYPES

// el action para el switch (como el useReducer)
export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_REQUEST:
      console.log('REQUEST TASKS')
      return {
        ...state,
        loadingTasks: true,
      }

    case TASKS_SUCCESS:
      console.log('SUCCESS TASKS')
      console.log("aqui", { action });
      return {
        loadingTasks: false,
        tasks: action.payload,
        error: "",
      }

    case TASKS_FAILURE:
      return {
        loadingTasks: false,
        tasks: [],
        error: action.payload, // este tiene error -> pasado por tasksFailure
      }

    default:
      return state
  }
}
