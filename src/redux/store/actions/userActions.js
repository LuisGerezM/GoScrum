import { utilStatusRequest } from "utilities/utilStatusRequest/utilStatusRequest"
import { TYPES } from "../types/types"
// import { toast } from "react-toastify"

import apiCall from "services/apiCall/apiCall"
import { adapterLogin } from "adapters/adapterAuth/adapterLogin/adapterLogin"
import { adapterRegister } from "adapters/adapterAuth/adapterRegister/adapterRegister"

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
      // toast(utilStatusRequest(loginResult.status_code))

      const { userName, role, status_code } = adapterLogin(loginResult)

      dispatch(
        userSuccess({
          userName,
          role,
          status_code: utilStatusRequest(status_code),
        })
      )
    } else {
      throw new Error(loginResult.status_code)
    }
  } catch (error) {
    dispatch(userFailure(utilStatusRequest(error.message)))
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
      // toast(utilStatusRequest(registerResult.status_code))

      const { role, teamID, status_code } = adapterRegister(registerResult)

      dispatch(
        userSuccess({
          role,
          teamID,
          status_code: utilStatusRequest(status_code),
        })
      )
    } else {
      throw new Error(registerResult.status_code)
    }
  } catch (error) {
    dispatch(userFailure(utilStatusRequest(error.message)))
  }
}
