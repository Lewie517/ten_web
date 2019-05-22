<template>
  <div>
    <div class="banner">
      <div class="wrapper">
        <img src="~/assets/img/page-banner.png" alt>
      </div>
    </div>
    <!--两列布局-->
    <div class="wrapper tag-item">
      <div class="fl left-list">
        <p class="full-info">
          为了获取更好的体验 请
          <a href="makeFriends-edit.html" target="_blank">完善兴趣信息</a>
          <span class="sui-icon icon-tb-close close"></span>
        </p>
        <div class="friend-dating-list">
          <ul class="friends">

            <!-- 开始循环学会列表 -->
            <li class="friend-item" v-for="(appointment,index) in appointlist" :key="index">
              <div class="fl photo">
                <span class="cafe-more"></span>
                <div class="img">
                  <img src="~/assets/img/widget-dating1.png" alt>
                </div>
                <div class="tag">
                  <span class="tag-cafe cafe">
                    <i class="fa fa-coffee" aria-hidden="true"></i> {{appointment.topic}}
                  </span>
                </div>
              </div>
              <div class="fl content">
                <p class="title">
                  <span class="name">{{appointment.nickname}}</span> 邀你一起
                  <span class="cafe">{{appointment.topic}}</span>
                  <!-- <b class="bold">匹配度 96%</b> -->
                </p>
                <p class="aa">
                  <span class="money">{{appointment.age}} | {{appointment.study}} | {{appointment.job}}</span>
                </p>
                <p class="point">他刚刚分享了{{appointment.articlecount}}篇文章</p>
                <p class="desc">交友宣言：{{appointment.content}}。</p>
              </div>
              <div class="fr xy">
                <ul>
                  <li class="likeico" @click="like(appointment.userid,index)">
                    <i class="like sui-icon icon-tb-like"></i>
                  </li>
                  <li @click="unlike(appointment.userid)">
                    <i class="close sui-icon icon-tb-roundclose"></i>
                  </li>
                  <li>
                    <i class="message sui-icon icon-tb-comment"></i>
                  </li>
                </ul>
              </div>
              <div class="clearfix"></div>
            </li>
            
          </ul>
        </div>
      </div>
      <div class="fl right-tag">
        <div class="friend-info-card">
          <div class="card">
            <div class="photo-name">
              <img src="~/assets/img/widget-photo.png" alt>
              <div class="name-edit">
                <p>
                  <span class="name">{{nickname}}</span>
                  <span class="edit">编辑兴趣资料</span>
                </p>
                <p>认证</p>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="like">
              <span class="like1">
                喜欢
                <i class="num">400</i>
              </span>
              <span>
                被喜欢
                <i class="num">5</i>
              </span>
            </div>
          </div>
        </div>

        <div class="card">

            <router-link to="/friend/list" >好友列表</router-link>

        </div>

        <div class="block-btn">
          <p>约一约有趣的人，会一会好的时光！</p>
          <a
            class="sui-btn btn-block btn-share"
            href="/friend/submit"
            target="_blank"
          >发布约会</a>
        </div>
        <div class="rank">
          <div class="head">
            <h3 class="title">排行榜</h3>
          </div>
          <div class="rank-list">
            <ul class="rank">
              <li>
                <span class="fl dating">喝咖啡</span>
                <span class="fr cafe">102258</span>
              </li>
              <li>
                <span class="fl dating">吃饭</span>
                <span class="fr eat">9878</span>
              </li>
              <li>
                <span class="fl dating">看电影</span>
                <span class="fr movie">2564</span>
              </li>
              <li>
                <span class="fl dating">旅行</span>
                <span class="fr travel">897</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="friend-line-card">
          <div class="card">
            <p>找个合适的参加一场线下活动</p>
          </div>
        </div>
        <div class="friend-line-card">
          <div class="card">
            <p>找个合适的参加一场线下活动</p>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import "~/assets/css/page-sj-makeFriends-index.css"
import {getUser} from '@/utils/auth'
import axios from 'axios'
import friendApi from '@/api/friend'
export default {
  created(){
        if(getUser().name===undefined){
            this.$router.push('/login')
        }
        
  },
  data(){
    return {
      nickname:getUser().name,
      userid:''

    }
  },
  asyncData({params}){
    return axios.all( [friendApi.getAppointment(getUser().userid)] ).then(axios.spread(function(appointlist){
      return {
        appointlist:appointlist.data.data
      }
    }))
  },
  methods:{
    unlike(userid){//不喜欢
      friendApi.addFriend(userid,2,getUser().userid).then(response => {

      })
      friendApi.getAppointment(getUser().userid).then(res => {
          this.appointlist = res.data.data
      })
    },
    like(userid,index){
      if (this.appointlist[index].likeico === "color") {
        this.$message({
          message: "不可以重复点赞哦~",
          type: "warning"
        });
        return;
      }

      friendApi.addFriend(userid,1,getUser().userid).then(response => {
        this.appointlist[index].likeico = "color"
      })
    }
  }

}
</script>
