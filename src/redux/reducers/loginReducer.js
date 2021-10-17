const intialState = {
    userLoggedIn :false,
    user:"guest"
}

const loginReducer = (state = intialState, { type,payLoad }) => {
    switch (type) {
        case 'USER_LOGIN':
            //console.log("hello")
            return {...state,userLoggedIn:true,user:""+payLoad};
        case 'USER_LOGOUT':
            //console.log("Logout");
            return {...state,userLoggedIn:false,user:"guest"};
        default:
            return state;
    }
}

export default loginReducer;