import request from '@/utils/request'
import { getUser } from "@/utils/auth"
const group_name = 'user'
const api_name = 'user'

export default {
    sendsms(mobile){
        return request({
            url:`/${group_name}/${api_name}/sendsms/${mobile}`,
            method: 'put'
        })
    },
    register(nickname,mobile,password,code){
        return request({
            url:`/${group_name}/${api_name}/register/${code}`,
            method: 'post',
            data: {
                nickname,
                mobile,
                password
            }
        })
    },
    login(mobile,password){
        return request({
            url:`/${group_name}/${api_name}/login`,
            method: 'post',
            data: {
                mobile,
                password
            }
        })
    },
    info(id){
       return request({
           url: `/${group_name}/${api_name}/info/${id}`,
           method: 'get'
       }) 
    },
    saveinfo(user){
        return request({
            url: `/${group_name}/${api_name}/saveinfo`,
            method: 'put',
            data: user
        })
    }
}