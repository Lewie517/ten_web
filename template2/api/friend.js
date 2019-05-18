import request from '@/utils/request'
export default {

    getMessage(){
        return request({
            url:'/friend/message',
            method:'get'
        })
    }

}