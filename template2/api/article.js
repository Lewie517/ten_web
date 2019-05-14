import request from '@/utils/request'
const group_name = 'article'
const api_name = 'article'

export default {

    getTop(){
        return request({
            url: `/${group_name}/${api_name}/top`,
            method: 'get'
        })
    },
    //  /article/article/{articleId}
    getById(id){
        return request({
            url: `/${group_name}/${api_name}/${id}`,
            method: 'get'
        })
    },
    getComment(articleid){
        return request({
            url: `/comment/${api_name}/${articleid}`,
            method: 'get'
        })
    },
    submitComment(articleid,content){
        return request({
            url: '/comment',
            method: 'post',
            data: {
                articleid,
                content
            }
        })
    },
    sunmitArticle(title,content,channelid){
        return request({
            url: '/article/article',
            method: 'post',
            data: {
                title,
                content,
                channelid
            }
        })
    },
    //查询所有频道
    findAllChannel(){
        return request({
            url: '/article/channel',
            method: 'get',
        })
    },
    // 根据频道ID查文章  /article/channel/{channelId}/{page}/{size}
    findArticleByChannel(channelid,page,size){
        return request({
            url: `/article/article/${channelid}/${page}/${size}`,
            method: 'get',
        })
    }


}
