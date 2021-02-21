let defaultState = {
    divisi: [

    {
        namaDivisi : "Marketing",
        deskripsi : "Pekerjaan berhubungan dengan masyarakat"
    },
    {
        namaDivisi : "Produksi",
        deskripsi : "Pekerjaan bagian pembuatan makanan"
    }
    ]
}

const divisiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SAVE_DIVISI":
            let newData = {
                namaDivisi: action.payload.namaDivisi,
                deskripsi: action.payload.deskripsi
            }
            
            let data = {}

            if (state.divisi.length === 0) {
                data = state.divisi.concat(newData)
                data = state.divisi.concat(newData)
            } else {
                data = state.divisi.concat(newData)
            }

            console.log(data)
            return {
                divisi: data
            }
            
            case "HAPUS_DIVISI":
                console.log("index : ", action.payload.indexHapus)
                let dataDivisiBaru = state.divisi
                dataDivisiBaru.splice(action.payload.indexHapus, 1);
                return {
                    divisi : dataDivisiBaru
                }

                case "EDIT_DIVISI":

                    let newDivisi = state.divisi
                    newDivisi[action.payload.index].namaDivisi = action.payload.namaDivisi;
                    newDivisi[action.payload.index].deskripsi = action.payload.deskripsi;

                    return {
                        divisi : newDivisi
                    }
    

            case "CLEAR_DATA":
                return defaultState
            default:
                return state
    }
}

export default divisiReducer