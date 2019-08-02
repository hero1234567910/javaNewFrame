<template>
  <div>
    <el-form
      :model="loginForm"
      :rules="fieldRules"
      ref="loginForm"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-container"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item prop="loginId">
        <el-input type="text" v-model="loginForm.loginId" auto-complete="off" placeholder="登录名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:48%;" @click.native.prevent="Reset">重 置</el-button>
        <el-button
          type="primary"
          style="width:48%;"
          @click.native.prevent="Login"
          :loading="logining"
        >登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import model from "./model.js";
export default {
  components: {},
  name: "Login",
  data() {
    this.model = model(this.axios);

    return {
      logining: false,
      loginForm: {
        loginId: "",
        password: ""
      },
      fieldRules: {
        loginId: [{ required: true, message: "请输入登录名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: true,
      
    };
  },
  methods: {
    Login() {
      let self = this;
      let userInfo = {
        loginId: this.loginForm.loginId,
        password: this.loginForm.password
      };
      let data = userInfo;
      this.model.Login(data).then(function(res) {
        if (res.data.code == "0") {
          window.localStorage.setItem("m_token", res.data.data.token);
          window.localStorage.setItem(
            "m_user_rowGuid",
            JSON.stringify(res.data.data.userRowGuid)
          );
          window.localStorage.setItem(
            "m_user_userName",
            JSON.stringify(res.data.data.userName)
          );
          window.localStorage.setItem("m_sex", JSON.stringify(res.data.sex));
          window.localStorage.setItem(
            "m_mobile",
            JSON.stringify(res.data.mobile)
          );
          window.localStorage.setItem(
            "m_deptGuid",
            JSON.stringify(res.data.deptGuid)
          );
          window.localStorage.setItem(
            "m_deptName",
            JSON.stringify(res.data.deptName)
          );
          window.localStorage.setItem(
            "m_loginId",
            JSON.stringify(res.data.loginId)
          );
          self.$message({
          message: '登录成功',
          type: 'success'
          });
          self.$router.push("/");
        } else {
          self.$message.error(res.data.msg);
        }
      });
    },
    Reset() {
      this.$refs.loginForm.resetFields();
    }
  }
};
</script>
<style scoped>
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 400px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.remember {
  margin: 0px 0px 35px 0px;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>

