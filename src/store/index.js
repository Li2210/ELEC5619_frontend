import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    token: '',
    userInfo:JSON.parse(sessionStorage.getItem('userInfo'))
      //username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user'||'[]')).username
  },
  mutations: {
    set_Token: (state, token) => {
      state.token = token
      localStorage.setItem("token", token)
    },
    set_UserInfo: (state, userInfo) =>{
      state.userInfo = userInfo
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
    },
    logout (state) {
      state.userInfo = []
      state.token = ''
      sessionStorage.setItem("userInfo", JSON.stringify(''))
      localStorage.setItem("token", '')
    }
  },
  getters: {
    getUserInfo: state => {
      return state.userInfo
    }
  }
})
