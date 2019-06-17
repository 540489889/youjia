import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    staticImg: '/static/img/',
    defaultTitle: '首页',
    IMGPATH: '',
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    },
    //导航
    changeTitle (state, title){
      state.defaultTitle = title
    },
  },
  actions: {
    // changeMallInfo(ctx,data){
    //   ctx.commit("changeMallInfo",data)
    // }
  }
})
