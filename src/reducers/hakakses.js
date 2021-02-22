let defaultState = {
    hakakses: [

    {
        id : "K-0001",
        namaKaryawan: "Kristianto",
        namaDivisi: "Marketing",
        namaJabatan: "Head of Marketing",
        tglBerlaku : "2020-10-10",
        tglBerakhir: "2021-10-10",
        hak_akses : [
            {
                namaLantai : "Grand Floor",
                namaRuangan : [
                    {
                        ruangan : "Merpati"
                    },
                    {
                        ruangan : "Masak"
                    }
                ]
            },
            {
                namaLantai : "Basement",
                namaRuangan : [
                    {
                        ruangan : "Rajawali"
                    }
                ]
            }
        ],
        status : "Aktif"
    },

    {
        id : "K-0002",
        namaKaryawan: "Dewi",
        namaDivisi: "Marketing",
        namaJabatan: "Head of Marketing",
        tglBerlaku : "2020-10-10",
        tglBerakhir: "2021-01-10",
        hak_akses : [
               {
                namaLantai : "Basement",
                namaRuangan : [
                    {
                        ruangan : "Rajawali"
                    }
                ]
            }
        ],
        status : "Tidak Aktif"
    }

    ]

    
}

const hakAksesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SAVE_HAK_AKSES":

            var today = new Date();
            var tglAkhir = new Date(action.payload.tglBerakhir);
            var statusHak;

            if (tglAkhir > today) {
                statusHak="Aktif"
            }else{
                statusHak="Tidak Aktif"
            }

            let newData = {
                id: action.payload.id,
                namaKaryawan: action.payload.namaKaryawan,
                namaDivisi: action.payload.namaDivisi,
                namaJabatan : action.payload.namaKaryawan,
                tglBerlaku : action.payload.tglBerlaku,
                tglBerakhir : action.payload.tglBerakhir,
                hak_akses : action.payload.hak_akses,
                status : statusHak
            }
            
            let data = {}

            if (state.hakakses.length === 0) {
                data = state.hakakses.concat(newData)
                data = state.hakakses.concat(newData)
            } else {
                data = state.hakakses.concat(newData)
            }

            console.log(data)
            return {
                hakakses: data
            }
           
            case "HAPUS_HAK_AKSES":

                console.log("index : ", action.payload.indexHapus)
                let dataAksesBaru = state.hakakses
                dataAksesBaru.splice(action.payload.indexHapus, 1);

                return {
                    hakakses : dataAksesBaru
                }

            case "CLEAR_DATA":
                return defaultState
            default:
                return state
    }
}

export default hakAksesReducer