<template>
  <div class="orderData">
    <ul class="dataList">
      <li class="">
        <div class="tsInfor">卖家已发货</div>
        <div class="goodsBox flex-box">
          <div class="right-img"><img src="../../../assets/img/sort1.png" alt=""></div>
          <div class="right-text box-1">
            <div class="flex-box tpText">
              <h2 class="media_desc box-1">青藏高原正宗土鸡蛋/5斤青藏高原正宗土鸡蛋5斤青藏高原正宗土鸡蛋</h2>
              <span>￥<b>56</b></span>
            </div>
            <p>盒装/土鸡蛋/5斤/约30个</p>
            <p>数量：1</p>
          </div>
        </div>
        <h6>共一件商品 共计：<span>￥56.0</span></h6>
        <div class="btn-ui">
          <router-link tag="a" to="/refund/apply" class="offBtn"> 申请退款</router-link>
          <a class="lookBtn">查看物流</a>
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
    methods: {
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

