<template>
<div>
    <div class="banner"> 
   <div class="wrapper"> 
    <img src="~/assets/img/page-banner.png" alt="" /> 
   </div> 
  </div> 
  <!--两列布局--> 
  <div class="wrapper tag-item"> 
   <div class="fl left-list"> 
    <div class="friend-list"> 
     <h4>消息中心</h4> 
     <ul> 
      <li class="friend-item"> 
       <div class="tip"> 
        <span class="num">2</span> 
        <img src="~/assets/img/widget-photo.png" alt="" /> 
       </div> 
       <div class="msg"> 
        <p><span class="name">毕鹏</span><span class="date">2017-10-23</span></p> 
        <p class="msg-content">Hi 你在干什么呢？</p> 
       </div> </li> 
      <li class="friend-item"> 
       <div class="tip"> 
        <span class="num">2</span> 
        <img src="~/assets/img/widget-photo.png" alt="" /> 
       </div> 
       <div class="msg"> 
        <p><span class="name">毕鹏</span><span class="date">2017-10-23</span></p> 
        <p class="msg-content">Hi 你在干什么呢？</p> 
       </div> </li> 
      <li class="friend-item"> 
       <div class="tip"> 
        <span class="num">2</span> 
        <img src="~/assets/img/widget-photo.png" alt="" /> 
       </div> 
       <div class="msg"> 
        <p><span class="name">毕鹏</span><span class="date">2017-10-23</span></p> 
        <p class="msg-content">Hi 你在干什么呢？</p> 
       </div> </li> 
      <li class="friend-item"> 
       <div class="tip"> 
        <span class="num">2</span> 
        <img src="~/assets/img/widget-photo.png" alt="" /> 
       </div> 
       <div class="msg"> 
        <p><span class="name">毕鹏</span><span class="date">2017-10-23</span></p> 
        <p class="msg-content">Hi 你在干什么呢？</p> 
       </div> </li> 
      <li class="friend-item"> 
       <div class="tip"> 
        <span class="num">2</span> 
        <img src="~/assets/img/widget-photo.png" alt="" /> 
       </div> 
       <div class="msg"> 
        <p><span class="name">毕鹏</span><span class="date">2017-10-23</span></p> 
        <p class="msg-content">Hi 你在干什么呢？</p> 
       </div> </li> 
     </ul> 
    
    </div> 
   </div> 
   <div class="fl right-tag"> 
    <div class="friend-info-card"> 
     <div class="card"> 
      <div class="photo-name"> 
       <img src="~/assets/img/widget-photo.png" alt="" /> 
       <div class="name-edit"> 
        <p><span class="name">用户名</span> <span class="edit">编辑兴趣资料</span></p> 
        <p>认证</p> 
       </div> 
       <div class="clearfix"></div> 
      </div> 
      <div class="like"> 
       <span class="like1">喜欢　<i class="num">400</i></span> 
       <span>被喜欢　<i class="num">5</i></span> 
      </div> 
     </div> 
    </div> 
    <div class="block-btn"> 
     <p>约一约有趣的人，会一会好的时光！</p> 
     <a class="sui-btn btn-block btn-share" href="~/assets/makeFriends-submit.html" target="_blank">发布约会</a> 
    </div> 
   
   </div> 
   <div class="clearfix"></div> 
  </div> 
</div>
</template>
<script>
import "~/assets/css/page-sj-makeFriends-list.css"
import userApi from '@/api/user'
export default {
   /**
    * 查询用户信息,通过token查
    * 查询消息
    *  
    * */ 
}
</script>

