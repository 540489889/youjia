<template>
  <div class="MeCode">
    <my-loading v-if="$store.state.isLoading"></my-loading>
    <div class="content">
      <div class="header">
        <h2 class="title">邀请好友得现金奖励 多邀多得</h2>
        <div class="codeUser">
          <div class="topInfor flex-box">
            <img :src="list.headimg" alt="">
            <p class="media_title box-1">{{list.username}}</p>
          </div>
          <ul class="bmInfor flex-box">
            <li class="box-1">
              <h3 class="flex-box"><img src="../../assets/ico/code-i-1.png" alt=""> 电话</h3>
              <p>{{list.phone}}</p>
            </li>
            <li class="box-1">
              <h3 class="flex-box"><img src="../../assets/ico/code-i-2.png" alt=""> 部门</h3>
              <p>{{list.company}}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="code">
        <h3>重庆有线优家商城</h3>
        <img :src="$store.state.__IMG__+list.codeurl" alt="">
        <div class="infor">
          邀请好友扫描二维码。TA可获得首单专属优惠,
          你可获得订单实付金额得 <span>5%-8%</span> 作为奖励。
        </div>
      </div>
      <cube-button class="shareBtn" @click="shareClick('myPopup')">分享我的二维码</cube-button>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
    >
      <div class="popup_layer shareWrapper" @click="changeCloseShare" v-if="isShare">
        <img src="../../assets/ico/arrow.png" alt="">
        <h4>点击右上角分享给好友哟！</h4>
      </div>
    </transition>
    <cube-popup type="my-popup" ref="myPopup">
      <div class="fxContent">
        <i class="closeBtn" @click="closePopup('myPopup')"></i>
        <h2>长按图片保存图片呦！</h2>
        `<img :src="$store.state.__IMG__+fxImg" alt="">
      </div>
    </cube-popup>
  </div>
</template>
<script>
  export default {
    name: 'MeCode',
    data (){
      return {
        isShare: false,
        list: {},
        fxImg: ''
      }
    },
    methods: {
      //分享
      shareClick(refId){
//        this.isShare = true
        const component = this.$refs[refId]
        this.http.get(this.ports.me.qrcode, res =>{
          console.log(res)
          if(res.success){
            this.fxImg = res.data
            component.show()
          }else{
            this.showToastTxtOnly(res.msg)
          }
        })
      },
      closePopup(refId){
        const component = this.$refs[refId]
        component.hide()
      },
      //分享关闭
      changeCloseShare(){
//        this.isShare = false
      },
      showToastTxtOnly(text) {
        this.toast = this.$createToast({
          txt: text,
          type: 'txt'
        })
        this.toast.show()
      },
      getCodeData(){
        this.http.get(this.ports.me.fxcode, res =>{
          console.log(res,9999)
          this.$store.commit('changeLoading',false)
          if(res.success){
            let data = res.data
            this.list = data
          }else{
            this.showToastTxtOnly(res.msg)
          }
        })
      }
    },
    mounted (){
      this.getCodeData()
    }
  }
</script>
<style lang="less" scoped>
  .MeCode{
    width:100%;
    min-height:100vh;
    background-color:aliceblue;
    font-size:28px;
    .cube-popup{
      z-index: 599 !important;
    }
    .fxContent{
      z-index: 39;
      position:relative;
    }
    .fxContent h2{
      position:absolute;
      top:-150px;
      color:white;
      font-weight: bold;
      text-align: center;
      width:100%;
    }
    .fxContent .closeBtn{
      position:absolute;
      right:0;
      top:-160px;
      width:50px;
      height:50px;
      background:url(../../assets/ico/close-ico3.png) no-repeat center;
      background-size:100%;
      color:#ccc;
      font-size:45px;
      font-weight: bold;
    }
    .fxContent img{
      width:600px;
      height:800px;
      margin-top:-85px;
    }
    .shareWrapper{
      color:white;
      padding:30px;
      text-align: right;
      box-sizing: border-box;
      img{
        width:186px;
      }
      h4{
        text-align: center;
        line-height:2;
      }
    }
    .content{
      /*padding:0 60px;*/
      overflow: hidden;
      .header{
        width:750px;
        height:419px;
        background:url(./../../assets/ico/codet-bg.png) no-repeat center;
        background-size:100%;
        overflow: hidden;
        position:relative;
        .title{
          margin-top:60px;
          margin-bottom:40px;
          font-size:36px;
          font-weight: bold;
          color:white;
          text-align: center;
        }
        .codeUser{
          position:absolute;
          bottom:0;
          width:690px;
          height:280px;
          left:30px;
          background-color:white;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          padding:20px 30px;
          box-sizing: border-box;
          .topInfor{
            padding-bottom:30px;
            border-bottom:1px solid #eee;
            img{
              margin-right:20px;
              width:90px;
              height:90px;
              border-radius: 50%;
            }
            p{
              text-align: left;
            }
          }
          .bmInfor{
            li{
              padding:30px;
              text-align: left;
              position:relative;
              h3{
                color:#7f8593;
                img{
                  width:35px;
                  height:35px;
                  margin-right:15px;
                }
              }
              p{
                line-height:2;
              }
            }
            li:first-child:before{
              content: '';
              width:1px;
              height:50px;
              background-color:#eee;
              position:absolute;
              right:0;
              top:50%;
              transform: translateY(-50%);
            }
          }
        }
      }


      .code{
        background-color:white;
        padding:15px;
        padding-top:0;
        width:690px;
        box-sizing: border-box;
        margin:0 auto;
        margin-top:30px;
        .infor{
          line-height:1.6;
          text-align: left;
          padding:30px ;
          color:#7f8593;
          span{
            color:red;
          }
        }
        h3{
          padding:30px 0;
          text-align: center;
          color:#f06664;
        }
        img{
          width:500px;
          height:500px;
          margin:30px auto;
        }
      }
      .shareBtn{
        background-color:#ff0207;
        margin:40px auto;
        width:690px;
        height:100px;
        border-radius: 50px;
      }
    }
  }
</style>

