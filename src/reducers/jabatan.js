let defaultState = {
    jabatan: [

    {
        namaDivisi : "Marketing",
        namaJabatan : "Head of Marketing",
        deskripsi : "-"
    },
    {
        namaDivisi : "Produksi",
        namaJabatan : "Head of Produksi",
        deskripsi : "-"
    }
    ]
}

const jabatanReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SAVE_JABATAN":
            let newData = {
                namaDivisi: action.payload.namaDivisi,
                namaJabatan: action.payload.namaJabatan,
                deskripsi: action.payload.deskripsi
            }
            
            let data = {}

            if (state.jabatan.length === 0) {
                data = state.jabatan.concat(newData)
                data = state.jabatan.concat(newData)
            } else {
                data = state.jabatan.concat(newData)
            }

            console.log(data)
            return {
                jabatan: data
            }
            
            case "HAPUS_JABATAN":
                console.log("index : ", action.payload.indexHapus)
                let dataJabatanBaru = state.jabatan
                dataJabatanBaru.splice(action.payload.indexHapus, 1);
                return {
                    jabatan : dataJabatanBaru
                }

                case "EDIT_JABATAN":

                    let newJabatan = state.jabatan
                    newJabatan[action.payload.index].namaDivisi = action.payload.namaDivisi;
                    newJabatan[action.payload.index].namaJabatan = action.payload.namaJabatan;
                    newJabatan[action.payload.index].deskripsi = action.payload.deskripsi;

                    return {
                        jabatan : newJabatan
                    }
    

            case "CLEAR_DATA":
                return defaultState
            default:
                return state
    }
}

export default jabatanReducer