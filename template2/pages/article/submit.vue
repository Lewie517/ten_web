<template>
  <!--两列布局-->
  <div class="wrapper">
    <div class="submit-headline">
      <div class="left-box">
        <h3 class="tit">
          <span>发布头条</span>
        </h3>
        <form class="sui-form form-horizontal">
          <div class="control-group">
            <div class="controls title-input">
              <input type="text" id="inputEmail" style="width:570px;border-radius: 5px;" v-model="title" placeholder="标题:不超过30个字符">&nbsp;
              频道:
              <select v-model="channelid" style="width:106px;height:32px;border-radius: 5px;" >
                <option style="border-radius: 5px;" v-for="(item,index) in items" :key="index" :value="item.id">{{item.name}}</option>
              </select>
            </div>
          </div>

          <div class="editor">
            <textarea name="editor1" style="width:723px;height:186px;border-radius: 5px;" v-model="content" placeholder="内容" ></textarea>
            <!-- <input
              type="text"
              style="width:723px;height:186px;text-align=left;margin-left:8px;"
              v-model="newContent"
            > -->
          </div>
          <div class="submit">
            <button type="button" class="sui-btn btn-xlarge btn-success" @click="submitArticle()">提交</button>
          </div>
        </form>
      </div>
      <!-- 右边栏 -->
      <div class="right-tips">
        <h3>发帖指南</h3>
        <ul>
          <li>独立思考、自由探索</li>
          <li>发布的内容和互联网、编程开发、产品设计有关</li>
          <li>标题能准确描述的内容，不要发重复的内容</li>
          <li>客观投票，确保你看过这篇内容</li>
          <li>如果你遇到了具体的编程难题，请到 问答平台 提问</li>
          <li>保持友善，禁止任何形式的广告、SEO 推广</li>
          <li>遵循 用户服务条款</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import "~/assets/css/page-sj-headline-submit.css";
import articleApi from "@/api/article";
export default {
  asyncData(){
    return articleApi.findAllChannel().then(res=>{
      return {
        items:res.data.data
      }
    })
  },
  methods: {
    submitArticle() {
      articleApi.sunmitArticle({title:this.title,newContent:this.newContent,channelid:this.channelid}).then(res => {
          this.$message({
              message: res.data.message,
              type: res.data.flag ? "success" : "error",
              showClose: true
          })
      })
      setTimeout(() => {
        this.$router.push('/')
      }, 2000);
    }
  },
  data() {
    return {
      title: "",
      content: "",
      channelid:""
    }
  }
}
</script>
