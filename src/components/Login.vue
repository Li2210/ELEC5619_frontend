<template>
  <body id="picture">
    <el-form class="login_container" label-position="left" label-width="0px">
      <h3 class="login_title">Restart Australia</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="password" show-password></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%; background: #2c3e50; border: none" v-on:click="login">login</el-button>
      </el-form-item>
    </el-form>
  </body>
</template>

<script>
export default {
  name: "Login",
  data (){
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login() {
      this.$axios
      .post('/login',{
        username: this.loginForm.username,
        password: this.loginForm.password
      })
      .then(successResponse => {
        if (successResponse.data.code === 200) {
          this.$router.replace({path: '/index'})
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
    border-radius: 15px;
    background-clip: padding-box;
    margin: 150px auto;
    width: 450px;
    padding: 30px 30px 15px 30px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    background: #fff;
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #2c3e50;
  }
  body{
    margin: 0px;
  }
  #picture{
    background: url("../assets/login.jpg") no-repeat center;
    height: 100%;
    width: 100%;
    position: fixed;
    background-size: cover;
  }
</style>
