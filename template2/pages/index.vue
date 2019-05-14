<template>
  <div class="wrapper">
    <div class="sj-content">
      <div class="left-nav">
        <div class="float-nav" id="float-nav">
          <ul class="sui-nav nav-tabs nav-xlarge tab-navbar tab-vertical">
            <!-- <router-link tag="li" to="/channel/1" active-class="active" exact><a>热门</a></router-link>
            <router-link tag="li" to="/channel/2" active-class="active"><a>牛人专区</a></router-link>
            <router-link tag="li" to="/channel/3" active-class="active"><a>机器学习</a></router-link>
            <router-link tag="li" to="/channel/4" active-class="active"><a>后端开发</a></router-link>
            <router-link tag="li" to="/channel/5" active-class="active"><a>人工智能</a></router-link>
            <router-link tag="li" to="/channel/6" active-class="active"><a>虚拟现实</a></router-link>
            <router-link tag="li" to="/channel/7" active-class="active"><a>商业预测</a></router-link>
            <router-link tag="li" to="/channel/8" active-class="active"><a>前端开发</a></router-link>
            <router-link tag="li" :to="{path:'/channel',query:{id:9}}" active-class="active"><a>test</a></router-link> -->
            <router-link tag="li" to="/channel/0" active-class="active" exact><a>热门</a></router-link>
            <li v-for="(channel,index) in channels" :key="index" >
              <router-link :to="'/channel/'+channel.id" >{{channel.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-content">
        <div class="fl middle">
          <div class="carousel">
            <div
              id="myCarousel"
              data-ride="carousel"
              data-interval="4000"
              class="sui-carousel slide"
            >
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="active item">
                  <img src="~/assets/img/widget-banner01.png">
                </div>
                <div class="item">
                  <img src="~/assets/img/widget-banner02.png">
                </div>
                <div class="item">
                  <img src="~/assets/img/widget-banner01.png">
                </div>
              </div>
            </div>
          </div>

          <!-- 文章开始 -->

          <div class="data-list">
            <ul class="headline fixed" id="headline">
              <!-- 循环 -->
              <li class="headline-item" v-for="(item,index) in items" :key="index" >
                <div class="fl indexImg">
                  <img src>
                </div>
                <div class="words">
                  <h3>
                    <router-link :to="'/article/'+item.id">{{item.title}}</router-link>
                    <span>
                      <img src class="vip">
                    </span>
                  </h3>
                  <h5 class="author">
                    <div class="fl">
                      <span class="authorName">
                        <img src="~/assets/img/widget-photo.png" alt>{{item.userid}}
                      </span>
                      <span>{{item.createtime}}</span>
                    </div>
                    <!-- <div class="fr attention">
                      <span class="attentionText">关注</span>
                      <span class="beforeclose">
                        <i class="fa fa-times delete" aria-hidden="true"></i>
                        <i class="nolike">不感兴趣</i>
                      </span>
                    </div> -->
                    <div class="clearfix"></div>
                  </h5>
                </div>
                <p class="content">{{item.content}}</p>
              </li>
             
            </ul>
            
            <ul id="loaded" class="headline"></ul>
          </div>
          <!-- <script src="~/assets/data-list.js" type="text/javascript"></script> -->
        </div>
        <div class="fl right">
          <div class="activity">
            <div class="acti">
              <img src="~/assets/img/widget-activity01.png" alt="活动一">
            </div>
            <div class="acti">
              <img src="~/assets/img/widget-activity02.png" alt="活动一">
            </div>
          </div>
          <div class="block-btn">
            <p>今天，有什么好东西要和大家分享么?</p>
            <!-- <a class="sui-btn btn-block btn-share" href="/article/submit" target="_blank" >发布分享</a> -->
            <button class="sui-btn btn-block btn-share" @click="toShare()">发布分享</button>
          </div>
          
          <!-- <link rel="import" href=".~/assets/.~/assets/modules/ui-modules/footer/footer.html?__inline"> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "~/assets/css/page-headline-logined.css"
import "~/assets/css/page-sj-headline-login.css"
import "~/assets/css/widget-head-foot.css"
import {getUser} from '@/utils/auth'
import axios from 'axios'
import articleApi from '@/api/article'
export default {
  asyncData(){

    return axios.all([articleApi.getTop(),articleApi.findAllChannel()]).then(axios.spread(function(items,channels){
      return {
        items : items.data.data,
        channels : channels.data.data
      }
    }))
    
  },
  data(){
    return {
      // this1:this
    }
  },
  methods:{
    toShare(){
      if(getUser().name===undefined){
        this.$message({
            message: "请先登录",
            type: "error",
            showClose: true
        })
        var this1 = this
        setTimeout(function(){
          this1.$router.push('/login')
        },1000)
      }
      this.$router.push('/article/submit')
    }
    
  }
}
</script>

