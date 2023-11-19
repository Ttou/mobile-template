import axios from 'axios'

const ajax = axios.create({
  baseURL: import.meta.env.VITE_APP_API
})

ajax.interceptors.request.use(config => {
  return config
})

ajax.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    console.log(err)
  }
)

export { ajax }
