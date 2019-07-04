<template>
  <div class="MeCode">
    <div class="content">
      <h2 class="title">邀请好友得现金奖励 多邀多得</h2>
      <div class="infor">
        邀请好友扫描二维码。TA可获得首单专属优惠,
        你可获得订单实付金额得 <span>5%-8%</span> 作为奖励。
      </div>
      <div class="code">
        <h3>重庆有线优家商城</h3>
        <img src="../../assets/img/ewm.png" alt="">
      </div>
      <cube-button class="shareBtn">分享给好友</cube-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MeCode',
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
  .MeCode{
    width:100%;
    min-height:100vh;
    background-color:aliceblue;
    font-size:28px;
    .content{
      padding:0 60px;
      overflow: hidden;
      .title{
        margin-top:70px;
        margin-bottom:40px;
        font-size:36px;
        font-weight: bold;
      }
      .infor{
        line-height:1.6;
        text-align: left;
        span{
          color:red;
        }
      }
      .code{
        background-color:white;
        padding:15px;
        padding-top:0;
        margin-top:70px;
        h3{
          padding:30px 0;
          text-align: center;
          color:#f06664;
        }
        img{
          width:595px;
          height:595px;
        }
      }
      .shareBtn{
        background-color:#ff0207;
        margin:40px auto;
      }
    }
  }
</style>

