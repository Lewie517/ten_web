<template>
  <div class="home-content">
    <div class="activities account-type">
      <h4 class="tit">
        <span>账户设置</span>
      </h4>
      <div class="account-main">
        <div class="account-person">
          <h3>个人账号</h3>
          <form @submit.prevent>
            <ul class="account-info">
              <li>
                <span class="gray index">密码</span>
                <input type="password" v-model="password">
              </li>
              <li>
                <span class="gray index">确认密码</span>
                <input type="password" v-model="repassword">
              </li>
              <li>
                <button
                  class="sui-btn btn-danger save-btn"
                  type="button"
                  @click="saveinfo_name()"
                >保存</button>
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
import Cookies from 'js-cookie'
const UserId='User-Id'
export default {
    asyncData({ params }){
        return userApi.info(getUser().userid).then(res => {
            return {user:res.data.data}
        })
    },
  data() {
    return {
      password: '',
      repassword: '',
      user: {},
      userid: ''
    };
  },
  methods: {
    saveinfo_name() {
      if (this.password != this.repassword) {
        this.$message({
          message: "两次密码不一致，请检查后输入",
          type: "error",
          showClose: true
        });
        return;
      }
      if (
        !this.password ||
        this.password.length <= 6 ||
        this.password.length >= 16
      ) {
        var errMsg = "密码长度必须在6-16之内";
        return {
          flag: false,
          errMsg
        };
      }
      console.log(this.password);
      console.log(this.user + "111");
      this.user.password = this.password;
      console.log(this.password);
      userApi.saveinfo(this.user).then(res => {
        this.$message({
          message: res.data.message,
          type: res.data.flag ? "success" : "error",
          showClose: true
        });
      });
    }
  }
};
</script>

