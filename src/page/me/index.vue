<template>
  <div class="meIndex">
    <div class="title flex-box">
      <div class="set-up flex-box">
        <i class="cubeic-setting"></i>
        设置
      </div>
      <div class="left">
        <img src="./../../assets/ico/mb-tx.png" alt="">
      </div>
      <div class="right">
        <h4 class="media_title">不吃白萝卜的兔子</h4>
        <p class="flex-box">ID：335696 <span>优家会员</span></p>
      </div>
    </div>
    <div class="content">
      <div class="mb-list-1 mb-list">
        <h2 class="flex-box list-title">
          我的订单
          <span class="flex-box">全部订单 <i class="cubeic-arrow"></i></span>
        </h2>
        <ul class="flex-box">
          <li class="box-1">
            <a>
              <img src="./../../assets/ico/mb-l1.png" alt="">
              <h4>待付款</h4>
            </a>
          </li>
          <li class="box-1">
            <a>
              <img src="./../../assets/ico/mb-l2.png" alt="">
              <h4>待发货</h4>
            </a>
          </li>
          <li class="box-1">
            <a>
              <img src="./../../assets/ico/mb-l3.png" alt="">
              <h4>待收货</h4>
            </a>
          </li>
          <li class="box-1">
            <a>
              <img src="./../../assets/ico/mb-l4.png" alt="">
              <h4>已完成</h4>
            </a>
          </li>
        </ul>
      </div>
      <div class="mb-list-2 mb-list">
        <h2 class="flex-box list-title">
          分销中心
          <!--<span class="flex-box">全部订单 <i class="cubeic-arrow"></i></span>-->
        </h2>
        <ul class="flex-box">
          <li class="box-1">
            <a>
              <img src="./../../assets/ico/mb-a1.png" alt="">
              <h4>佣金资产</h4>
            </a>
          </li>
          <li class="box-1">
            <a>
              <img src="./../../assets/ico/mb-a2.png" alt="">
              <h4>推广码</h4>
            </a>
          </li>
          <li class="box-1">
            <a>
              <img src="./../../assets/ico/mb-a3.png" alt="">
              <h4>我的团队</h4>
            </a>
          </li>
          <li class="box-1">
            <a>
              <img src="./../../assets/ico/mb-a4.png" alt="">
              <h4>成为分销商</h4>
            </a>
          </li>
        </ul>
      </div>
      <div class="mb-list-3 mb-list">
        <h2 class="flex-box list-title">
          其他工具
          <!--<span class="flex-box">全部订单 <i class="cubeic-arrow"></i></span>-->
        </h2>
        <ol>
          <li>
            <a class="flex-box">
              <img src="./../../assets/ico/mb-b1.png" alt="">
              <h4 class="flex-box box-1"><p class="box-1 media_title">我的商品收藏</p> <i class="cubeic-arrow"></i></h4>
            </a>
          </li>
          <li>
            <a class="flex-box">
              <img src="./../../assets/ico/mb-b2.png" alt="">
              <h4 class="flex-box box-1"><p class="box-1 media_title">售后/退款</p> <i class="cubeic-arrow"></i></h4>
            </a>
          </li>
          <li>
            <router-link tag="a" to="/address/index" class="flex-box">
              <img src="./../../assets/ico/mb-b3.png" alt="">
              <h4 class="flex-box box-1"><p class="box-1 media_title">收货地址</p> <i class="cubeic-arrow"></i></h4>
            </router-link>
          </li>
          <li>
            <a class="flex-box">
              <img src="./../../assets/ico/mb-b4.png" alt="">
              <h4 class="flex-box box-1"><p class="box-1 media_title">官方客服</p> <i class="cubeic-arrow"></i></h4>
            </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MeIndex',
    data (){
      return {

      }
    },
    methods: {

    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .meIndex{
    width:100%;
    min-height:100vh;
    background-color:aliceblue;
    font-size:28px;
    padding-bottom:120px;
    .title{
      width:750px;
      height:250px;
      background:url(./../../assets/ico/mb-t-bg.png) no-repeat center;
      background-size:100%;
      box-sizing: border-box;
      padding:20px 25px;
      color:white;
      position:relative;
      .set-up{
        position:absolute;
        right:20px;
        top:20px;
        i{
          margin-right:5px;
          font-size:30px;
        }
      }
      .left{
        margin-right:20px;
        img{
          width:136px;
          height:136px;
          border-radius: 50%;
        }
      }
      .right{
        text-align: left;
        h4{
          font-size:32px;
          font-weight: bold;
          line-height:2;
        }
        p{
          span{
            width:115px;
            height:32px;
            background:url(./../../assets/ico/hy-t-bg.png) no-repeat center;
            background-size:100%;
            font-size:24px;
            margin-left:10px;
            line-height:32px;
            text-align: center;
          }
        }
      }
    }
    .content{
      padding:30px;
      .mb-list{
        margin-bottom:30px;
        padding:25px 15px;
        border-radius: 10px;
        background-color:white;
        .list-title{
          font-size:32px;
          font-weight: bold;
          justify-content: space-between;
          padding-top:10px;
          span{
            font-size:22px;
            color:#ccc;
            i{
              font-size:28px;
            }
          }
        }
        ul{
          margin-top:30px;
          li{
            a{
              display: block;
              color:black;
              text-align: center;
              h4{
                line-height:1.8;
              }
            }
          }
        }
      }
      .mb-list-1{
        ul{
          li{
            a{
              img{
                width:70px;
                height:60px;
              }
            }
          }
        }
      }
      .mb-list-2{
        ul{
          li{
            a{
              img{
                width:70px;
                height:70px;
              }
            }
          }
        }
      }
      .mb-list-3{
        ol{
          margin-top:20px;
          li{
            a{
              padding:15px 0;
              img{
                width:50px;
                height:50px;
                margin-right:10px;
              }
              h4{
                p{
                  text-align: left;
                  margin-right:10px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
