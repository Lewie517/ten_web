<template>
  <div class="wrapper activities"> 
   <h1>{{item.name}}</h1> 
   <div class="img-text"> 
    <div class="left-img"> 
     <img src="~/assets/img/active3.jpg" alt="" /> 
    </div> 
    <div class="right-txt"> 
     <p>开始时间： {{time(item.starttime)}}</p> 
     <p>结束时间： {{time(item.endtime)}}</p> 
     <p>举办地点： {{item.address}}</p> 
     <p>主办方：{{item.sponsor}}</p> 
     <p>报名截止：{{item.enrolltime}} 
     <div class="join"> 
      <button class="sui-btn btn-danger">立即报名</button> 
      <span class="will">报名即将开始</span> 
     </div> 
    </div> 
   </div> 
   <div class="simple-text"> 
    <div class="left-content"> 
     <div class="content-item"> 
      <div class="tit">
       <span>大会介绍</span>
      </div> 
      <div class="text"> 
       <h4></h4> 
       <p>{{item.summary}}</p> 
      </div> 
     </div> 
     <div class="content-item"> 
      <div class="tit">
       <span>议题简介</span>
      </div> 
      <div class="text"> 
       <h4></h4> 
       <p>{{item.detail}}</p> 
      </div> 
     </div> 
    </div> 
    <div class="right-intro"> 
     <div class="content-item"> 
      <div class="tit">
       <span>活动组织者</span>
      </div> 
      <div class="text"> 
       <p>主办方： {{item.sponsor}}</p> 
      </div> 
     </div> 
     <div class="content-item"> 
      <div class="tit">
       <span>相关链接</span>
      </div> 
      <div class="text"> 
       <p>活动官网： infoQ.com</p> 
      </div> 
     </div> 
     <div class="content-item"> 
      <div class="tit">
       <span>分享扩散</span>
      </div> 
      <div class="social-share" data-sites="weibo,wechat" :data-title="item.name" data-url="http://www.itheima.com"> 
      
      </div> 
     </div> 
    </div> 
   </div> 
  </div> 
</template>
<script>
import "~/assets/css/page-sj-activity-detail.css"
import gatheringApi from '@/api/gathering'
export default {
    asyncData( {params} ){
        return gatheringApi.findById(params.id).then(res=>{
            return {item: res.data.data}
        })
    },
    head: {
        script:[
            {src: 'https://cdn.bootcss.com/social-share.js/1.0.16/js/social-share.min.js'}
        ],
        link: [
            {rel:'stylesheet' ,href: 'https://cdn.bootcss.com/social-share.js/1.0.16/css/share.min.css' }
        ]
    },
    methods:{
      time(date) {
        var dateee = new Date(date).toJSON();
        return new Date(+new Date(dateee) + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "");
      }
    }
}
</script>
