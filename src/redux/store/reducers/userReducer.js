const { TYPES } = require("../types/types")

const initialUserState = {
  loadingUser: false,
  user: {},
  error: "",
  status_code: "",
  success: false,
}

const { REQUEST, SUCCESS, FAILURE, RESET_USER_NOTIFICATION } = TYPES

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loadingUser: true }

    case SUCCESS:
      const possibleCases = {
        1: { userName: action.payload.userName, role: action.payload.role },
        2: { userName: action.payload.userName, role: action.payload.role, teamID: action.payload.teamID }
      }

      let dataUser = {}
      if (action.payload.userName || action.payload.role === "Team Member") dataUser = possibleCases[1]
      else if (action.payload.role === "Team Leader") dataUser = possibleCases[2]

      return { loadingUser: false, user: dataUser, error: "", status_code: action.payload.status_code, success: true }

    case FAILURE:
      return { loadingUser: false, user: [], error: action.payload, status_code: "", success: false }

    case RESET_USER_NOTIFICATION:
      return { ...state, error: "", status_code: "", success: false }

    default:
      return state
  }
}
