import request from '@/utils/request'
const group_name = 'qa'
const api_name = 'problem'
export default {
    list(type,label,page,size){
      return request({
          url:`/${group_name}/${api_name}/${type}/${label}/${page}/${size}`,
          method: 'get'
      })
    },
    searchById(id) {
      return request({
        url: `/${group_name}/${api_name}/${id}`,
        method: 'get'
      })
    },
    save(content,title,labelid,userid,name){
      return request({
        url: `/${group_name}/${api_name}/${labelid}`,
        method: 'post',
        data: {
          content,
          title,
          userid,
          nickname:name
        }
      })
    },
    findAnswerById(problemid){
      return request({
        url:'/qa/answer',
        method:'get',
        data: {
          problemid
        }
      })
    },
    saveAnswer(problemid,content,userid,name){
      return request({
        url:'/qa/answer',
        method: 'post',
        data: {
          problemid,
          content,
          userid,
          nickname:name
        }
      })
    }

}