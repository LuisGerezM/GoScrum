const { TYPES } = require("../types/types")

const initialUserState = {
  loadingUser: false,
  user: {},
  error: "",
  success: false,
  status_code: "",
}

const { REQUEST, SUCCESS, FAILURE, RESET_USER_NOTIFICATION } = TYPES

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loadingUser: true }

    case SUCCESS:
      const possibleCases = {
        1: { userName: action.payload.userName, role: action.payload.role },
        2: { role: action.payload.role, teamID: action.payload.teamID },
        3: { userName: action.payload.userName, role: action.payload.role },
      }

      let dataUser = {}
      if (action.payload.userName) dataUser = possibleCases[1]
      else if (action.payload.role === "Team Member" || action.payload.role === "Team Leader") dataUser = possibleCases[2]
      else dataUser = possibleCases[3]

      return { loadingUser: false, user: dataUser, error: "", success: true, status_code: action.payload.status_code }

    case FAILURE:
      return { loadingUser: false, user: [], error: action.payload, success: false, status_code: "" }

    case RESET_USER_NOTIFICATION:
      return { ...state, error: "", success: false, status_code: "" }

    default:
      return state
  }
}
