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
      console.log()
      let thisUrl = window.location.href;
      console.log(thisUrl)
      let openId = GetQueryString("openId");
      //未授权
      if(!openId){
//        let newUrl = encodeURIComponent(thisUrl)
        let data = 'http://ccnwx.cqccn.com/service/weixin/web/authorize?returnUrl='+thisUrl
        window.location.href = data
      }else{
        this.$store.commit('changeLogin',openId)
        console.log(this.$store.state.redirect)
        this.$router.push({path: this.$store.state.redirect})
//        window.location.href = 'http://yj.svkeji.cn/'
      }
    },
    beforeRouteEnter(to, from, next){
      localStorage.redirect = from.path
      next()
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

