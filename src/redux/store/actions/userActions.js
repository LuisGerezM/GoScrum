import { utilStatusRequest } from "utilities/utilStatusRequest/utilStatusRequest"
import { TYPES } from "../types/types"
import { toast } from "react-toastify"

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env

export const userRequest = () => ({
  type: TYPES.REQUEST,
})

export const userSuccess = (data) => ({
  type: TYPES.SUCCESS,
  payload: data,
})

export const userFailure = (error) => ({
  type: TYPES.FAILURE,
  payload: error,
})

export const resetUserNotification = () => ({
  type: TYPES.RESET_USER_NOTIFICATION,
})

export const loginUser = (authDataUser) => (dispatch) => {
  dispatch(userRequest())
  console.log("loginUser", `${BASEURL}auth/login`)
  fetch(`${BASEURL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authDataUser),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status_code === 200) {
        localStorage.setItem("token_user", data.result.token)
        toast(utilStatusRequest(data.status_code))
        dispatch(userSuccess({ userName: data.result.user.userName, role: data.result.user.role, status_code: utilStatusRequest(data.status_code) }))
      } else {
        throw new Error(data.status_code)
      }
    })
    .catch((error) => dispatch(userFailure(utilStatusRequest(error.message))))
}

export const registerUser = (newUser) => (dispatch) => {
  const { userName, password, email, teamID, role, continent, region } = newUser

  dispatch(userRequest())

  fetch(`${BASEURL}auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        userName,
        password,
        email,
        teamID,
        role,
        continent,
        region,
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data in userActions ->", data)

      if (data.status_code === 201) {
        toast(utilStatusRequest(data.status_code))
        dispatch(
          userSuccess({
            userName: data.result.user.userName,
            role: data.result.user.role,
            teamID: data.result.user.teamID,
            status_code: utilStatusRequest(data.status_code),
          })
        )
      } else {
        throw new Error(data.status_code)
      }
    })
    .catch((error) => dispatch(userFailure(utilStatusRequest(error.message))))
}
