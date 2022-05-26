
import { TYPES } from "../types/types"
import apiCall from "services/apiCall/apiCall"
import { adapterLogin } from "views/Auth/adapters/adapterAuth/adapterLogin/adapterLogin"
import { adapterRegister } from "views/Auth/adapters/adapterAuth/adapterRegister/adapterRegister"
import { utilStatusRequest } from "utilities/utilStatusRequest/utilStatusRequest"

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env

export const userRequest = () => ({
  type: TYPES.USER_REQUEST,
})

export const userSuccess = (data) => ({
  type: TYPES.USER_SUCCESS,
  payload: data,
})

export const userFailure = (error) => ({
  type: TYPES.USER_FAILURE,
  payload: error,
})

export const resetUserNotification = () => ({
  type: TYPES.USER_RESET_NOTIFICATION,
})

export const loginUser = (authDataUser) => async (dispatch) => {
  try {
    dispatch(userRequest())
    const loginResult = await apiCall({
      method: "POST",
      url: `${BASEURL}auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authDataUser),
    })

    if (loginResult.status_code === 200) {
 

      localStorage.setItem("token_user", loginResult.result.token)
      localStorage.setItem("userName", loginResult.result.user.userName)
      const { userName, role, status_code } = adapterLogin(loginResult)
  
      dispatch(
        userSuccess({
          userName,
          role,
          status_code: utilStatusRequest({ status: status_code }),
        })
      )
    } else {
      throw new Error(loginResult.status_code)
    }
  } catch (error) {
    dispatch(userFailure(utilStatusRequest({ status: error.message, typeOfOperation: error.message })))
  }
}

export const registerUser = (newUser) => async (dispatch) => {
  const { userName, password, email, teamID, role, continent, region } = newUser

  try {
    dispatch(userRequest())

    const registerResult = await apiCall({
      method: "POST",
      url: `${BASEURL}auth/register`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: { userName, password, email, teamID, role, continent, region },
      }),
    })

    if (registerResult.status_code === 201) {

      const { role, teamID, status_code } = adapterRegister(registerResult)

      dispatch(
        userSuccess({
          role,
          teamID,
          status_code: utilStatusRequest({ status: status_code }),
        })
      )
    } else {
      throw new Error(registerResult.status_code)
    }
  } catch (error) {
    dispatch(userFailure(utilStatusRequest({ status: error.message, typeOfOperation: error.message })))
  }
}
