let defaultState = {
    karyawan: [

    {
        id : "K-0001",
        namaKaryawan : "Kristianto",
        jk : "L",
        namaDivisi : "Marketing",
        namaJabatan : "Head of Marketing",
        tglMasuk : "2020-01-01",
        tglSelesai : "2021-01-01"
    },
    {
        id : "K-0002",
        namaKaryawan : "Dewi",
        jk : "P",
        namaDivisi : "Marketing",
        namaJabatan : "Head of Marketing",
        tglMasuk : "2018-01-01",
        tglSelesai : "2021-01-01"
    }
    ]
}

const karyawanReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SAVE_KARYAWAN":
            let newData = {
                id: action.payload.id,
                namaKaryawan: action.payload.namaKaryawan,
                jk: action.payload.jk,
                namaDivisi: action.payload.namaDivisi,
                namaJabatan: action.payload.namaJabatan,
                tglMasuk: action.payload.tglMasuk,
                tglSelesai: action.payload.tglSelesai
            }
            
            let data = {}

            if (state.karyawan.length === 0) {
                data = state.karyawan.concat(newData)
                data = state.karyawan.concat(newData)
            } else {
                data = state.karyawan.concat(newData)
            }

            console.log(data)
            return {
                karyawan: data
            }
            
            case "HAPUS_KARYAWAN":
                console.log("index : ", action.payload.indexHapus)
                let dataKaryawanBaru = state.karyawan
                dataKaryawanBaru.splice(action.payload.indexHapus, 1);
                return {
                    karyawan : dataKaryawanBaru
                }

                case "HAPUS_ALL_KARYAWAN":
                    return {
                        karyawan : []
                    }

                case "EDIT_KARYAWAN":

                    let newKaryawan = state.karyawan
                    newKaryawan[action.payload.index].id = action.payload.id;
                    newKaryawan[action.payload.index].namaKaryawan = action.payload.namaKaryawan;
                    newKaryawan[action.payload.index].jk = action.payload.jk;
                    newKaryawan[action.payload.index].namaDivisi = action.payload.namaDivisi;
                    newKaryawan[action.payload.index].namaJabatan = action.payload.namaJabatan;
                    newKaryawan[action.payload.index].tglMasuk = action.payload.tglMasuk;
                    newKaryawan[action.payload.index].tglSelesai = action.payload.tglSelesai;

                    return {
                        karyawan : newKaryawan
                    }
    

            case "CLEAR_DATA":
                return defaultState
            default:
                return state
    }
}

export default karyawanReducer