<template>
<div class="wrapper tag-item"> 
   <div class="fl left-list"> 

    <div class="job-position"> 
     <div class="job-type reco-job"> 
      <div class="head"> 
       <h4 class="title pull-left">推荐职位</h4> 
       <span class="more pull-right"><a href="#">更多职位推荐&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></span> 
       <div class="clearfix"></div> 
      </div> 
      <ul class="yui3-g job-list" style="display:block;"> 
       <li class="yui3-u-1-2 job-item" v-for="(item,index) in recommendList" :key="index"> 
         <p><span class="name">
           {{item.content2}}
           <nuxt-link :to="'/recruit/item/'+item.id">{{item.jobname}}</nuxt-link>
         </span><span class="city"><i class="fa fa-map-marker"></i> 北京</span></p> <p class="need"><span class="money">{{item.salary}}</span>/{{item.condition}}/{{item.education}}/{{item.type}}</p> <p><span class="company">百度 &middot; 6天前</span></p> 
      </li> 
       
      </ul> 
     </div> 
     <div class="job-type latest-job"> 
      <div class="head"> 
       <h4 class="title pull-left">最新职位</h4> 
       <span class="more pull-right"><a href="#">更多职位推荐&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></span> 
       <div class="clearfix"></div> 
      </div> 
      <ul class="yui3-g job-list" style="display:block;"> 
       <li class="yui3-u-1-2 job-item" v-for="(item,index) in newList" :key="index"> <p>
         <span class="name"> 
           <nuxt-link :to="'/recruit/item/'+item.id">{{item.jobname}}</nuxt-link>
           </span><span class="city"><i class="fa fa-map-marker"></i> 北京</span></p> <p class="need"><span class="money">{{item.salary}}</span>/{{item.condition}}/{{item.education}}/{{item.type}}</p> <p><span class="company">百度 &middot; 6天前</span></p> </li> 
      
      </ul> 
     </div> 
    </div> 
   </div> 
   <div class="fl right-tag"> 
    <div class="hot-company"> 
     <p class="mail">提交收录请发邮件至ccccccc@qq.com</p> 
     <div class="company"> 
      <div class="head"> 
       <h4>热门企业</h4> 
      </div> 
      <ul class="yui3-g company" style="display:block;"> 
       <li class="yui3-u-1-3 company-item" v-for="(item,index) in hostList" :key="index"> 
         <p><img :src="item.logo" alt="" /></p> 
         <p class="title">{{item.name}}</p> <p class="position">
           <a href="~/assets/recruit-company.html" target="_blank">{{item.jobcount}}个职位</a></p> </li> 
            <nuxt-link :to="'/recruit/item/'+item.id">{{item.jobname}}</nuxt-link>
      </ul> 
     </div> 
    </div> 
   </div> 
   <div class="clearfix"></div> 
  </div> 
</template>
<script>
import '~/assets/css/page-sj-recruit-index.css'
import recruitApi from '@/api/recruit'
import enterpriseApi from '@/api/enterprise'
import axios from 'axios'
export default {  
  data(){
    return {
      item:{}
    }
  },  
  asyncData(){
    return axios.all([recruitApi.recommend(), recruitApi.newlist(),enterpriseApi.hotlist() ]).then(
      axios.spread( function( recommendList,newList ,hostList ){
        return {
          recommendList: recommendList.data.data,
          newList: newList.data.data,
          hostList: hostList.data.data
        }
      })
    )
  }
}
</script>