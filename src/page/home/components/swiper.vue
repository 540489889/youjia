<template>
  <div class="swiperWrapper">
    <div class="swiperWd">
      <swiper :options="swiperOption" ref="mySwiper">
        <!--slide-->
        <swiper-slide>
          <a href="#">
            <img class="swiper-img" src="./../../../assets/img/banner1.png" alt="">
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#">
            <img class="swiper-img" src="./../../../assets/img/banner1.png" alt="">
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#">
            <img class="swiper-img" src="./../../../assets/img/banner1.png" alt="">
          </a>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="trust"></div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'HomeSwiper',
    data (){
      return {
        list: [],
        swiperOption: {
//          loop: true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
//          paginationClickable: true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            autoplay : {
              disableOnInteraction: false,
              delay:3000
            },
          },
        }
      }
    },
    methods: {

    },
    computed: {
      showSwiper () {
        return this.list.length
      },
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .swiperWrapper{
    background-color:white;
    overflow: hidden;
    .trust{
      width:509px;
      height:30px;
      background:url(./../../../assets/img/xr-ico.png) no-repeat center;
      background-size:100%;
      margin:10px auto;
    }
    .swiperWd{
      width:695px;
      margin:0 auto;
      margin-top:20px;
      .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
        bottom:30px;
      }
      .swiper-pagination-bullet-active{
        background-color:white;
      }
      .swiper-slide{
        margin:0 auto;
        a{
          display: block;
          .swiper-img{
            width:695px;
            height:350px;
          }
        }
      }
    }
  }
</style>

