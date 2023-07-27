import {instance as axios} from './axios'

export const loginRequets = async (user) => {
    axios.post("/auth/login", user)
}
