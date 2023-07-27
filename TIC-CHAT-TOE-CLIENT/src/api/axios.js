import { APIURL } from '../config'
import axios from 'axios'

export const instance = axios.create({
    baseURL: APIURL
})