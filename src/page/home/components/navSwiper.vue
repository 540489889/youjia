<template>
  <div class="navSwiperWrapper">
    <div class="swiperWd">
      <swiper :options="swiperOption" ref="mySwiper">
        <!--slide-->
        <swiper-slide>
          <a href="#">
            <img class="swiper-img" src="./../../../assets/ico/sp-1.png" alt="">
            <h4>有限电视</h4>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#">
            <img class="swiper-img" src="./../../../assets/ico/sp-2.png" alt="">
            <h4>智慧商城</h4>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#">
            <img class="swiper-img" src="./../../../assets/ico/sp-3.png" alt="">
            <h4>生活服务</h4>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#">
            <img class="swiper-img" src="./../../../assets/ico/sp-4.png" alt="">
            <h4>旅行游玩</h4>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#">
            <img class="swiper-img" src="./../../../assets/ico/sp-5.png" alt="">
            <h4>分销赚钱</h4>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#">
            <img class="swiper-img" src="./../../../assets/ico/sp-1.png" alt="">
            <h4>有限电视</h4>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#">
            <img class="swiper-img" src="./../../../assets/ico/sp-2.png" alt="">
            <h4>智慧商城</h4>
          </a>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'NavSwiper',
    data (){
      return {
        list: [],
        swiperOption: {
//          loop: true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
//          paginationClickable: true,
          autoplay: false,
          slidesPerView: 5,
          spaceBetween: 10,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
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
  .navSwiperWrapper{
    background-color:white;
    font-size:28px;
    padding:40px 0;
    overflow: hidden;
    .swiperWd{
      .swiper-container{
        overflow: initial;
      }
      .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
        bottom:-30px;
      }
      .swiper-slide{
        margin:0 auto;
        a{
          display: block;
          color:black;
          .swiper-img{
            width:90px;
            height:90px;
            margin-bottom:20px;
          }
        }
      }
    }
  }
</style>

