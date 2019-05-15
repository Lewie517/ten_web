<template>
  <!--两列布局-->
  <div class="wrapper headline-content">
    <div class="fl left-list">
      <div class="problem-detail">
        <div class="title-intro">
          <h2>{{article.title}}</h2>
          <div class="operate">
            <span class="fl author">
              <strong>{{article.userid}}</strong> 发布于
              <span class="time">{{article.createtime}}</span>
            </span>
            <!-- <span class="fr ">收藏</span> -->
          </div>
          <div class="clearfix"></div>
          <div class="content">
            <p>{{article.content}}</p>
          </div>
        </div>
        <!-- remark area -->
        <div class="answer-intro">
          <h4 class="answer-num">{{article.comment}}条评论</h4>
          <div class="comment-box">
            <form class="comment-form sui-form form-inline"  @submit.prevent>
              <img src="~/assets/img/widget-photo.jpg" alt>
              <div class="input-prepend input-append input-box">
                <input
                  id="appendedPrependedInput"
                  type="text"
                  v-model="content"
                  class="span2 input-fat real-box"
                  placeholder="写下你的评论" @keyup.enter="submitComment()">
                  <input id="articleid" type="hidden" v-model="articleid" />
                <!-- <span class="add-on" @click="login" >提交</span> -->
                <button type="button" class="add-on" @click="submitComment()" >提交</button>
              </div>
            </form>
          </div>
          <div class="remark-list">
            <ul class="lists">
              <li class="item" v-for="(comment,index) in commentlist" :key="index">
                <div class="fl img">
                  <img src="~/assets/img/widget-photo.jpg" alt>
                </div>
                <div class="fl text">
                  <p class="author">
                    <span class="name"><strong>{{comment.userid}}</strong></span> 
                    发布于&nbsp;&nbsp;{{comment.publishdate}}
                  </p>
                  <p class="word" >
                      {{comment.content}}
                  </p>
                  
                </div>
                <div style="clear:both"></div>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "~/assets/css/page-sj-headline-detail.css";
import articleApi from "@/api/article";
import axios from 'axios'
export default {
  asyncData({ params }) {
    return axios.all( [ articleApi.getById(params.id),articleApi.getComment(params.id)  ] ).then( 
        axios.spread( function( article,commentlist ){
            return {
                article: article.data.data,
                commentlist: commentlist.data.data.rows
            } 
        })
    )
  },
  data(){
      return {
        content: "",
        articleid: ""
      }
  },
  methods: {
    submitComment(){
        if(this.content==""){
            this.$message({
                message: "不能为空",
                type: "error",
                showClose: true
            })
            return;
        }
        articleApi.submitComment(articleid,this.content).then(res=>{
            this.$message({
                message: res.data.message,
                type: res.data.flag ? "success" : "error",
                showClose: true
            })
            if(res.data.flag){
                articleApi.getComment(articleid).then(res=>{
                    this.commentlist=res.data.data.rows
                })
            }
            this.content=''
            
        })
    }
  }
  




};
</script>

