<template>
  <div class="swiperWrapper" v-if="showSwiper">
    <div class="swiperWd">
      <swiper :options="swiperOption" ref="mySwiper">
        <!--slide-->
        <swiper-slide v-for="item in banner" :key="item.sort">
          <a :href="item.url">
            <img class="swiper-img" :src="item.img" alt="">
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
    name: 'HomeSwiper',
    data (){
      return {
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
    props: {
      banner: Array
    },
    methods: {

    },
    computed: {
      showSwiper () {
        return this.banner.length
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

