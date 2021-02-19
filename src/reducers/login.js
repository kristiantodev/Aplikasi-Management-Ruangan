let defaultState = {
    users: [{
        username : "admin",
        password : "admin",
        nama : "Andika Sanjaya",
        phone : "081000111222",
        email : "admin@nexsoft.co.id",
        role : "Admin"
    },
    {
        username : "pimpinan",
        password : "pimpinan",
        nama : "Kristianto",
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