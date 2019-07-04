/*
 * 后台接口
 */
export default {
  //
  home: {
    index: '/api/v1/index',//首页
  },
  goods: {
    index: '/api/v1/goods',//商品详情
  },
  sort: {
    index: '/api/v1/nav',//首页
    list: '/api/v1/goods',//分类列表页
  },
  cart: {
    index: '/api/v1/cart',//购物车列表
  },
  order: {
    index: '/api/v1/order',//获取订单列表
    create: '/api/v1/order/create',//提交订单
  }
}
