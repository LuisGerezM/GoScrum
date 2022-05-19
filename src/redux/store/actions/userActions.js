import { utilStatusFetch } from "utilities/utilStatusFetch/utilStatusFetch"
import { TYPES } from "../types/types"

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
        // console.log(data)
        dispatch(userSuccess({ userName: data.result.user.userName, role: data.result.user.role, status_code: utilStatusFetch(data.status_code) }))
      } else {
        throw new Error("Por favor, ingresá credenciales válidas..")
      }
    })
    .catch((error) => dispatch(userFailure(error.message)))
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
        dispatch(userSuccess({ role: data.result.user.role, teamID: data.result.user.teamID, status_code: utilStatusFetch(data.status_code) }))
      } else {
        throw new Error("Ups... Ocurrió un error al registrar el usuario")
      }
    })
    .catch((error) => {
      console.log("error", error)
      console.log("error.message", error.message)
      console.log("error.message", error.status)
      dispatch(userFailure(error.message))
    })
}
