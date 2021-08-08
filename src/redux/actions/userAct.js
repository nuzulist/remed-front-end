import Axios from 'axios'

export const login = (email, password, data) => {
    return (dispatch) => {
        Axios.get(`http://localhost:2000/users?email=${email}`)
            .then(res => {
                if (res.data.length !== 0) {
                    return dispatch({
                        type: 'EMAIL_EXIST'
                    })
                } else if (res.data.email !== email) {
                    Axios.post(`http://localhost:2000/users`, data)
                        .then(res => {
                            return dispatch({
                                type: 'REG'
                            })
                        })

                }
                Axios.get(`http://localhost:2000/users?email=${email}&password=${password}`)
                    .then(res => {
                        return dispatch({
                            type: 'LOGIN',
                            payload: res.data
                        })
                    })
            })
    }
}