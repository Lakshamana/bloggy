import axios from 'axios'

const {
  REACT_APP_API_HOST,
  REACT_APP_API_PORT,
  REACT_APP_PROTOCOL
} = process.env

const instance = axios.create({
  baseURL: `${REACT_APP_PROTOCOL}://${REACT_APP_API_HOST}:${REACT_APP_API_PORT}`
})

export default instance
