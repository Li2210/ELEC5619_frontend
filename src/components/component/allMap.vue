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

    <div id="allMap">
    </div>
  </div>
</template>

<script>
import google from "google";

export default {
  name: "Map",
  data() {
    return {
      map: null,
      lat:-33.888468,
      lng:151.187323
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap:function () {
      this.map = new google.maps.Map(document.getElementById("allMap"),{
        center: {lat: this.lat, lng: this.lng},
        zoom: 13,
        maxZoom: 20,
        minZoom: 7,
        streetViewControl: false,
        mapTypeControl: false,
      });

      let infoWindow = new google.maps.InfoWindow;
      this.$axios
        .get('/loadAllUser')
        .then(successResponse => {
          console.log(successResponse.data);
            console.log("before")
            this.setMarker(successResponse, infoWindow)
            this.setCompanyMarker()
            console.log("after")
        })
        .catch(failResponse => {

        })
    },
    setMarker:function (successResponse, infoWindow) {
      for (var i=0; i < successResponse.data.length; i++){
        let contentString =
          `<div id="iw-container">`+
          '<div class="iw-title">' + successResponse.data[i].username + '</div>' +
          '<div class="iw-content">' +
          `<p class="phoneNumber">` + successResponse.data[i].phoneNumber + `</p>`+
          '</div></div>';

        let marker = new google.maps.Marker({
          position: {lat:parseFloat(successResponse.data[i].address.split(",")[0]), lng:parseFloat(successResponse.data[i].address.split(",")[1])},
          map: this.map,
          info:contentString
        });

        google.maps.event.addListener(marker, "click", function (){
          infoWindow.setContent(this.info)
          infoWindow.open(this.map, this)
        });
      }
    },
    setCompanyMarker:function (){
      let marker1 = new google.maps.Marker({
        position: {lat:-33.888468, lng:151.187323},
        map: this.map,
        label: "Company"
      })
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
    },
  }
}
</script>


<style scoped>
body{
  margin: 0;
  position: fixed;
}
#page{
  margin: 0;
}
#allMap{
  width: 100%;
  height: 800px;
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
