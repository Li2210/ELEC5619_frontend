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
        <el-menu-item id="Button6" index="/userManage">USER MANAGEMENT</el-menu-item>
        <i class="el-icon-switch-button" v-on:click="logout" style="float: right;font-size: 20px;color: burlywood; padding: 10px"></i>
      </el-menu>
    </div>

    <div id="timetable">
      <el-calendar v-model="timeValue" id="timetable-calendar">
        <template slot="dateCell"
                  slot-scope="{date, data}">
          <div :class="data.isSelected ? 'is-selected' : ''" @click="calClick(data)">
            <p class="addBtn" v-show="data.isSelected === true" @click="dialogVisible = true">Add Events</p>
          </div>
          <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>

          <div v-for="item in calendarData">
            <div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!==-1">
              <div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!==-1">
                <el-tooltip class="item" effect="dark" :content="item.things" placement="right">
                  <div class="is-selected">{{item.things}}</div>
                </el-tooltip>
              </div>
            </div>
          </div>
        </template>
      </el-calendar>
    </div>

    <div id="addEvents" :model="formData">
      <el-dialog
        :title="formData.data"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-form @submit.native.prevent>
          <el-form-item label="Date">
            <el-input v-model="formData.events"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false;addEvents()">Yes</el-button>
            </span>
      </el-dialog>
    </div>

  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: "Timetable",
  data() {
    return {
      formData:{
        data:'',
        events:''
      },
      calendarData:[
       // months: '',
       // days:'',
        //things: ''
        {months:[''], days:[''], things:''}

      ],
      timeValue: new Date(),
      dialogVisible: false,
    }
  },
  mounted() {
    this.getUserTimetable();
  },
  methods: {
    getUserTimetable(){
      const user = JSON.parse(sessionStorage.getItem("userInfo"))
      console.log(user)
      const id = user.id
      console.log(id)
      this.$axios
      .get(`/getTimetable/${user.id}`)
      .then(successResponse => {
        console.log(successResponse.data);
        for (var i=0; i<successResponse.data.length; i++){
          let time = successResponse.data[i].time
          let things = successResponse.data[i].things
          console.log(time)
          console.log(things)
          let month = time.split("-")[1].toString()
          let date = time.split("-")[2].toString()
          //console.log(time.split("-")[1].toString())
          //console.log(time.split("-")[2].toString())
          var event = {
            months: month,
            days: date,
            things: things
          }
          this.calendarData.push(event)
        }
      })
    },
    addEvents(){
      this.$axios
      .post("/addEvents", qs.stringify({
        //const user = JSON.parse(sessionStorage.getItem("userInfo"))
        //const id = user.id
        user_id: this.getUserId(),
        date: this.formData.data,
        things: this.formData.events
      }))
      .then(successResponse => {

        console.log(successResponse.data);
        console.log(this.formData.data)
        location.reload()
      })
    },
    handleClose(done){
      done()
    },
    calClick(item){
      console.log(item)
      this.formData.data = item.day
    },
    getUserId(){
      const user = JSON.parse(sessionStorage.getItem("userInfo"))
      const id = user.id
      console.log("this get user id")
      console.log(id)
      return id
    },
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
#Button6{
  margin-left: 10px;
  font-size: 18px;
}
.el-icon-switch-button{
  cursor: pointer;
  outline: 0;
  margin-top: 10px;
}
</style>
