<template>
  <div class="mallIndex">
    <goods-swiper :banner="banner"></goods-swiper>
    <hot-data></hot-data>
    <thing-data></thing-data>
  </div>
</template>
<script>
  import thingData from './components/thing.vue'
  import hotData from './components/hot.vue'
  import goodsSwiper from '../../components/swiper.vue'
  export default {
    name: 'mallIndex',
    data (){
      return {
        banner: []
      }
    },
    components: {
      goodsSwiper,
      hotData,
      thingData
    },
    methods: {

    },
    mounted (){
      this.$store.commit('changeLoading',false)
    }
  }
</script>
<style lang="less" scoped>
  .mallIndex{
    font-size:28px;
    min-height:100vh;
    background-color:white;
    position:relative;
  }
</style>

