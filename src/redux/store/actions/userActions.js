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

export const loginUser = (data) => (dispatch) => {
  console.log("loginUser data", data)
  dispatch(userRequest())

  fetch(`${BASEURL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({
    //   data.userName,
    //   data.password,
    // }),
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data in userActions ->", data)

      if (data.status_code === 200) {
        console.log("TRUEEE")
        // En vez de localStorage puedo usar sessionStorage ... asi cuando ciere sesion se mata lo almacenado
        localStorage.setItem("token_user", data.result.token)
        // localStorage.setItem("userName", data.result.user.userName)
        dispatch(userSuccess(data.result.user.userName))
        // navigate("/", { replace: true });
      } else {
        console.log("ELSEEEE")
        throw new Error("Por favor, ingresá credenciales válidas..");
      }
    })
    .catch((error) => dispatch(userFailure(error.message)))
}
