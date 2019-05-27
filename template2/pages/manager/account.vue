<template>
  <div class="home-content">
    <div class="activities account-type">
      <h4 class="tit">
        <span>账户设置</span>
      </h4>
      <div class="account-main">
        <div class="account-person">
          <h3>个人账号</h3>
          <form  @submit.prevent>
            <ul class="account-info">
              <li>
                <span class="gray index">名字</span>
                  <input type="text" v-model="user.nickname" >
                  <input type="hidden" v-model="user.id">
              </li>
              <li>
                  <span class="gray index">Email</span>
                  <input type="email" v-model="user.email">
              </li>
              <li>
                <span class="gray index">手机号码</span>
                <input type="phone" v-model="user.mobile">
              </li>
              <li>
                  <button class="sui-btn btn-danger save-btn" type="button" @click="saveinfo_name()">保存</button>
              </li>
            </ul>
          </form>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import "~/assets/css/page-sj-person-account.css";
import userApi from "@/api/user";
import { getUser } from "@/utils/auth";
import axios from "axios";
export default {
  asyncData(){
		return userApi.info(getUser().userid).then(  res=>{
			return {user: res.data.data }
		})
	},
  data() {
    return {
      user: {},
      name_input: false,
      nickname:'',
      userid:''
    }
  },
  created() {
    //
  },
  methods: {
    saveinfo_name() {
      userApi.saveinfo(this.user).then(res => {
        this.$message({
            message: res.data.message,
            type: res.data.flag ? "success" : "error",
            showClose: true
        })
      })
      userApi.info(this.user.id).then(  res=>{
			  this.user=res.data.data 
		  })
    }

  }
};
</script>
