<template>
  <div id="page">
    <div id="header" class="page-header">
      <img src="../../assets/header.jpg" id="header-img"/>
    </div>
    <div id="navigationBar" class="navigationBar">
      <el-menu id="mainBar" :default-active="this.$route.path" router mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item id="Button1" index="/index">HOME</el-menu-item>
        <el-menu-item id="Button2" index="/weather">WEATHER</el-menu-item>
        <el-menu-item id="Button3" index="/timetable">TIMETABLE</el-menu-item>
        <el-menu-item id="Button4" index="/map">MAP</el-menu-item>
        <el-menu-item id="Button5" index="/feedback">FEEDBACK</el-menu-item>
        <el-menu-item id="Button6" index="/userManage">USER MANAGEMENT</el-menu-item>
        <i class="el-icon-switch-button" v-on:click="logout" style="float: right;font-size: 20px;color: burlywood; padding: 10px"></i>
      </el-menu>
    </div>

    <section class="py-5 text-center">
      <div class="container">
        <h2 class="text-center">Smart Commute System</h2>
        <br>
      </div>

      <div class="optext">
        <div class="container">
          <div class="row" style="text-align: left;">
            <div class="col-xs-12 col-md-6 col-lg-6">
              <p class="text-muted">With the increasing pressure of urban traffic, people have to spend a lot of time on commuting. No matter the commuters who have to face the crowded people in the public transportation, or the workers who drive for work have to face the traffic congestion on the peak period, the crowded and slow transportation cannot meet people’s needs. Currently, due to the convid-19, people are extremely afraid of contacting with strangers.To change the current situation, Smart Commute system can  reduce the traffic pressure, save time for commuters by using AI to plan routes based on the current traffic condition.  </p >
            </div>
            <div class="col-xs-12 col-md-6 col-lg-6">
              <p class="text-muted">The Smart Commuting  is also build as a management system to manage all drivers and employees which can reduce the time wasting as well as giving companies the right to choose the suitable commuting arrangements for their actual situation. In addition, the Smart Commute system owns clear personnel arrangements and plans, thus it is able to avoid the large-scale infection for users and track the positive cases by recording of each trip. The main aim of  building this Smart Commute system is to create the a lifestyle with characteristics of suitable, manageable and safe.</p >
            </div>
          </div>
        </div>

        <section>
          <div>
            <h2 class="text-center"><img src="https://post.healthline.com/wp-content/uploads/2019/01/Train_Subway_Commute_Female-732x549-Thumbnail.jpg" /></h2>
          </div>

          <section class="optext" id="">
            <div class="container">
              <div class="row">
                <div id="optext1" class="col-xs-12">
                  <h2 class="text-center">Taking A Greener Route To Work</h2>
                  <br> </br>
                  <p class="text-muted">In Australian cities, a major energy consumption comes from the daily commute. Smart Commute System encourages coordination between public transport companies, companies employees, and drivers to develop a manageable approach to planning more energy-efficient transportation in urban areas.</p >
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-center">How CommuteSmart Works*</h2>
            <h2 class="text-center"><img src="https://images.squarespace-cdn.com/content/v1/595d27e520099e2883491cbc/1499684730215-07KH0A5L3TLOG7MVDU8Y/ke17ZwdGBToddI8pDm48kNDKNTrVloveUwrSENsczKUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnGAqB-0b1VkKGFWDVpOEZJj4ir08yYDeFeOCvmtP_OaBaVxbWUWC1jNMcqdAnQQC7g/image-asset.png" alt="" /></h2>
          </section>
          <!-- Header -->
          <header class="bg-primary text-center py-5 mb-4">
            <div class="container">
              <h1 class="font-weight-light text-white">Meet the Team</h1>
            </div>
          </header>
          <!-- Page Content -->
          <div class="container">
            <div class="row">
              <!-- Team Member 1 -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-0 shadow">
                  <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" class="card-img-top" alt="...">
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">Team Member</h5>
                    <div class="card-text text-black-50">Web Developer</div>
                  </div>
                </div>
              </div>
              <!-- Team Member 2 -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-0 shadow">
                  <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" class="card-img-top" alt="...">
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">Team Member</h5>
                    <div class="card-text text-black-50">Web Developer</div>
                  </div>
                </div>
              </div>
              <!-- Team Member 3 -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-0 shadow">
                  <img src="https://source.unsplash.com/sNut2MqSmds/500x350" class="card-img-top" alt="...">
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">Team Member</h5>
                    <div class="card-text text-black-50">Web Developer</div>
                  </div>
                </div>
              </div>
              <!-- Team Member 4 -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-0 shadow">
                  <img src="https://source.unsplash.com/ZI6p3i9SbVU/500x350" class="card-img-top" alt="...">
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">Team Member</h5>
                    <div class="card-text text-black-50">Web Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {

      }
    },
    // computed: {
    //   userinfo() {
    //     return JSON.parse(sessionStorage.getItem("userinfo"))
    //   }
    // },
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
      }
    }
  }
</script>

<style>
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
#Button6{
  margin-left: 10px;
  font-size: 18px;
}
.text-center{
  margin-top: 5px;
}
.el-icon-switch-button{
  cursor: pointer;
  outline: 0;
  margin-top: 10px;
}
</style>
