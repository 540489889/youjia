<template>
  <div class="orderData">
    <ul class="dataList">
      <li  class="" v-for="(item,index) in list" :key="item.id">
        <!--{{item}}-->
        <template v-if="item.childOrder">
          <div class="tsInfor">等待买家付款</div>
          <router-link tag="div" :to="'/order/details?id='+it.id" class="goodsBox flex-box"  v-for="it in item.childOrder" :key="it.id">
            <!--<div class="left-check">-->
            <!--<cube-checkbox v-model="checked" :option="option"></cube-checkbox>-->
            <!--</div>-->
            <div class="right-img"><img :src="it.goods_logo" alt=""></div>
            <div class="right-text box-1">
              <div class="flex-box tpText">
                <h2 class="media_desc box-1">{{it.goods_title}}</h2>
                <span>￥<b>{{it.price_real}}</b></span>
              </div>
              <p>{{it.goods_spec}}</p>
              <p>数量：{{it.number_goods}}</p>
            </div>
          </router-link>
          <h6>共{{item.childOrder.length}}件商品 共计：<span>￥{{item.price_goods}}</span></h6>
          <div class="btn-ui" v-if="type==2">
            <a class="offBtn" @click="confirmClick(item.id,index)"> 取消订单</a>
            <a class="payBtn" @click="payClick(item.id,index)"> 立即付款</a>
          </div>
        </template>
        <template v-else>
          <div class="tsInfor" v-if="type==3">等待卖家发货</div>
          <div class="tsInfor" v-if="type==4">等待买家收货</div>
          <router-link tag="div" :to="'/order/details?id='+item.id" class="goodsBox flex-box">
          <!--<div class="goodsBox flex-box" >-->
            <!--<div class="left-check">-->
            <!--<cube-checkbox v-model="checked" :option="option"></cube-checkbox>-->
            <!--</div>-->
            <div class="right-img"><img :src="item.goods_logo" alt=""></div>
            <div class="right-text box-1">
              <div class="flex-box tpText">
                <h2 class="media_desc box-1">{{item.goods_title}}</h2>
                <span>￥<b>{{item.price_real}}</b></span>
              </div>
              <p>{{item.goods_spec}}</p>
              <p>数量：{{item.number_goods}}</p>
            </div>
          <!--</div>-->
          </router-link>
          <div class="btn-ui" v-if="type==3">
            <router-link v-if="item.refund_status==0" tag="a" :to="'/refund/apply?id='+item.id" class="offBtn"> 申请退款</router-link>
            <a class="offBtn shSty" v-if="item.refund_status==1"> 售后处理中</a>
            <a class="offBtn shSty" v-if="item.refund_status==2"> 售后已完成</a>
            <a class="offBtn shSty" v-if="item.refund_status==3"> 审核未通过</a>
          </div>
          <div class="btn-ui" v-if="type==4">
            <router-link tag="a" v-if="item.refund_status==0" :to="'/refund/apply?id='+item.id" class="offBtn"> 申请退款</router-link>
            <a class="offBtn shSty" v-if="item.refund_status==1"> 售后处理中</a>
            <a class="offBtn shSty" v-if="item.refund_status==2"> 售后已完成</a>
            <a class="offBtn shSty" v-if="item.refund_status==3"> 审核未通过</a>
            <a class="offBtn" @click="lookWl(item.express_company_title,item.express_send_no)"> 查看物流</a>
            <a @click="confirmOrder(item.id,index)" class="offBtn"> 确认收货</a>
          </div>
          <div class="btn-ui" v-if="type==5">
            <router-link v-if="" tag="a" v-if="item.refund_status==0" :to="'/refund/apply?id='+item.id" class="offBtn"> 申请退款</router-link>
            <a class="offBtn shSty" v-if="item.refund_status==1"> 售后处理中</a>
            <a class="offBtn shSty" v-if="item.refund_status==2"> 售后已完成</a>
            <a class="offBtn shSty" v-if="item.refund_status==3"> 审核未通过</a>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'OrderData',
    data (){
      return {
        checked: false,
        option: {
          label: '',
          value: '0',
          disabled: false
        }
      }
    },
    props: {
      list: Array,
      type: Number
    },
    methods: {
      //查看物流
      lookWl(title,send){
        this.$createDialog({
          type: 'alert',
          title: '物流信息',
          content: '<p style="line-height:2;">快递公司：'+title+'</p>'+'<p style="line-height:2;">快递单号：'+send+'</p>',
          icon: ''
        }).show()
      },
      //去付款
      payClick(id,index){
        this.$emit('changePayClick',id,index)
      },
      //取消
      confirmClick(id,index){
        console.log(id)
        this.$emit('deleteOrder',id,index)
      },
      //确认收货
      confirmOrder(id,index){
        this.$emit('confirmGoodsOrder',id,index)
      }
    },
    mounted (){
    }
  }
</script>
<style lang="less" scoped>
  .shSty{
    border:none !important;
  }
  .my-content{
    line-height:3;
  }
  .orderData{
    padding:0 30px;
    overflow: hidden;
    /*padding-bottom:100px;*/
    /*position:relative;*/
    .dataList{
      li{
        background-color:white;
        margin:20px 0;
        border-radius: 10px;
        padding:30px 0;
        padding-right:30px;
        padding-top:10px;
        position:relative;
        .tsInfor{
          text-align: left;
          font-size:24px;
          color:#ff0207;
          padding:15px;
        }
        .goodsBox{
          margin-top:20px;
          .left-check{
            .cube-checkbox{
              padding:0 10px;
            }
          }
          .right-img{
            width:170px;
            height:170px;
            margin-right:15px;
            margin-left:15px;
            img{
              width:100%;
              height:100%;
              border-radius: 10px;
            }
          }
          .right-text{
            text-align: left;
            .tpText{
              align-items: flex-start;
              span{
                color:#ff0207;
                b{
                  font-size:36px;
                  font-weight: bold;
                }
              }
            }
            p{
              color:#7f8593;
              font-size:24px;
              line-height: 2;
            }
          }
        }
        .goodsBox:first-child{
          margin-top:0;
        }
        h6{
          text-align: right;
          line-height:2;
          color:#7f8593;
          font-size:24px;
          span{
            color:black;
            font-size:28px;
          }
        }
        .btn-ui{
          text-align: right;
          margin-top:15px;
          a{
            display: inline-block;
            width:150px;
            height:50px;
            line-height:50px;
            text-align: center;
            border:1px solid #aaa;
            border-radius: 25px;
            font-size:26px;
            margin-left:10px;
          }
          .payBtn{
            color:#ff0207;
            border:1px solid #ff0207;
          }
        }
      }
    }
  }
</style>

