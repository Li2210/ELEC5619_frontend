import Vue from 'vue'
import Router from 'vue-router'

import Index from "../components/home/Index";
import Login from "../components/Login";
import Register from "../components/Register";
import allMap from "../components/component/allMap";
import Timetable from "../components/Timetable";
import Feedback from "../components/Feedback";


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/map',
      name: 'Map',
      component: allMap
    },
    {
      path: '/timetable',
      name: 'Timetable',
      component: Timetable
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    }
  ]
})
