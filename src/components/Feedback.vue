<template>

  <div id="page">
    <div id="header" class="page-header">
      <img src="../assets/header.jpg" id="header-img"/>
    </div>
    <div id="navigationBar" class="navigationBar">
      <el-menu id="mainBar" :default-active="this.$route.path" router mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item id="Button1" index="/index">HOME</el-menu-item>
        <el-menu-item id="Button2" index="/weather">WEATHER</el-menu-item>
        <el-menu-item id="Button3" index="/timetable">TIMETABLE</el-menu-item>
        <el-menu-item id="Button4" index="/map">MAP</el-menu-item>
        <el-menu-item id="Button5" index="/feedback">FEEDBACK</el-menu-item>
        <i class="el-icon-switch-button" v-on:click="logout" style="float: right;font-size: 20px;color: burlywood; padding: 10px"></i>
      </el-menu>
    </div>

    <div id="feedbackContainer" class="feedbackContainer">
      <el-input v-model="feedbackForm.name" placeholder="Input your name" style="margin-bottom: 10px; width: 100%"></el-input>
      <el-input v-model="feedbackForm.email" placeholder="Input your email" style="margin-bottom: 10px; width: 100%"></el-input>
      <el-input
        id="feedbackInput"
        type="textarea"
        :rows="5"
        placeholder="Please input your message"
        v-model="feedbackForm.message">
      </el-input>
      <el-button @click="clickButton" type="primary" style="float: right; margin-top: 10px">Send<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
  </div>

</template>

<script>
export default {
  name: "Feedback",

  data() {
    return {
      feedbackForm: {
        name:'',
        email:'',
        message:''
      }
    }
  },
  methods: {
    logout() {
      let _this = this
      this.$axios
        .get('/logout')
        .then(response => {
          if (response.data.status === "successfully log out") {
            _this.$store.commit('logout')
            _this.$router.replace('/login')
          }
        })
    },
    clickButton(){
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (this.feedbackForm.name === '') {
        alert("please enter your name")
      } else {
        if (this.feedbackForm.email === '') {
          alert("please enter your email")
        } else {
          if (re.test(this.feedbackForm.email) == false) {
            alert("please enter correct format email");
          } else {
            if (this.feedbackForm.message === '') {
              alert("message cannot be empty !")
            } else {
              this.sendEmail(this.feedbackForm.email, this.feedbackForm.name, this.feedbackForm.message);
              location.reload()
            }
          }
        }
      }
    },
    sendEmail(email, name, body) {
      var link = `mailto:${email}` +
        `?cc=zgbubble9@gmail.com` +
        "&subject=" + encodeURIComponent(`${name}`) +
        "&body=" + encodeURIComponent(body);
      window.location.href = link;
    }

  }

}

</script>
<style scoped>
body{
  margin: 0;
  padding: 0;
}
#header-img{
  width: 40%;
  height: 140px;
}
#navigationBar{
  height: 65px;
}
#mainBar{
  float: left;
  width: 100%;
}
#Button1{
  margin-left: 200px;
  font-size: 18px;
}
#Button2{
  margin-left: 10px;
  font-size: 18px;
}
#Button3{
  margin-left: 10px;
  font-size: 18px;
}
#Button4{
  margin-left: 10px;
  font-size: 18px;
}
#Button5{
  margin-left: 10px;
  font-size: 18px;
}
.el-icon-switch-button{
  cursor: pointer;
  outline: 0;
  margin-top: 10px;
}
.feedbackContainer{
  margin: 40px auto auto auto;
  width: 50%;
}
</style>
