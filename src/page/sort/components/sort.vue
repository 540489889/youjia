<template>
  <div class="sortBox">
    <div class="flex-box">
      <div class="sort-l sort-1">推荐</div>
      <div class="sort-l sort-2">价格
        <i class="cubeic-pullup cksort"></i>
        <i class="cubeic-pulldown"></i>
      </div>
      <div class="sort-l sort-3">销量
        <i class="cubeic-pullup"></i>
        <i class="cubeic-pulldown"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'sort',
    data (){
      return {

      }
    },
    methods: {

    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .sortBox{
    padding:30px;
    background-color:aliceblue;
    .sort-l{
      position:relative;
      margin-right:20px;
      height:50px;
      line-height:50px;
      border-radius: 25px;
      padding:0 30px;
      text-align: center;
      color:#7f8593;
      /*min-width:110px;*/
      i{
        font-size:50px;
      }
      .cubeic-pullup{
        position:absolute;
        right:-8px;
        bottom:5px;
      }
      .cubeic-pulldown{
        position:absolute;
        right:-8px;
        top:5px;
      }
      .cksort{
        color:#ff3545;
      }
    }
    .sort-1{
      color:white;
      background-color:#ff3545;
    }
  }
</style>

