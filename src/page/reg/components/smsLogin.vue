<template>
  <ul>
    <li> <cube-input v-model="inputTell" type="number" placeholder="输入手机号" :clearable="clearable"></cube-input></li>
    <li class="flex-box">
      <cube-input class="input-ui box-1"
                  placeholder="输入验证码"
                  v-model="inputCode">
      </cube-input>
      <cube-button
        class="btnStyle"
        :inline="true"
        :disabled="captchaDisable"
        @click="codeBtnAction"
      >{{captchaLabel}}</cube-button>
    </li>
    <li class="registerLi">
      <cube-button class="registerBtn" @click="accountsSign">确定</cube-button>
    </li>
  </ul>
</template>
<style lang="less" scoped>
  .content{
    h1{
      font-size:48px;
      font-weight: bold;
      margin:70px auto;
      text-align: left;
    }
    .cube-btn_disabled:after{
      content: initial;
      border:none;
    }
    .itBtn{
      padding:20px;
      justify-content: flex-end;
      margin-top:50px;
      a{
        margin-left:20px;
      }
    }
    ul{
      li{
        box-sizing: border-box;
        background-color:#eef4f8;
        margin-bottom:35px;
        border-radius: 40px;
        /*padding:0 10px;*/
        .cube-input{
          background:none;
          border:none;
          border-radius: 40px;
          outline:none;
          border:none;
        }
        .cube-input:after{
          content: initial;
        }
        .cube-btn-inline{
          background:none;
          color:#ff0207;
          border-left:1px solid white;
          padding:0 20px;
          font-size:14px;
          outline:none;
          /*border:none;*/
        }
        .registerBtn{
          background:#ff0207;
          border-radius: 50px;
          height:80px;
          line-height:80px;
          padding:0;
        }
      }
      .registerLi{
        background:none;
      }
    }
  }
</style>
<script>
  import { mapMutations } from 'vuex'
  import axios from 'axios'
  export default {
    name: 'accountsLogin',
    data () {
      return {
        type: 'password',
        readonly: true,
        autofocus: true,
        autocomplete: true,
        eye: {
          open: false,
          reverse: false
        },
        inputName: '',
        inputPwd: '',
        inputPwds: '',
        inputTell: '',
        inputCode: '',
        captchaLabel:"获取验证码",
        seconds:60,
        captchaDisable:false,
        timer:null,
        isLoading: false,
        name: '',
        password: '',
        clearable: {
          visible: true,
          blurHidden: false
        },
        options: [1, 2, 3, 4, 5, 6],
        value: '',
        title: '请选择单位部门',
        placeholder: '设置密码',
        autoPop: false,
        disabled: false
      }
    },
    methods:{
      showToastTxtOnly(text) {
        this.toast = this.$createToast({
          txt: text,
          type: 'txt'
        })
        this.toast.show()
      },
      //定义倒计时数据
      countdown () {
        if (this.seconds < 1) {
          this.captchaLabel = '获取验证码';
        } else {
          this.captchaDisable = true;
          this.seconds --;
          this.captchaLabel = this.seconds + '秒后重新获取'
        }
      },
      //获取验证码
      codeBtnAction () {
        let tellReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/;
        if(!tellReg.test(this.inputTell)){
          this.showToastTxtOnly('请填写正确的手机号!');
          return false
        }
        //发送请求
        this.getCode();
        //启动1s步长倒计时
        this.timer = setInterval(()=>{
          this.countdown()
          if(this.seconds === 0){
            this.captchaLabel = '重新获取';
            this.seconds = 60;
            this.captchaDisable = false;
            //停止倒计时
            clearTimeout(this.timer)
          }
        },1000);

      },
      getCode () {
        let _this =this
        this.http.get(this.ports.me.dxCode+'?phone='+this.inputTell,res=>{
          console.log(res)
          if(res.success){

          }else{
            this.showToastTxtOnly(res.msg)
          }
        })
      },
      //显示密码
      showPwd (){
        if(this.visible === 'password'){
          this.visible = 'text'
        }else{
          this.visible = 'password'
        }
      },
      //确定
      accountsSign(){
        let tellReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/;
        if(!tellReg.test(this.inputTell)){
          this.showToastTxtOnly('请填写正确的手机号!');
          return false
        }
//        let pwdReg=/^[a-zA-Z0-9]{4,10}$/;
        if (!this.inputCode) {
          this.showToastTxtOnly('请填写正确的验证码!');
          return false
        }
        this.subAccountsSign()
      },
      subAccountsSign(){
        this.http.get(this.ports.me.bindTell+'?phone='+this.inputTell+'&'+'code='+this.inputCode,res=>{
          console.log(res)
          if(res.success){
            this.$router.push({path:'/me/index'})
          }else{
            this.showToastTxtOnly(res.msg)
          }
        })
      }
    }
  }
</script>
