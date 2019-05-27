<template>
  <div>
      <header>
        <div class="activity-head">
        <div class="wrapper"> 
        <div class="sui-navbar"> 
            <div class="navbar-inner"> 
            <a href="/" class="sui-brand"><img src="~/assets/img/ten2.png" style="width:122px;height:47px;" alt="社交" /></a> 
            <ul class="sui-nav" style="padding-left:35px;"> 
                <router-link tag="li" to="/" active-class="active" exact><a>首页</a></router-link>
                <router-link tag="li" to="/qa" active-class="active"><a>问答</a></router-link>
                <router-link tag="li" to="/gathering" active-class="active"><a>活动</a></router-link>
                <router-link tag="li" to="/friend" active-class="active"><a>交友</a></router-link>
                <router-link tag="li" to="/spit" active-class="active"><a>吐槽</a></router-link>
                <router-link tag="li" to="/recruit" active-class="active"><a>招聘</a></router-link>

            </ul> 
            <form class="sui-form sui-form pull-left" @submit.prevent> 
                <input type="text" placeholder="输入文章标题查询..." v-model="keyword" @keyup.enter="searchEnterFun" /> 
                <span class="btn-search fa fa-search" @click="search()"></span> 
                <!-- <button type="button" class="btn-search fa fa-search" @click="search()"></button> -->
            </form> 
            <div class="sui-nav pull-right info" v-if="user.name!==undefined"> 
              <li><a href="/manager" class="notice">{{user.name}}</a></li>     
              <li><a @click="logout" class="notice">注销</a></li>            
              <li><a href="/manager"  class="homego"><img src="~/assets/img/asset-photo.png" width="50px" height="50px" :alt="user.name" /></a></li> 
            </div> 
             <div class="sui-nav pull-right info" v-if="user.name===undefined"> 
                <a href="/login" class="sui-btn btn-login">登陆</a>
             </div>
            </div> 
            </div> 
        </div>
        </div>
        </header>
        <nuxt/>
      <footer>
        <div class="footer"> 
        <div class="wrapper"> 
            <div class="footer-bottom"> 
            <div class="link"> 
            <dl> 
            <dt>
                网站相关
            </dt> 
            <dd>
                关于我们
            </dd> 
            <dd>
                服务条款
            </dd> 
            <dd>
                帮助中心
            </dd> 
            <dd>
                编辑器语法
            </dd> 
            </dl> 
            <dl> 
            <dt>
                常用链接
            </dt> 
             
            </dl> 
            <dl> 
            <dt>
                联系我们
            </dt> 
            <dd>
                联系我们
            </dd> 
            <dd>
                加入我们
            </dd> 
            <dd>
                建议反馈
            </dd> 
            </dl> 
            <dl> 
            <dt>
                关注我们
            </dt> 
            <dd>
                微博
            </dd> 
            <dd>
                twitter
            </dd> 
            </dl> 
            <div class="xuke"> 
            
            
            </div> 
            </div> 
            <p class="Copyright">Copyright &copy; 十进制社区 当前版本 1.0.0</p> 
            </div> 
        </div> 
        </div> 
      </footer>
  </div>
</template>
<script>
import '~/assets/plugins/normalize-css/normalize.css'
import '~/assets/plugins/yui/cssgrids-min.css'
import '~/assets/plugins/sui/sui.min.css'
import '~/assets/plugins/sui/sui-append.min.css'
import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
import "~/assets/css/page-sj-headline-login.css"
import '~/assets/css/widget-base.css'
import '~/assets/css/widget-head-foot.css'
import {getUser,removeUser} from '@/utils/auth'
import articleApi from '@/api/article'
export default {
    data(){
        return {
            user: {},
            keyword:""
        }
    },
    created(){
        this.user= getUser()
    },
    methods: {
        logout(){
            removeUser()
            location.href='/'
        },
        search(){
            // this.$router.push({path:'/search',query:{id:this.keyword}})
            this.$router.push("/search/"+this.keyword)
            this.keyword = ''
        },
        searchEnterFun(){
            this.search()
            // this.$router.push("/search/"+this.keyword)
            // this.keyword = ''
        },
        nosubmit(){
            return false;
        }
    }
}
</script>
