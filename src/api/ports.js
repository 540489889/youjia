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
    collection: '/api/v1/collection', //商品收藏

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
  },
  me: {
    index: '/api/v1/member',//个人中心首页
    address: '/api/v1/address',//我的地址
  },
  integral: {
    index: '/api/v1/points',//积分首页
    loglist: '/api/v1/points/loglist',//积分明细
  }
}
