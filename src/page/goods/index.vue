<template>
  <div class="indexWrapper">
    <goods-swiper></goods-swiper>
  </div>
</template>
<script>
  import goodsSwiper from '../../components/swiper.vue'
  export default {
    name: 'mb',
    data (){
      return {

      }
    },
    components: {
      goodsSwiper
    },
    methods: {

    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .indexWrapper{
    font-size:28px;
    min-height:100vh;
    background-color:aliceblue;
  }
</style>

