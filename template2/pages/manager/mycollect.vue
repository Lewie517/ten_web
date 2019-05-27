<template>
    <div class="focus-list"> 
     <div class="mycollect-list"> 
      <ul class="sui-nav nav-tabs nav-large"> 
       <!-- <li class="active"><a href="#one" data-toggle="tab">收藏的文章</a></li> 
       <li><a href="#two" data-toggle="tab">收藏的企业</a></li> 
       <li><a href="#three" data-toggle="tab">收藏的吐槽</a></li>  -->
       <li :class="type=='one'?'active':''"><a @click="type='one'">收藏的文章</a></li> 
        <li :class="type=='two'?'active':''"><a @click="type='two'">收藏的企业</a></li> 
        <li :class="type=='three'?'active':''"><a @click="type='three'">收藏的吐槽</a></li> 
       
      </ul> 
      <div class="tab-content tab-wraped"> 
       <div id="one" :class="'tab-pane '+(type=='one'?'active':'')"> 
        <!-- <ul class="collect-list"> 
         <li class="collect-item"> 
          <div class="intro"> 
           <div class="fl border"> 
            <span class="fa fa-thumbs-up" aria-hidden="true"></span> 
            <span class="usenum">12</span> 
            <span class="fa fa-star" aria-hidden="true"></span> 
           </div> 
           <div class="fl content"> 
            <p class="title">面试说通过了要回去等offer，现在都两周了，还说在ceo审批，两天联系hr一次，都说还在等审批什么情况？工资什么的都谈好了，也要了工资证明。面试说通过了，要回去等offer，现在都两周了还说在ceo审批，两天联系hr一次，都说还在等审批，什么情况？？工资什么的都谈好了，也要了工资证明。也工资证明。</p> 
            <p class="link"><a href="ruanyifeng.com">ruanyifeng.com</a></p> 
           </div> 
           <div class="fr info"> 
            <img src="~/assets/img/widget-photo.png" alt="" /> 
            <span class="author">本杰明</span> 
           </div> 
           <div class="clearfix"></div> 
          </div> </li> 
         <li class="collect-item"> 
          <div class="intro"> 
           <div class="fl border"> 
            <span class="fa fa-thumbs-up" aria-hidden="true"></span> 
            <span class="usenum">12</span> 
            <span class="fa fa-star" aria-hidden="true"></span> 
           </div> 
           <div class="fl content"> 
            <p class="title">面试说通过了要回去等offer，现在都两周了，还说在ceo审批，两天联系hr一次，都说还在等审批什么情况？工资什么的都谈好了，也要了工资证明。面试说通过了，要回去等offer，现在都两周了还说在ceo审批，两天联系hr一次，都说还在等审批，什么情况？？工资什么的都谈好了，也要了工资证明。也工资证明。</p> 
            <p class="link"><a href="ruanyifeng.com">ruanyifeng.com</a></p> 
           </div> 
           <div class="fr info"> 
            <img src="~/assets/img/widget-photo.png" alt="" /> 
            <span class="author">本杰明</span> 
           </div> 
           <div class="clearfix"></div> 
          </div> </li> 
        </ul>  -->
        <ul class="collect-list" id="headline">
              <!-- 循环 -->
              <li class="collect-item" v-for="(item,index) in articlelist" :key="index" >
                <div class="fl indexImg">
                  <img src>
                </div>
                <div class="words">
                  <h3>
                    <router-link :to="'/article/'+item.id">{{item.title}}</router-link>
                    <span style="float:right;">
                      <a href="javascript:void(0);" @click="NOcollect(item.id)">取消关注</a>
                    </span>
                  </h3>
                  <h5 class="author">
                    <div class="fl">
                      <span>{{time(item.createtime)}}</span>
                    </div>
                    <div class="clearfix"></div>
                  </h5>
                </div>
                <!-- <p class="content">{{item.content}}</p> -->
              </li>
             
            </ul>
       </div> 
       <div id="two" :class="'tab-pane '+(type=='two'?'active':'')"> 
        <ul class="company-list"> 
         <li class="company-item"> 
          <div class="fl"> 
           <p><span class="name">传智播客</span> <span class="job">5个职位在招聘</span></p> 
           <p>学堂在线，汇集世界顶尖大学的中文MOOC平台，面向全球学子提供顶尖大学MOOC课程。</p> 
          </div> 
          <div class="fr focus"> 
           <span>关注 7</span> 
           <button class="sui-btn btn-danger btn-bordered">取消关注</button> 
          </div> 
          <div class="clearfix"></div> </li> 
         <li class="company-item"> 
          <div class="fl"> 
           <p><span class="name">传智播客</span> <span class="job">5个职位在招聘</span></p> 
           <p>学堂在线，汇集世界顶尖大学的中文MOOC平台，面向全球学子提供顶尖大学MOOC课程。</p> 
          </div> 
          <div class="fr focus"> 
           <span>关注 7</span> 
           <button class="sui-btn btn-danger btn-bordered">取消关注</button> 
          </div> 
          <div class="clearfix"></div> </li> 
        </ul> 
       </div> 
       <div id="three" :class="'tab-pane '+(type=='three'?'active':'')"> 
        <ul class="tc-list"> 
         <li class="tc-item" v-for="(item,index) in items" :key="index"> 
          <div class="border"> 
           <span class="fa fa-thumbs-up" aria-hidden="true"></span> 

           <span class="usenum">{{item.thumbup}}</span> 
           <a  @click="noCollectSpit(item._id)"><span class="fa fa-star-o" aria-hidden="true" style="color:red;"></span></a>
          </div> 
          <div class="content"> 
           <p><a href="#">{{item.content}}</a></p> 
          </div> 
        </li> 
         <!-- <li class="tc-item"> 
          <div class="border"> 
           <span class="fa fa-thumbs-up" aria-hidden="true"></span> 
           <span class="usenum">12</span> 
           <span class="fa fa-star" aria-hidden="true"></span> 
          </div> 
          <div class="content"> 
           <p><a href="#">今天入职腾讯，产品岗，普通非985211大学，上家是不到五十人创业小公司！16年毕业！找内推腾讯给的面试机会，五轮面试！可能是我把运气攒一起了！</a></p> 
          </div> 
        </li>  -->
        </ul> 
       </div> 
      </div> 
     </div> 
    </div> 
