import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    staticImg: '/static/img/',
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      console.log(state,user.Authorization,999)
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    },
  },
  actions: {
    // changeMallInfo(ctx,data){
    //   ctx.commit("changeMallInfo",data)
    // }
  }
})
