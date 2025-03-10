import axios from 'axios'
import { useUserStore } from '@/store/index.js'
import router from '@/router'

// 默认请求域名基地址
const baseURL = 'https://l6hrluwfl4.gzg.sealos.run'

const instance = axios.create({
  baseURL,
  timeout: 100000
})

instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res
    }
    return Promise.reject(res.data)
  },
  (err) => {
    console.log(err)
    if (err.response?.status === 401) {
      router.push('/login')
    }
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
