import { combineReducers } from "redux"
import { userReducer } from "./userReducer"
import {tasksReducer} from "./tasksReducer"

const rootReducer = combineReducers({
  userReducer,
  tasksReducer,
})

export default rootReducer
