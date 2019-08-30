<template>
  <div class="orderData">
    <ul class="dataList">
      <li class="" v-for="item in list" :key="item.id" v-if="list.length">
        <!--<div class="tsInfor">卖家已发货</div>-->
        <div class="goodsBox flex-box">
          <div class="right-img"><img :src="item.goods_logo" alt=""></div>
          <div class="right-text box-1">
            <div class="flex-box tpText">
              <h2 class="media_desc box-1">{{item.goods_title}}</h2>
              <span>￥<b>{{item.price_item}}</b></span>
            </div>
            <p>{{item.goods_spec}}</p>
            <p>数量：{{item.goods_number}}</p>
          </div>
        </div>
        <h6>共{{item.goods_number}}件商品 共计：<span>￥{{item.goods_number*item.price_item}}</span></h6>
        <div class="btn-ui">
          <router-link tag="a" :to="'/refund/apply?id='+item.id" class="offBtn"> 申请退款</router-link>
          <!--<a class="lookBtn"  @click="lookWl(item.express_company_title,item.express_send_no)">查看物流</a>-->
        </div>
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
      confirmClick(){
        this.$emit('changeCallcelOrder',true)
      }
    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .orderData{
    padding:0 30px;
    overflow: hidden;
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
          .left-check{
            .cube-checkbox{
              padding:0 10px;
            }
          }
          .right-img{
            margin-left:15px;
            width:170px;
            height:170px;
            margin-right:15px;
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

