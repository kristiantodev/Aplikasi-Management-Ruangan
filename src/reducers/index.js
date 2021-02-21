import { createStore, combineReducers } from "redux"
import AuthReducer from "./auth"
import UserReducer from "./login"
import LantaiReducer from "./lantai"
import RuanganReducer from "./ruangan"
import DivisiReducer from "./divisi"
import JabatanReducer from "./jabatan"
import KaryawanReducer from "./karyawan"

let store = createStore(combineReducers({
    AReducer: AuthReducer,
    UReducer: UserReducer,
    LReducer: LantaiReducer,
    RReducer: RuanganReducer,
    DReducer: DivisiReducer,
    JReducer: JabatanReducer,
    KReducer : KaryawanReducer
}))

export default store