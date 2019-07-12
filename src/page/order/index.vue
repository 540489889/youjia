<template>
  <div class="orderIndex">
    <cube-page type="sticky-view-scroll" title="Sticky">
      <template slot="content">
        <div class="listWrapper sticky-view-container">
          <cube-sticky :pos="scrollY">
            <cube-scroll
              :scroll-events="scrollEvents"
              @scroll="scrollHandler">
              <div style="height:1px;"></div>
              <cube-sticky-ele ele-key="123">
                <order-nav @changeNavClick="changeNavClick"></order-nav>
              </cube-sticky-ele>
              <order-data @deleteOrder="deleteOrder" :list="list" @changeCallcelOrder="confirmClick"></order-data>
            </cube-scroll>
          </cube-sticky>
          <!--<div v-if="!selected" class="mergePay">合并付款（已选2件）</div>-->
        </div>
      </template>
    </cube-page>
    <cube-page v-if="maskShow" type="swipe-scroll" title="Scroll">
      <template slot="content">
        <div class="scroll-list-wrap">
          <cube-scroll>
            <transition
              name="slide-fade"
            >
              <cancel-order
                v-if="selected"
                @changeDeleteOrder="changeDeleteOrder"
                @changeSelected="changeSelected"></cancel-order>
            </transition>
          </cube-scroll>
        </div>
      </template>
    </cube-page>
  </div>

</template>
<script>
  import CubePage from '../../components/cube-page.vue'
  import orderNav from './components/nav.vue'
  import orderData from './components/data.vue'
  import cancelOrder from './components/cancel.vue'
  export default {
    name: 'OrderIndex',
    data (){
      return {
        selected: false,
        maskShow: false,
        scrollEvents: ['scroll'],
        scrollY: 0,
        list: [],//列表数据
        toastTime:null,
      }
    },
    components: {
      orderNav,
      orderData,
      CubePage,
      cancelOrder
    },
    methods: {
      //删除订单
      deleteOrder(val){
        alert(val)
      },
      showToastTime() {
         this.toastTime = this.$createToast({
          time: 0,
          txt: '加载中...'
        })
        this.toastTime.show()
      },
      //nav切换
      changeNavClick(val){
        this.showToastTime()
        this.getOrderData(val)
      },
      showToastTxtOnly(text) {
        this.toast = this.$createToast({
          txt: text,
          type: 'txt'
        })
        this.toast.show()
      },
      getOrderData(val){
        let index = 0
        if(!val){
          let type = this.$route.query.type
          index = type
        }else{
          index = val
        }
        this.http.get(this.ports.order.index+'?type='+index, res =>{
          this.$store.commit('changeLoading',false)
          console.log(res)
          if(this.toastTime){
            this.toastTime.hide()
          }
          if(res.success){
            let data = res.data
            this.list = data.res
//            this.$store.commit('changeCartNum',this.cart)
          }else{
            this.showToastTxtOnly(res.msg)
          }
        })
      },
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
      scrollHandler({ y }) {
        this.scrollY = -y
      }
    },
    mounted (){
      this.getOrderData()
//      this.$store.commit('changeLoading',false)
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
  .listWrapper{
    font-size:28px;
    background-color:aliceblue;
    min-height:100vh;
    width:100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    .mergePay{
      height:100px;
      line-height:100px;
      text-align: center;
      color:white;
      position:fixed;
      bottom:0;
      left:0;
      width:100%;
      background-color:#ff0207;
      z-index: 19;
    }
  }
</style>

