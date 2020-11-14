<template>

  <body id="backPicture">
    <el-form class="register_container" label-position="left" label-width="0px" :model="registerForm" :rules="rules">
      <p class="register_title">Smart Commute</p>

      <el-form-item prop="username">
        <el-input type="text" v-model="registerForm.username" auto-complete="off" placeholder="username"></el-input>
      </el-form-item>

      <el-form-item prop="address">
        <el-input type="text" v-model="registerForm.address" auto-complete="off" placeholder="address"></el-input>
      </el-form-item>

      <el-form-item prop="phoneNumber">
        <el-input type="text" v-model="registerForm.phoneNumber" auto-complete="off" placeholder="phoneNumber"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input id="pwd" type="password" v-model="registerForm.password" auto-complete="off" placeholder="password" show-password></el-input>
      </el-form-item>

      <el-form-item prop="confirmPassword">
        <el-input type="password" v-model="registerForm.confirmPassword" auto-complete="off" placeholder="confirm password" show-password></el-input>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button  type="primary" style="width: 100%; background: #2c3e50; border: none; float: left" v-on:click="register">register</el-button>
      </el-form-item>
      <el-form-item>
        <span class="login_link"
              onclick="window.location.href='login'">Already have an account?</span>
      </el-form-item>

    </el-form>
  </body>

</template>

<script type="text/javascript">
export default {
  name: "Register",
  data(){
    return{
      registerForm:{
        username:'',
        address:'',
        phoneNumber:'',
        password:'',
        confirmPassword:''
      },

      rules:{
        username: [
          {required: true, message: 'username cannot be empty', trigger: 'blur'}
        ],
        address: [
          {required: true, message: 'address cannot be empty', trigger: 'blur'}
        ],
        phoneNumber: [
          {required: true, message: 'phone number cannot be empty', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'password cannot be empty', trigger: 'blur'}
        ],
        confirmPassword: [
          {required: true, message: 'confirm password cannot be empty', trigger: 'blur'},
          {validator:(rule,value,callback)=>
            {if (value!==this.registerForm.password){callback(new Error('confirm password is different from password!'))}
            else { callback() }
            }, trigger: 'blur'
          }]
      }
    }
  },
  methods:{
    register(){
      this.$axios
      .post('/register',{
        username: this.registerForm.username,
        password: this.registerForm.password,
        address: this.registerForm.address,
        phoneNumber: this.registerForm.phoneNumber
      })
      .then(successResponse => {
        console.log(successResponse.data);
        if (successResponse.data.status === "Correct") {
          this.$router.replace({path: '/login'})
        } else if (successResponse.data.status === "username has been used, sorry"){
          alert("username has been used, sorry")
        } else {
          alert("Error happens, please try again !")
        }
      })
      .catch(failResponse => {

      })
    }
  }

}
</script>

<style>
 body{
   margin: 0;
 }
 .register_container{
   border-radius: 25px;
   background-clip: padding-box;
   margin: 200px auto;
   width: 600px;
   padding: 40px 40px 15px 40px;
   border: 1px solid #eaeaea;
   box-shadow: 0 0 25px #cac6c6;
   background: #fff;
 }
 .register_title{
   margin: 0px auto 20px auto;
   text-align: center;
   color: #2c3e50;
   font-size: 25px;
 }
 .login_link{
   text-decoration: underline;
   margin-left: 180px;
 }
 .login_link:hover{
   cursor: pointer;
   color: coral;
 }
 #backPicture{
   background: url("../assets/logIn.png") no-repeat center;
   height: 100%;
   width: 100%;
   position: fixed;
   background-size: cover;
 }
</style>
