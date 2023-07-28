import {instance as axios} from './axios'

export const loginRequets = async (user) => {
    return axios.post("/login", user)
}
