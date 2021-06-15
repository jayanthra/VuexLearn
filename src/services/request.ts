import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
})

request.defaults.params = {}
request.interceptors.request.use(
  config => {
    config.params['api_key'] = process.env.VUE_APP_API_KEY
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response
request.interceptors.response.use(
  response => {
    // if (response.status === 200 || response.status === 201) {
    //   return response.data
    // } else {
    //   return Promise.reject('error')
    // }
    return response.data
  },
  error => {
    console.log( 'request' ,request)
    return Promise.reject(error)
  }
)

export default request
