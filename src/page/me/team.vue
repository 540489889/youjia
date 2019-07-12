<template>
  <div class="teamWrapper">
    <div class="title flex-box">
      <b class="text">团队成员</b>
      共 <span>128</span> 人
    </div>
    <div class="content">
      <h2>团队成员列表</h2>
      <ul>
        <li class="flex-box">
          <div class="left flex-box box-1">
            <img src="../../assets/img/goods-b1.png" alt="">
            <div class="infor">
              <h4 class="media_title">一个可爱的昵称</h4>
              <p>手机：18375875809</p>
            </div>
          </div>
          <div class="right">
            <h5>级别：一级</h5>
            <p>加入时间：2019-05-18</p>
          </div>
        </li>
        <li class="flex-box">
          <div class="left flex-box box-1">
            <img src="../../assets/img/goods-b1.png" alt="">
            <div class="infor">
              <h4 class="media_title">一个可爱的昵称</h4>
              <p>手机：18375875809</p>
            </div>
          </div>
          <div class="right">
            <h5>级别：一级</h5>
            <p>加入时间：2019-05-18</p>
          </div>
        </li>
        <li class="flex-box">
          <div class="left flex-box box-1">
            <img src="../../assets/img/goods-b1.png" alt="">
            <div class="infor">
              <h4 class="media_title">一个可爱的昵称</h4>
              <p>手机：18375875809</p>
            </div>
          </div>
          <div class="right">
            <h5>级别：一级</h5>
            <p>加入时间：2019-05-18</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MeTeam',
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
  .teamWrapper{
    width:100%;
    min-height:100vh;
    background-color:white;
    font-size:28px;
    .title{
      width:100%;
      height:200px;
      background-color:#1499ff;
      text-align: center;
      position:relative;
      color:white;
      justify-content: center;
      .text{
        position:absolute;
        left:30px;
        top:30px;
      }
      span{
        font-size:60px;
        font-weight: bold;
      }
    }
    .content{
      text-align: left;
      padding:30px;
      h2{
        padding-bottom:30px;
        border-bottom:1px solid #eee;
        font-size:30px;
      }
      ul{
        li{
          padding:30px 0;
          border-bottom:1px solid #eee;
          .left{
            margin-right:20px;
            img{
              width:80px;
              height:80px;
              border-radius: 100%;
              margin-right:20px;
            }
            .infor{
              p{
                color:#7f8593;
                font-size:22px;
                line-height:2;
              }
            }
          }
          .right{
            text-align: right;
            h5{
              color:#ff0207;
            }
            p{
              color:#7f8593;
              font-size:22px;
              line-height:2;
            }
          }
        }
        li:last-child{
          border:none;
        }
      }
    }
  }
</style>

