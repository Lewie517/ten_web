<template>
  <div class="wrapper qa-content">
    <div class="qa-title">
      <div class="fl title">
        <h2>{{item.title}}</h2>
        <p>
          <span class="tag"></span>
          <span class="author">{{item.nickname}}</span>
          <span>发出提问&nbsp;时间:{{time(item.createtime)}}</span>
          <!-- <span style="font-size:18px;">{{item.content}}</span> -->
        </p>
      </div>
      <div class="fr share">
        <h4>分享到：</h4>
        <ul class="share-go">
          <li>
            <img src="~/assets/img/widget-weibo.png" alt>
          </li>
          <li>
            <img src="~/assets/img/widget-weixin.png" alt>
          </li>
        </ul>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="fl left-list" style="width:1170px;">
      <div class="problem-detail">
        <div class="title-intro">
          
          <div class="title">
            <div class="detail">
              <p>{{item.content}}</p>
            </div>
            <div class="clearfix"></div>
            <div class="operate">
              <!-- <span class="time">1小时前提问</span>
              <span class="comment">评论</span>
              <span class="edit">编辑</span>
              <span class="jubao">举报</span> -->
            </div>
            
          </div>
        </div>
        <div class="answer-intro">
          <h4 class="answer-num">{{item.reply}}个回答</h4>

          
          <ul>
            <div class="comment-div">
              <form class="comment-form sui-form form-inline" style="padding-left:11px;">
                <div class="input-prepend input-append input-box">
                  <input id="appendedPrependedInput" style="height:24px;width:800px;" type="text" v-model="newAnswer" class="span2 input-fat real-box" placeholder="写下你的评论">
                  <!-- <input id="problemid" type="hidden" v-model="problemid" /> -->
                  <button type="button" style="height:34px;width:66px" class="add-on" @click="submitAnswer()">提交</button>
                </div>
              </form>
            </div>
            <li v-for="(answer,index) in answerlist" :key="index">
              <div class="title">
                <p>{{answer.content}}</p>
                <div class="operate">
                  <div class="tool pull-left">
                    <span class="time">回答时间:{{time(answer.createtime)}}</span>
                    <span class="comment">评论</span>
                    <span class="edit">编辑</span>
                    <span class="jubao">举报</span>
                  </div>

                  <div class="myanswer pull-right">
                    <img src="~/assets/img/widget-photo.jpg" alt>
                    <span>{{answer.nickname}}</span>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <div class="comment-box">
                  <!-- <form class="comment-form">
                    <textarea row="1" placeholder="使用评论询问更多信息或提出修改意见，请不要在评论里回答问题"></textarea>
                    <button type="submit" class="sui-btn submit-comment">提交评论</button>
                  </form> -->
                  
                </div>
              </div>
              <hr style="color: green;">
            </li>
            
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="edit-answer">
          
        </div>
      </div>
    </div>
    
    <div class="clearfix"></div>
  </div>
</template>
<script>
import "~/assets/css/page-sj-qa-detail.css"
import "~/assets/css/page-sj-headline-detail.css"
import problemApi from '@/api/problem'
import axios from 'axios'
import {getUser} from '@/utils/auth'
export default {

    asyncData({params}){
        return axios.all( [problemApi.searchById(params.id),problemApi.findAnswerById2(params.id)] ).then(
          axios.spread( function(item,answerlist){
            return {
              item: item.data.data,
              answerlist: answerlist.data.data,
              problemid: params.id
            }
          })
        )
    },
    data(){
      return{
        problemid:'',
        newAnswer:'',
        params:{},
        answerlist:[]
      }
    },
    methods:{
      submitAnswer(){
        problemApi.saveAnswer(this.problemid,this.newAnswer,getUser().userid,getUser().name).then(res=>{
          this.$message({
              message: res.data.message,
              type: (res.data.flag?'success':'error'),
              showClose: true
          })
          
          problemApi.findAnswerById2(this.problemid).then( response=>{
            this.answerlist=response.data.data
            this.item.reply = this.item.reply+1
          })

        })
        
        this.newAnswer=''

      },
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
