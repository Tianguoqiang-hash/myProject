import axios from "axios"
// 引入进度条
import nProgress from "nprogress"
// 引入进度条样式
import 'nprogress/nprogress.css'

const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})
request.interceptors.request.use((config)=>{
    //通过localstorage添加uuid到请求头,带到服务器
    config.headers.userTempId = localStorage.getItem('uuid')
    config.headers.token = localStorage.getItem('token')
    // 开启进度条
    nProgress.start()
    return config
},(err)=>{
   return Promise.reject(err)
})
request.interceptors.response.use((response)=>{
    // 结束进度条
    nProgress.done()
    return response.data
},(err)=>{
    return Promise.reject(err)
})
export default request
