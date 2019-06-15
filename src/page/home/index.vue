<template>
  <div class="homeIndex">
    <h1>测试页面</h1>
    <h2 id="test">jquery 测试</h2>
  </div>
</template>
<script>
  export default {
    name: 'homeIndex',
    data() {
      return {

      }
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
