<template>
  <div class="resellerWrapper">
    <div class="title flex-box">
      <img src="../../assets/img/p2.png" alt="">
      <p>不吃萝卜的小可爱</p>
    </div>
    <ul class="resellerList">
      <li><cube-input v-model="name" placeholder="请填写姓名"></cube-input></li>
      <li><cube-input v-model="tell" placeholder="请填写电话"></cube-input></li>
      <li class="flex-box">
        <cube-input class="input-ui box-1"
                    placeholder="输入验证码"
                    v-model="inputCode">
        </cube-input>
        <cube-button
          class="codeBtn"
          :inline="true"
          :disabled="captchaDisable"
          @click=""
        >{{captchaLabel}}</cube-button>
      </li>
      <li>
        <cube-select
        v-model="value"
        :options="options">
      </cube-select>
      </li>
      <li>
        <a class="submitBtn">提交申请</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'mb',
    data (){
      return {
        name: '',
        tell: '',
        captchaLabel:"获取验证码",
        captchaDisable: false,
        inputCode: '',
        options: [2013, 2014, 2015, 2016, 2017, 2018],
        value: 2016
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
  .resellerWrapper{
    width:750px;
    height:1448px;
    background:url(../../assets/img/reseller-bg.png) no-repeat center;
    background-size:100%;
    position:relative;
    font-size:28px;
    .title{
      padding:30px;
      color:white;
      img{
        width:80px;
        height:80px;
        border-radius: 50%;
        margin-right:20px;
      }
    }
    .resellerList{
      position:absolute;
      top:580px;
      width:580px;
      left:85px;
      li{

        margin-bottom:40px;
        .cube-input{
          background:none;
          background-color:#eef4f8;
          border-radius: 10px;
          height:40px;
        }
        .cube-input:after{
          content: initial;
        }
        .codeBtn{
          margin-left:10px;
          background:#eef4f8;
          font-size:28px;
          box-sizing: initial;
          color:#c6c6c6;
          height:40px;
        }
        .cube-select{
          text-align: left;
          background:#eef4f8;
        }
        .cube-select:after{
          content: initial;
        }
        .submitBtn{
          display: block;
          height:80px;
          line-height:80px;
          background:#ff0207;
          color:white;
        }
      }
    }
  }
</style>

