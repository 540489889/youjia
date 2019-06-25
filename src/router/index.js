import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let router = new Router({
  module: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/page/home/index'], resolve) ,
      meta:{index: 1, title: '首页', requireAuth: false}
    },
    //一级分类
    {
      path: '/sort/index',
      name: 'SortIndex',
      component: resolve => require(['@/page/sort/index'], resolve) ,
      meta:{index: 1, title: '分类', requireAuth: false}
    },
    //二级分类
    {
      path: '/sort/list',
      name: 'SortList',
      component: resolve => require(['@/page/sort/list'], resolve) ,
      meta:{index: 2, title: '分类', requireAuth: false}
    },
    //测试
    {
      path: '/sort/mb',
      name: 'Sortmb',
      component: resolve => require(['@/page/sort/mb'], resolve) ,
      meta:{index: 2, title: '分类', requireAuth: false}
    },
    //商品详情
    {
      path: '/goods/index',
      name: 'GoodsIndex',
      component: resolve => require(['@/page/goods/index'], resolve) ,
      meta:{index: 3, title: '详情', requireAuth: false}
    },
    {
      path: '/cart/index',
      name: 'CartIndex',
      component: resolve => require(['@/page/cart/index'], resolve) ,
      meta:{index: 1, title: '购物车', requireAuth: false}
    },
    {
      path: '/me/index',
      name: 'MeIndex',
      component: resolve => require(['@/page/me/index'], resolve) ,
      meta:{index: 1, title: '我的', requireAuth: false}
    },
    {
      path: '/address/index',
      name: 'AddressIndex',
      component: resolve => require(['@/page/address/index'], resolve) ,
      meta:{index: 1, title: '我的收货地址', requireAuth: false}
    },
    {
      path: '/address/add',
      name: 'AddressAdd',
      component: resolve => require(['@/page/address/add'], resolve) ,
      meta:{index: 1, title: '新增收货地址', requireAuth: false}
    }
  ],
  //回到顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
// 使用 router.beforeEach 注册一个全局前置守卫，
// 判断用户是否登陆
router.beforeEach((to, from, next) => {
  //重置title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  let path = to.path
  let token = localStorage.getItem('Authorization');
  console.log(token)
  // 判断该路由是否需要登录权限
  // if (to.matched.some(record => record.meta.requireAuth)){
  //   if(token!=0){
  //     next()
  //   }else{
  //     next({
  //       path: '/reg/login',
  //       query: {redirect: to.fullPath} // 将要跳转路由的path作为参数，传递到登录页面
  //     })
  //   }
  // }
  next()
})
export default router
