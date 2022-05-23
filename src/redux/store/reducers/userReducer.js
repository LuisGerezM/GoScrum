const { TYPES } = require("../types/types")

const initialUserState = {
  loadingUser: false,
  user: {},
  error: "",
  status_code: "",
  success_request: false,
}

const { REQUEST, SUCCESS, FAILURE, RESET_NOTIFICATION } = TYPES

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loadingUser: true }

    case SUCCESS:
      // console.log("---->>>>> case SUCCESS")
      const possibleCases = {
        1: { userName: action.payload.userName, role: action.payload.role },
        2: { userName: action.payload.userName, role: action.payload.role, teamID: action.payload.teamID },
      }

      let dataUser = {}
      if (action.payload.role === "Team Leader") dataUser = possibleCases[2]
      else dataUser = possibleCases[1]
      // console.log("state en SUCCESSSSSSSSS", state)
      return { loadingUser: false, user: dataUser, error: "", status_code: action.payload.status_code, success_request: true }

    case FAILURE:
      // console.log("case FAILURE")
      return { loadingUser: false, user: [], error: action.payload, status_code: "", success_request: false }

    case RESET_NOTIFICATION:
      // console.log("---->>>>> case SUCCESS - state", state)
      // console.log("RESET_USER_NOTIFICATION --> RETURNNNN --> ", { ...initialUserState, user: state.user })
      return { ...initialUserState, user: state.user }

    default:
      return state
  }
}
