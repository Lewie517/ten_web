<template>
  <div class="wrapper loginsign">
    <div class="item signup">
      <div class="form">
        <h3 class="loginsign-title">注册新账号</h3>
        <form class="sui-form">
          <div class="control-group">
            <label for="inputname" class="control-label">名字</label>
            <div class="controls">
              <input
                type="text"
                id="inputname"
                v-model="nickname"
                placeholder="真实姓名或常用昵称"
                class="input-xlarge"
              >
            </div>
          </div>
          <div class="different">
            <div class="radio-content">
              <div id="a1" class="phone">
                <div class="control-group number">
                  <input
                    type="text"
                    v-model="mobile"
                    placeholder="仅支持大陆手机号"
                    class="input-xlarge"
                  >
                </div>
                <div class="control-group code">
                  <div class="input-append">
                    <input
                      id="appendedInputButton"
                      v-model="code"
                      type="text"
                      placeholder="短信验证"
                      class="span2 input-large msg-input"
                    >
                    <button type="button" @click="sendsms" class="sui-btn msg-btn">获取验证码</button>
                  </div>
                </div>
                <div class="control-group">
                  <label for="inputpassword" class="control-label">密码</label>
                  <div class="controls">
                    <input
                      type="password"
                      id="inputpassword"
                      v-model="password"
                      placeholder="请输入6-16位密码"
                      class="input-xlarge"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="control-group btn-signup">
            <label class="control-label"></label>
            <div class="controls">
              <label>
                <!-- <input type="checkbox">
                <span class="type-text" style="font-size:12px;">同意协议并接受《服务条款》</span> -->
                <el-checkbox v-model="checked">同意协议接受《服务条款》</el-checkbox>
              </label>
              <button type="button" class="sui-btn btn-danger btn-yes" @click="register()">注 册</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="item">
      <div class="form">
        <h3 class="loginsign-title">用户登录</h3>
        <form class="sui-form login-form">
          <div class="control-group">
            <label for="inputname" class="control-label">手机号：</label>
            <div class="controls">
              <input
                type="text"
                id="inputname"
                v-model="mobile"
                placeholder="11位手机号"
                class="input-xlarge"
                data-rules="required"
              >
            </div>
          </div>
          <div class="control-group">
            <label for="inputpassword" class="control-label">密码：</label>
            <div class="controls">
              <input 
                type="password"
                id="inputpassword"
                v-model="password"
                placeholder="输入登录密码"
                class="input-xlarge"
              >
            </div>
          </div>
          <div class="controls">
            <label>
              <input type="checkbox" name="remember-me">
              <span class="type-text" style="font-size:12px;">记住登录状态</span>
            </label>
            <button type="button" class="sui-btn btn-danger btn-yes" @click="login">登 录</button>
          </div>
          <div id="weixin"></div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import "~/assets/css/page-sj-person-loginsign.css";
import userApi from "@/api/user";
import { setUser, getUser } from "@/utils/auth";

export default {
  data() {
    return {
      code: "", // 验证码
      checked: false, // 是否同意服务条款
      mobile: "", // 手机号码
      password: "", // 密码
      remenberMe: false, // 记住我
      dialogVisible: false // 弹出框
    }
  },
  methods: {
    sendsms() {
      // 验证手机号
      if (
        !/^((13[0-9])|(15[^4])|(18[0,2,3,5-9])|(17[0-8])|(147))\d{8}$/g.test(
          this.mobile
        )
      ) {
        this.$message({
          message: "手机填写有误",
          type: "error",
          showClose: true
        });
        return;
      }
      userApi.sendsms(this.mobile).then(response => {
        this.$message({
          message: response.data.message,
          type: response.data.flag ? "success" : "error",
          showClose: true
        });
      });
    },
    register() {
      // 数据校验
      let validateObj = this.dataValidate();
      if (!validateObj.flag) {
        this.$message({
          message: validateObj.errMsg,
          type: "error",
          showClose: true
        });
        return;
      }
      // 进行注册
      userApi.register(this.nickname,this.mobile,this.password, this.code).then(response => {
        this.$message({
          message: response.data.message,
          type: response.data.flag ? "success" : "error",
          showClose: true
        })
      })
      //清空数据
      // code: "", // 验证码
      // checked: false, // 是否同意服务条款
      // mobile: "", // 手机号码
      // password: "", // 密码
      // remenberMe: false, // 记住我
      // dialogVisible: false // 弹出框
      this.nickname = ""
      this.password = ""
      this.mobile = ""
      this.code = ""
      this.checked = false

    },
    // 校验数据
    dataValidate() {
      let errMsg = "";
      // 判断昵称
      if (!this.nickname) {
        errMsg = "昵称不能为空";
        return {
          flag: false,
          errMsg
        };
      }
      // 判断密码
      if (
        !this.password ||
        this.password.length <= 6 ||
        this.password.length >= 16
      ) {
        errMsg = "密码长度必须在6-16之内";
        return {
          flag: false,
          errMsg
        };
      }
      // 是否同意了服务条款
      if (!this.checked) {
        errMsg = "必须先同意服务条款";
        return {
          flag: false,
          errMsg
        };
      }
      return {
        flag: true,
        errMsg
      };
    },
    login() {
      // 登录校验
      if (!/^((13[0-9])|(15[^4])|(18[0,2,3,5-9])|(17[0-8])|(147))\d{8}$/g.test(this.mobile)) {
        this.$message({
          message: "手机填写有误",
          type: "error",
          showClose: true
        });
        return;
      }
      if (!this.password) {
        this.$message({
          message: "密码不能为空",
          type: "error",
          showClose: true
        });
        return;
      }
      userApi.login(this.mobile, this.password).then(response => {
        if (response.data.flag) {
          let data = response.data.data;
          // 将返回的数据存入cookie  data.id,
          console.log(data.name)
          setUser( data.token, data.name, data.avatar, data.userid);
          location.href = "/manager"; // 登录成功，跳转到用户中心
        } else {
          this.$message({
            message: response.data.message,
            type: "error",
            showClose: true
          })
          this.mobile=''
          this.password=''
        }
      });
    },
    showWechatLogin() {
      this.dialogVisible = true;
    }
  },
  head: {
    script: [
      { src: "http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js" }
    ]
  }
};
</script>
