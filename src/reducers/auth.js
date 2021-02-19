let defaultState = {
  isLogin: false,
  userLogin: {
    username : "",
    phone : "",
    email : "",
    role : ""
}
}
const authReducer = (state = defaultState, action) => {
  console.warn("state:", state);
  console.warn("action:", action);
  switch (action.type) {
      case "LOGIN_SUCCESS":
          return {
              isLogin: true,
              userLogin: {
                username: action.payload.userData.username,
                phone: action.payload.userData.phone,
                email: action.payload.userData.email,
                role: action.payload.userData.role
            }
          }

      case "LOGOUT_SUCCESS":
          return defaultState
     
      default:
          return state
  }

}

export default authReducer