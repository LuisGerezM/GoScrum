const { TYPES } = require("../types/types")

const initialUserState = {
  loadingUser: false,
  user: [],
  error: "",
}

const { REQUEST, SUCCESS, FAILURE } = TYPES

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loadingUser: true }

    case SUCCESS:
      return { loadingUser: false, user: action.payload, error: "" }

    case FAILURE:
      return { loadingUser: false, user: [], error: action.payload }

    default:
      return state
  }
}
