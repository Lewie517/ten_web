import request from '@/utils/request'
import {getUser} from '@/utils/auth'
export default {

    getMessage(){
        return request({
            url:'/friend/message',
            method:'get'
        })
    },
    saveAppointment(content,topic){
        return request({
            url:'/friend/appointment',
            method:'post',
            data: {
                userid:getUser().userid,
                nickname:getUser().name,
                content,
                topic
            }
        })
    },
    getAppointment(userid){
        return request({
            url:`/friend/appointment/${userid}`,
            method:'get'
        })
    },
    addFriend(friendid,type,userid){
        return request({
            url:`/friend/friend/like/${userid}/${friendid}/${type}`,
            method:'put',
        })
    }

}