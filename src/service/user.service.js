import axios from 'axios'

class UserService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getUser() {
        return this.api.get('/getUsers')
    }

    getOneUser(user_id) {
        return this.api.get(`/getOneUser/${user_id}`)
    }

    editUser(user_id) {
        return this.api.get(`/edit/${user_id}`)
    }

    deleteUser(user_id) {
        return this.api.post(`/delete/${user_id}`)
    }
}

const userService = new UserService()

export default userService