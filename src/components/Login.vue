<template>
  <body id="backPicture">
    <el-form class="login_container" label-position="left" label-width="0px" :model="loginForm" :rules="rules">
      <p class="login_title">Smart Commute</p>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="password" show-password></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button  type="primary" style="width: 100%; background: #2c3e50; border: none; float: left" v-on:click="login">login</el-button>
      </el-form-item>
      <el-form-item>
        <el-form-item>
        <span class="register_link"
              onclick="window.location.href='register'">Do not have an account?</span>
        </el-form-item>
      </el-form-item>
    </el-form>
  </body>
</template>

<script>
import qs from 'qs'
export default {
  name: "Login",
  data (){
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
            {required: true, message: 'username cannot be empty', trigger: 'blur'}
        ],
        password: [
            {required: true, message: 'password cannot be empty', trigger: 'blur'}
        ]
      }
      //responseResult: []
    }
  },
  methods: {
    login() {
      var _this = this
      //console.log(this.$store.state)
      this.$axios
      .post('/login',{
        username: this.loginForm.username,
        password: this.loginForm.password
      })
      .then(successResponse => {
        console.log(successResponse.data);
        if (successResponse.data.status === "Correct") {

          const jwtToken = successResponse.headers['authorization']
          console.log(jwtToken)
          const userInfo = successResponse.data.result
          console.log(userInfo)

          _this.$store.commit('set_Token', jwtToken)
          _this.$store.commit('set_UserInfo', userInfo)

          console.log(_this.$store.getters.getUserInfo)

          var path = this.$route.query.redirect
          this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
          //this.$router.replace({path: '/index'})
        } else {
          alert("Invalid username or password !")
        }
      })
      .catch(failResponse => {

      })
    }
  }
}
</script>

<style>
  .login_container {
    border-radius: 25px;
    background-clip: padding-box;
    margin: 200px auto;
    width: 500px;
    padding: 40px 40px 15px 40px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    background: #fff;
  }
  .login_title {
    margin: 0px auto 20px auto;
    text-align: center;
    color: #2c3e50;
    font-size: 25px;
  }
  body{
    margin: 0px;
  }
  #backPicture{
    background: url("../assets/logIn.png") no-repeat center;
    height: 100%;
    width: 100%;
    position: fixed;
    background-size: cover;
  }
  .register_link{
    text-decoration: underline;
    margin-left: 120px;
  }
  .register_link:hover{
    cursor: pointer;
    color: coral;
  }
</style>
