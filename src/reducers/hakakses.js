let defaultState = {
    hakakses: [

    {
        id : "K-0001",
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
            
            return defaultState
            
            case "CLEAR_DATA":
                return defaultState
            default:
                return state
    }
}

export default hakAksesReducer