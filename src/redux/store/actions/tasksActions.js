import { TYPES } from "../types/types"
import { toast } from "react-toastify"

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env

export const tasksRequest = () => ({
  type: TYPES.TASKS_REQUEST,
})

// en tasksReducer este payload lo usaremo así ->  tasks: action.payload,
export const tasksSuccess = (data) => ({
  type: TYPES.TASKS_SUCCESS,
  payload: data,
})

export const tasksFailure = (error) => ({
  type: TYPES.TASKS_FAILURE,
  payload: error,
})

export const getTasks = (path) => (dispatch) => {
  // FLUJO
  // 1 -> despachear tasksRequest para generar el loading para llamar a la API
  dispatch(tasksRequest())
  fetch(`${BASEURL}task${path}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token_user")}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // 2 -> si salio todo OK, despachear tasksSuccess con el resultado de la data que obtenemos
      // console.log("dataaaa", data); // tatus_code: 200, message: 'OK'

      if (data.message === "OK") dispatch(tasksSuccess(data.result))
      else throw new Error("Ups, ocurrió un problema...")
    })
    .catch((error) => {
      // u otro 2 -> si algo salio mal, despachear tasksFailure con el error
      // console.log("error - catch", error);
      // console.log("error.message - catch", error.message);
      dispatch(tasksFailure(error.message))
    })
}

export const deleteTask = (id) => (dispatch) => {
  dispatch(tasksRequest())
  fetch(`${BASEURL}task/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token_user")}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log("data", data); // data {status_code: 404, message: 'Not Found'}
      if (data.status_code === 200) dispatch(getTasks(""))
      else throw new Error("Ups, ocurrió un problema...")
    })
    .catch((error) => {
      // console.log("error - catch", error);
      // console.log("error.message - catch", error.message);
      dispatch(tasksFailure(error.message))
    })
}

export const editCardStatus = (data) => (dispatch) => {
  dispatch(tasksRequest())
  const { tile, importance, description } = data
  const statusArray = ["NEW", "IN PROGRESS", "FINISHED"]

  const newStatusIndex = statusArray.indexOf(data.status) > 1 ? 0 : statusArray.indexOf(data.status) + 1

  fetch(`${BASEURL}task/${data._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token_user")}`,
    },
    body: JSON.stringify({
      task: {
        tile,
        importance,
        status: statusArray[newStatusIndex],
        description,
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log("data", data); // data {status_code: 404, message: 'Not Found'}
      if (data.status_code === 200) dispatch(getTasks(""))
      else throw new Error("Ups, ocurrió un problema...")
    })
    .catch((error) => {
      // console.log("error - catch", error);
      // console.log("error.message - catch", error.message);
      dispatch(tasksFailure(error.message))
    })
}

export const createTask = (data) => (dispatch) => {
  dispatch(tasksRequest())
  fetch(`${BASEURL}task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token_user")}`,
    },
    body: JSON.stringify({
      task: data,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log("data", data); // data {status_code: 404, message: 'Not Found'}
      if (data.status_code === 200) {
        toast("Tu tarea se creó correctamente")
        dispatch(getTasks(""))
      } else throw new Error("error create")
    })
    .catch((error) => {
      // // console.log("error - catch", error);
      // // console.log("error.message - catch", error.message);
      dispatch(tasksFailure(error.message))
      // toast(error.message);
    })
}
