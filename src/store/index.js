import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    staticImg: '/static/img/',
    defaultTitle: '首页',
    IMGPATH: '',
    isLoading: true,
    cartNum: localStorage.cartNum?localStorage.cartNum:0,//购物车数量
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
    //ajax 请求状态管理
    changeLoading (state, val){
      state.isLoading = val
    },
    //购物车数量监听
    changeCartNum (state, val){
      localStorage.cartNum = val
      state.cartNum = localStorage.cartNum
    }
  },
  actions: {
    // changeMallInfo(ctx,data){
    //   ctx.commit("changeMallInfo",data)
    // }
  }
})
