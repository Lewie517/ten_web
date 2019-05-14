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
    save(content,title){
      return request({
        url: `/${group_name}/${api_name}`,
        method: 'post',
        data: {
          content,
          title
        }
      })
    },
    findAnswerById(problemid){
      return request({
        url:'/answer',
        method:'get',
        data: {
          problemid
        }
      })
    },
    saveAnswer(problemid,content){
      return request({
        url:'/answer',
        method: 'post',
        data: {
          problemid,
          content
        }
      })
    }

}