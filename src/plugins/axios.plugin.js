import axios from 'axios'

const { API_HOST, API_PORT, PROTOCOL } = process.env
console.log('vars:', API_HOST, API_PORT, PROTOCOL)

const instance = axios.create({
  baseURL: `${PROTOCOL}://${API_HOST}:${API_PORT}`
})

export default instance
