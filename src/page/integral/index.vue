<template>
  <div class="integralIndex">
    <div class="title">
      <div class="left">
        <i class="member-1"></i>
        <p>还需1200积分升级</p>
      </div>
      <div class="right">明细</div>
      <h2>1288</h2>
      <a class="signBtn">立即签到</a>
      <p>每日签到可获得积分奖励哦！</p>
    </div>
    <div class="content">
      <h1>赚取积分</h1>
      <ul>
        <li class="flex-box">
          <i class="i-ico-1"></i>
          <div class="box-1 text">
            <h4>商城购物获得积分</h4>
            <p>下单成功会获得一定积分奖励</p>
          </div>
          <div class="btn">去赚积分</div>
        </li>
        <li class="flex-box">
          <i class="i-ico-2"></i>
          <div class="box-1 text">
            <h4>分享好友得积分</h4>
            <p>分享商城或商品给好友可获得积分</p>
          </div>
          <div class="btn">去赚积分</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'integralIndex',
    data (){
      return {

      }
    },
    methods: {

    },
    mounted (){
      this.$store.commit('changeLoading',false)
    }
  }
</script>
<style lang="less" scoped>
  .integralIndex{
    width:100%;
    min-height:100vh;
    background-color:#fff;
    font-size:28px;
    .title{
      width:750px;
      height:350px;
      background:url(../../assets/ico/integral-t-bg.png) no-repeat center;
      background-size:100%;
      text-align: center;
      color:white;
      position:relative;
      h2{
        font-size:60px;
        font-weight: bold;
        line-height:3;
      }
      .signBtn{
        display: block;
        width:260px;
        height:90px;
        line-height:90px;
        text-align: center;
        margin:30px auto;
        background-color:#fff4f3;
        color:#ee5758;
        border-radius: 45px;
        margin-top:0;
      }
      .left{
        position:absolute;
        top:20px;
        left:20px;
        p{
          font-size:22px;
          line-height:1.8;
        }
        i{
          width:178px;
          height:54px;
          display: block;
        }
        .member-1{
          background:url(../../assets/ico/mb-bz-1.png) no-repeat center;
          background-size:100%;
        }
        .member-2{
          background:url(../../assets/ico/mb-bz-2.png) no-repeat center;
          background-size:100%;
        }
        .member-3{
          background:url(../../assets/ico/mb-bz-3.png) no-repeat center;
          background-size:100%;
        }
        .member-4{
          background:url(../../assets/ico/mb-bz-4.png) no-repeat center;
          background-size:100%;
        }
        .member-5{
          background:url(../../assets/ico/mb-bz-5.png) no-repeat center;
          background-size:100%;
        }
      }
      .right{
        position:absolute;
        right:20px;
        top:20px;
        border:1px solid white;
        color:white;
        text-align: center;
        padding:10px 20px;
        border-radius: 30px;
      }
    }
    .content{
      padding:30px;
      h1{
        font-size:32px;
        font-weight: bold;
        text-align: left;
      }
      ul{
        li{
          padding:30px 0;
          border-bottom:1px solid #eee;
          i{
            width:64px;
            height:64px;
          }
          .i-ico-1{
            background:url(../../assets/ico/i-ico-1.png) no-repeat center;
            background-size:100%;
          }
          .i-ico-2{
            background:url(../../assets/ico/i-ico-2.png) no-repeat center;
            background-size:100%;
          }
          .text{
            text-align: left;
            margin-left:20px;
            h4{line-height:2;}
            p{
              color:#bfbfbf;
              font-size:24px;
              line-height:2;
            }
          }
          .btn{
            width:130px;
            height:50px;
            line-height:50px;
            text-align: center;
            color:white;
            background-color:#f7cb9b;
            border-radius: 25px;
            font-size:24px;
          }
        }
        li:last-child{
          border:none;
        }
      }
    }
  }
</style>

