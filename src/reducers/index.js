import { createStore, combineReducers } from "redux"
import AuthReducer from "./auth"
import UserReducer from "./login"
import LantaiReducer from "./lantai"
import RuanganReducer from "./ruangan"

let store = createStore(combineReducers({
    AReducer: AuthReducer,
    UReducer: UserReducer,
    LReducer: LantaiReducer,
    RReducer: RuanganReducer
}))

export default store