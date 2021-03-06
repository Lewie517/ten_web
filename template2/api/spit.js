import request from '@/utils/request'
const group_name = 'spit'
const api_name = 'spit'
import { getUser } from "@/utils/auth"
export default {
    search(page, size, searchMap) {
        return request({
          url: `/${group_name}/${api_name}/search/${page}/${size}`,
          method: 'post',
          data: searchMap
        })
    },
    findById(id) {
        return request({
          url: `/${group_name}/${api_name}/${id}`,
          method: 'get'
        })
    },
    commentlist(id) {
        return request({
          url: `/${group_name}/${api_name}/comment/${id}/1/10`,
          method: 'get'
        })
    },
    thumbup(id){
        return request({
            url: `/${group_name}/${api_name}/thumbup/${id}/${getUser().userid}`,
            method: 'put'
        })
    },
    save(pojo) {
        return request({
          url: `/${group_name}/${api_name}`,
          method: 'post',
          data: pojo
        })
    },
    collect(spitid,userid){
        return request({
            url: `/${group_name}/collect/${spitid}/${userid}`,
            method: 'post'
        })
    },
    getCollectArticle(userid){
        return request({
            url: `/${group_name}/collect/${userid}`,
            method: 'get'
        })
    },
    nocollect(spitid,userid){
        return request({
            url: `/${group_name}/collect/${spitid}/${userid}`,
            method: 'delete'
        })
    }
}
