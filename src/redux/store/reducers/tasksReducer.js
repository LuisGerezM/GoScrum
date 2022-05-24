import { TYPES } from "../types/types"

const initialState = {
  loadingTasks: false,
  tasks: [],
  error: "",
}

const { REQUEST, SUCCESS, FAILURE } = TYPES

// el action para el switch (como el useReducer)
export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loadingTasks: true,
      }

    case SUCCESS:
      // console.log("aqui", { action });
      return {
        loadingTasks: false,
        tasks: action.payload,
        error: "",
      }

    case FAILURE:
      return {
        loadingTasks: false,
        tasks: [],
        error: action.payload, // este tiene error -> pasado por tasksFailure
      }

    default:
      return state
  }
}
