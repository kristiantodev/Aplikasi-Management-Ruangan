let defaultState = {
    users: [{
        username : "admin",
        password : "admin",
        phone : "08990657546",
        email : "kristiantorpl@gmail.com",
        role : "Admin"
    },
    {
        username : "pimpinan",
        password : "pimpinan",
        phone : "08990657546",
        email : "kristiantorpl@gmail.com",
        role : "Pimpinan"
    }]
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
            case "CLEAR_DATA":
                return defaultState
            default:
                return state
    }
}

export default userReducer