const INITIAL_STATE = {
    id: null,
    email: "",
    password: "",
    errLogin: false
}

const userRed = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                password: action.payload.password
            }
        case 'EMAIL_EXIST':
            return {
                ...state,
                errLogin: true
            }
        case 'REG':
            return {
                ...state,

            }
        default:
            return state
    }
}

export default userRed