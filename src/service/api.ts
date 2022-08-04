import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com'
})

api.interceptors.request.use(async (config) => {
  const token = import.meta.env.VITE_TOKEN_ACESS

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  return config
})

export default api
