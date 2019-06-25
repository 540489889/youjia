<template>
  <div class="homeIndex">
    <home-search></home-search>
    <home-swiper></home-swiper>
    <nav-swiper></nav-swiper>
    <advert-swiper></advert-swiper>
    <home-list></home-list>
  </div>
</template>
<script>
  import HomeSearch from '../../components/search.vue'
  import HomeSwiper from './components/swiper.vue'
  import NavSwiper from './components/navSwiper.vue'
  import AdvertSwiper from './components/advertSwiper.vue'
  import HomeList from './components/list.vue'
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
      AdvertSwiper,
      HomeList
    },
    methods: {

    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .homeIndex{
    width:750px;
    min-height:100vh;
    background-color:aliceblue;
    font-size:26px;
    padding-bottom:100px;
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
