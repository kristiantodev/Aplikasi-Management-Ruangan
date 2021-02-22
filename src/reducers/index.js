import {combineReducers } from "redux"
import AuthReducer from "./auth"
import UserReducer from "./login"
import LantaiReducer from "./lantai"
import RuanganReducer from "./ruangan"
import DivisiReducer from "./divisi"
import JabatanReducer from "./jabatan"
import KaryawanReducer from "./karyawan"
import HakAksesReducer from "./hakakses"

let reducer = combineReducers({
    AReducer: AuthReducer,
    UReducer: UserReducer,
    LReducer: LantaiReducer,
    RReducer: RuanganReducer,
    DReducer: DivisiReducer,
    JReducer: JabatanReducer,
    KReducer : KaryawanReducer,
    HAReducer : HakAksesReducer
})

export default reducer