import axios from 'axios'
const config = require('../../envConfig')
const { API_HOST, API_PORT, PROTOCOL } = config

const instance = axios.create({
  baseURL: `${PROTOCOL}://${API_HOST}:${API_PORT}`
})

export default instance
