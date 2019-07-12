<template>
  <div class="refundApply">
    <div class="infor">
      <h4>温馨提示：</h4>
      <ul>
        <li>1.订单一旦取消无法恢复，需重新下单。</li>
        <li>2.退款商品，快递上门自取。</li>
        <li>3.退款金额在1-3个工作日自动返还支付账户。</li>
      </ul>
    </div>
    <div class="list">
      <ul>
        <li class="flex-box"><span>退款原因：</span> <div @click="confirmClick" class="box-1 flex-box"><p class="box-1">请选择退款原因</p> <i class="cubeic-pulldown"></i></div></li>
        <li class="flex-box"><span>退款联系人：</span> 罩得住</li>
        <li class="flex-box"><span>联系方式：</span> 188****1234</li>
      </ul>
      <a class="okBtn">确定</a>
    </div>
    <cube-page v-if="maskShow" type="swipe-scroll" title="Scroll">
      <template slot="content">
        <div class="scroll-list-wrap">
          <cube-scroll>
            <transition
              name="slide-fade"
            >
              <refumd-reaspm
                v-if="selected"
                @changeDeleteOrder="changeDeleteOrder"
                @changeSelected="changeSelected"></refumd-reaspm>
            </transition>
          </cube-scroll>
        </div>
      </template>
    </cube-page>
  </div>
</template>
<script>
  import CubePage from '../../components/cube-page.vue'
  import refumdReaspm from './components/reason.vue'
  export default {
    name: 'refundApply',
    data (){
      return {
        selected: false,
        maskShow: false,
        scrollEvents: ['scroll'],
        scrollY: 0,
      }
    },
    components: {
      CubePage,
      refumdReaspm
    },
    methods: {
      confirmClick(val){
        const that = this
        this.maskShow = true
        setTimeout( ()=>{
          that.selected = true
        },200)
      },
      changeSelected(val){
        this.selected = val
        const that = this
        if(!this.selected){
          setTimeout( ()=>{
            that.maskShow = false
          },300)
        }
      },
      changeDeleteOrder(val){
        alert(val)
        this.changeSelected(false)
      },
    },
    mounted (){
      this.$store.commit('changeLoading',false)
    }
  }
</script>
<style lang="less" scoped>
  .slide-fade-enter-active {
    transition: all .6s ease;
  }
  .slide-fade-leave-active {
    transition: all .6s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(700px);
    opacity: 0;
  }
  .scroll-list-wrap{
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    z-index: 200;
    background:rgba(0,0,0,0.6);
    /*background:#000\9;!*CSS Hack,只能对ie9以下浏览器ie6,ie7,ie8有效，否侧ie10,FF,Cherome会失去透明效果*!*/
    filter:Alpha(opacity=60);/*只对ie7,ie8有效*/
  }
  .refundApply{
    width:100%;
    min-height:100vh;
    background-color:white;
    font-size:28px;
    padding:30px;
    box-sizing: border-box;
    .infor{
      background-color:aliceblue;
      border-radius: 10px;
      text-align: left;
      padding:20px;
      h4{
        line-height:2;
      }
      ul{
        li{
          line-height:1.8;
          color:#7f8593;
        }
      }
    }
    .list{
      margin-top:40px;
      .okBtn{
        display: block;
        width:100%;
        height:80px;
        line-height:80px;
        border-radius: 40px;
        background-color:#ff1e29;
        color:white;
        text-align: center;
        font-size:30px;
        margin-top:50px;
      }
      ul{
        li{
          padding:30px 0;
          border-bottom:1px solid #eee;
          span{
            width:170px;
            text-align: left;
          }
          p{
            text-align: left;
            color:#7f8593;
          }
          i{
            font-size:40px;
            font-weight: bold;
            color:#7f8593;
          }
        }
        li:last-child{
          border:none;
        }
      }
    }
  }
</style>

