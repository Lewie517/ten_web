import request from '@/utils/request'
const group_name = 'article'
const api_name = 'article'

export default {

    getTop(){
        return request({
            url: `/${group_name}/${api_name}/search/1/10`,
            method: 'post',
            data:{
                state:"1"
            }
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
            url: `/${group_name}/comment/${api_name}/${articleid}`,
            method: 'get'
        })
    },
    submitComment(articleid,content,userid,name){
        return request({
            url: '/article/comment',
            method: 'post',
            data: {
                articleid,
                content,
                userid,
                nickname:name
            }
        })
    },
    submitArticle(title,content,channelid,userid,nickname){
        return request({
            url: `/article/article`,
            method: 'post',
            data: {
                title,content,channelid,userid,nickname
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
            url: `/article/article/search/${page}/${size}`,
            method: 'post',
            data: {
                "channelid":channelid
            }
        })
    },
    //根据条件查询文章列表  /article/article/search/{page}/{size}
    findArticleByCondition(page, size, searchMap){
        return request({
            url: `/${group_name}/${api_name}/search/${page}/${size}`,
            method: 'post',
            data: searchMap
        })
    },
    collect(articleid,userid){
        return request({
            url: `/${group_name}/collect/${articleid}/${userid}`,
            method: 'post'
        })
    },
    getCollectArticle(userid){
        return request({
            url: `/${group_name}/collect/${userid}`,
            method: 'get'
        })
    },
    nocollect(articleid,userid){
        return request({
            url: `/${group_name}/collect/${articleid}/${userid}`,
            method: 'delete'
        })
    }


}
