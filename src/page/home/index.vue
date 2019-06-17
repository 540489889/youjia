<template>
  <div class="homeIndex">
    <home-search></home-search>
    <home-swiper></home-swiper>
    <nav-swiper></nav-swiper>
    <advert-swiper></advert-swiper>
  </div>
</template>
<script>
  import HomeSearch from './components/search.vue'
  import HomeSwiper from './components/swiper.vue'
  import NavSwiper from './components/navSwiper.vue'
  import AdvertSwiper from './components/advertSwiper.vue'
  export default {
    name: 'homeIndex',
    data() {
      return {

      }
    },
    components: {
      HomeSearch,
      HomeSwiper,
      NavSwiper,
      AdvertSwiper
    },
    methods: {

    },
    mounted (){
      console.log($('#test').html())
    }
  }
</script>
<style lang="less" scoped>
  .homeIndex{
    width:750px;
    height:1206px;
    background-color:aliceblue;
    font-size:26px;
    h1{
      background-color:white;
      height:100px;
      line-height:100px;
      text-align: center;
      font-size:32px;
    }
    h2{
      line-height:2;
    }
  }
</style>
