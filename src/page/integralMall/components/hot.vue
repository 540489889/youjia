<template>
  <div class="hotWrapper">
    <h2 class="title">热门兑换</h2>
    <ul>
      <li class="flex-box">
        <div class="left">
          <img src="../../../assets/img/goods-b1.png" alt="">
        </div>
        <div class="right box-1">
          <h4 class="media_title">智能手表电话蓝牙手环</h4>
          <h5><span>限量500份</span></h5>
          <p>234人已领</p>
          <div class="integral flex-box">
            <div class="left-i"><span>675</span>积分</div>
            <div class="right-i">立即兑换</div>
          </div>
        </div>
      </li>
      <li class="flex-box">
        <div class="left">
          <img src="../../../assets/img/goods-b1.png" alt="">
        </div>
        <div class="right box-1">
          <h4 class="media_title">智能手表电话蓝牙手环</h4>
          <h5><span>限量500份</span></h5>
          <p>234人已领</p>
          <div class="integral flex-box">
            <div class="left-i"><span>675</span>积分</div>
            <div class="right-i">立即兑换</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'mb',
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
  .hotWrapper{
    padding:30px;
    .title{
      text-align: left;
      font-size:32px;
      font-weight: bold;
      margin-bottom:30px;
    }
    ul{
      li{
        align-items: flex-start;
        margin-bottom:30px;
        .left{
          width:260px;
          height:260px;
          border-radius: 10px;
          margin-right:20px;
          img{
            width:100%;
            height:100%;
            border-radius: 10px;
          }
        }
        .right{
          text-align: left;
          h4{
            font-size:30px;
            font-weight: bold;
          }
          h5{
            margin:40px auto;
            span{
              display: inline-block;
              border:1px solid #f54029;
              color:#f54029;
              text-align: center;
              padding:5px 5px;
              border-radius: 5px;
              font-size:22px;
            }
          }
          p{
            color:#cccccc;
            font-size:22px;
          }
          .integral{
            margin-top:20px;
            color:#f54029;
            justify-content: space-between;
            .left-i{
              font-size:22px;
              span{
                font-size:36px;
                font-weight: bold;
              }
            }
            .right-i{
              width: 150px;
              height:50px;
              line-height:50px;
              text-align: center;
              border-radius: 25px;
              color:#f54029;
              background-color:#ffebe8;
            }
          }
        }
      }
    }
  }
</style>

