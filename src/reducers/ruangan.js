let defaultState = {
    ruangan: [

    {
        namaLantai : "Basement",
        namaRuangan : "R.Rajawali",
        kondisiRuangan : "Baik",
        deskripsi : "Terpakai"
    },
    {
        namaLantai : "GF",
        namaRuangan : "R.Masak",
        kondisiRuangan : "Baik",
        deskripsi : "Kosong"
    }
    ]
}

const ruanganReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SAVE_RUANGAN":
            let newData = {
                namaLantai: action.payload.namaLantai,
                namaRuangan: action.payload.namaRuangan,
                kondisiRuangan: action.payload.kondisiRuangan,
                deskripsi: action.payload.deskripsi
            }
            
            let data = {}

            if (state.ruangan.length === 0) {
                data = state.ruangan.concat(newData)
                data = state.ruangan.concat(newData)
            } else {
                data = state.ruangan.concat(newData)
            }

            console.log(data)
            return {
                ruangan: data
            }
            
            case "HAPUS_RUANGAN":
                console.log("index : ", action.payload.indexHapus)
                let dataRuanganBaru = state.ruangan
                dataRuanganBaru.splice(action.payload.indexHapus, 1);
                return {
                    ruangan : dataRuanganBaru
                }

                case "EDIT_RUANGAN":

                    let newRuangan = state.ruangan
                    newRuangan[action.payload.index].namaLantai = action.payload.namaLantai;
                    newRuangan[action.payload.index].namaRuangan = action.payload.namaRuangan;
                    newRuangan[action.payload.index].kondisiRuangan = action.payload.kondisiRuangan;
                    newRuangan[action.payload.index].deskripsi = action.payload.deskripsi;

                    return {
                        ruangan : newRuangan
                    }
    

            case "CLEAR_DATA":
                return defaultState
            default:
                return state
    }
}

export default ruanganReducer