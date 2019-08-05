import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    AuthorizedUrl: 'http://yj.svkeji.cn/author/index',
    staticImg: '/static/img/',
    defaultTitle: '首页',
    IMGPATH: 'http://youjia.svkeji.cn',
    isLoading: true,
    cartNum: localStorage.cartNum?localStorage.cartNum:0,//购物车数量
    // 存储token
    openId: localStorage.getItem('openId') ? localStorage.getItem('openId') : ''
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.openId = user.openId;
      localStorage.setItem('openId', user.openId);
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
