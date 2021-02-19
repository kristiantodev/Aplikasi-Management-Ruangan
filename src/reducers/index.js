import { createStore, combineReducers } from "redux"
import AuthReducer from "./auth"
import UserReducer from "./login"

let store = createStore(combineReducers({
    AReducer: AuthReducer,
    UReducer: UserReducer
}))

export default store