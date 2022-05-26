import { TYPES } from "../types/types"

const initialUserState = {
  loadingUser: false,
  user: {},
  error: "",
  status_code: "",
  success_request: false,
}

const { USER_REQUEST, USER_SUCCESS, USER_FAILURE, USER_RESET_NOTIFICATION } = TYPES

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { ...state, loadingUser: true }

    case USER_SUCCESS:
      const possibleCases = {
        1: { userName: action.payload.userName, role: action.payload.role },
        2: { userName: action.payload.userName, role: action.payload.role, teamID: action.payload.teamID },
      }

      let dataUser = {}
      if (action.payload.role === "Team Leader") dataUser = possibleCases[2]
      else if (action.payload.userName || action.payload.role === "Team Member") dataUser = possibleCases[1]

      return { ...initialUserState, user: dataUser, status_code: action.payload.status_code, success_request: true }

    case USER_FAILURE:
      return { ...initialUserState, error: action.payload }

    case USER_RESET_NOTIFICATION:
      return { ...initialUserState, user: state.user }

    default:
      return state
  }
}
