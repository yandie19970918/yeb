import axios from "axios";
import { Message } from "element-ui";
import router from '@/router'

axios.interceptors.response.use(resolve => {
    if (resolve.status && resolve.status == 200) {
        if (resolve.data.code == 500 || resolve.data.code == 401 || resolve.data.code == 403) {
            Message.error({ message: resolve.data.message })
            return
        }
        if (resolve.data.message) {
            Message.success({ message: resolve.data.message })
        }
    }
    return resolve.data
}, reject => {
    if (reject.response.code == 504 || reject.response.code == 404) {
        Message.error({ message: '服务器被吃掉了o(╯□╰)o' })
    } else if (reject.response.code == 403) {
        Message.error({ message: '权限不足，请联系管理员！' })
    } else if (reject.response.code == 401) {
        Message.error({ message: '尚未登录，请登录' })
        router.replace('/')
    } else {
        if (reject.response.data.message) {
            Message.error({ message: reject.response.data.message })
        } else {
            Message.error({ message: '未知错误' })
        }
    }
    return
})


let base = ''

//发送json格式的post请求
export const postRequest = (url,params) => {
    return axios({
        method:'post',
        url:`${base}${url}`,
        data:params
    })
}


