<template>
  <div class="authorIndex">
    <!--授权中...-->
  </div>
</template>
<script>
  import {GetQueryString} from '../../assets/js/mixin';
  export default {
    name: 'authorIndex',
    data (){
      return {

      }
    },
    created(){
      let openId = GetQueryString("openId");
      //未授权
      if(!openId){
        let newUrl = encodeURIComponent(this.$store.state.AuthorizedUrl)
        let data = 'http://ccnwx.itlw.cn/service/weixin/web/authorize?returnUrl='+newUrl
        location.href = data
      }else{
        localStorage.setItem('openId',openId);
        this.$router.push('/')
      }
    },
    methods: {

    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .authorIndex{
    width:750px;
    min-height:100vh;
    background-color:white;
    font-size:30px;
  }
</style>

