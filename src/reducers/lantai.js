let defaultState = {
    lantai: [

    {
        nama : "Basement",
        deskripsi : "Lantai Bawah"
    },
    {
        nama : "Grand Floor",
        deskripsi : "Tempat Keluar Masuk"
    }
    ]
}

const lantaiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SAVE_LANTAI":
            let newData = {
                nama: action.payload.nama,
                deskripsi: action.payload.deskripsi
            }
            
            let data = {}

            if (state.lantai.length === 0) {
                data = state.lantai.concat(newData)
                data = state.lantai.concat(newData)
            } else {
                data = state.lantai.concat(newData)
            }

            console.log(data)
            return {
                lantai: data
            }
            
            case "HAPUS_LANTAI":
                console.log("index : ", action.payload.indexHapus)
                let dataLantaiBaru = state.lantai
                dataLantaiBaru.splice(action.payload.indexHapus, 1);
                return {
                    lantai : dataLantaiBaru
                }

                case "EDIT_LANTAI":
                    
                    console.log("index : ", action.payload.index)
                    console.log("index : ", action.payload.nama)
                    console.log("index : ", action.payload.deskripsi)

                    let newLantai = state.lantai
                    newLantai[action.payload.index].nama = action.payload.nama;
                    newLantai[action.payload.index].deskripsi = action.payload.deskripsi;

                    return {
                        lantai : newLantai
                    }
    

            case "CLEAR_DATA":
                return defaultState
            default:
                return state
    }
}

export default lantaiReducer