</template>
<script>
import '~/assets/css/page-sj-person-mycollect.css'
import axios from 'axios'
import articleApi from '@/api/article'
import spitApi from "@/api/spit"
import {getUser} from '@/utils/auth'
export default {
    asyncData(){
      return axios.all([ articleApi.getCollectArticle(getUser().userid),
                         spitApi.getCollectArticle(getUser().userid) ]).then(
        axios.spread(function(articlelist,items){
            return {
              articlelist:articlelist.data.data,
              items:items.data.data
            }
        })
      )
    },

    data(){
      return {
        type:'one',
        articlelist:{},
        items:{}
      }
      
    },
    methods:{
      time(date) {
        var dateee = new Date(date).toJSON();
        return new Date(+new Date(dateee) + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "");
      },
      NOcollect(articleid){
        articleApi.nocollect(articleid,getUser().userid).then(res => {
          this.$message({
              message: res.data.message,
              type: res.data.flag ? "success" : "error",
              showClose: true
          })
          articleApi.getCollectArticle(getUser().userid).then(response => {
            this.articlelist=response.data.data
          })
        })
      },
      noCollectSpit(spitid){
        spitApi.nocollect(spitid,getUser().userid).then( res=> {
          this.$message({
              message: res.data.message,
              type: res.data.flag ? "success" : "error",
              showClose: true
          })
          spitApi.getCollectArticle(getUser().userid).then( response => {
            this.items=response.data.data
          })
        })
        
      }
    }
}
</script>
