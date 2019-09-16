<template>
  <div class="informationWrapper recommend-content">
    <my-loading v-if="$store.state.isLoading"></my-loading>
      <h2 class="title">{{content.title}}</h2>
      <h4 class="time">{{content.create_at}}</h4>
    <div class="content" v-html="content.content">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'information',
    data(){
      return {
        content: ''
      }
    },
    methods: {
      getIndexData(){
        let id = this.$route.params.id
        this.http.get(this.ports.home.index+'/'+id, res =>{
          this.isLoading = false
          this.$store.commit('changeLoading',false)
          console.log(res)
          if(res.success){
            this.content = res.data
          }else{
          }
        })
      }
    },
    mounted(){
      this.getIndexData()
    }
  }
</script>
<style lang="less">
  .informationWrapper{
    background-color:white;
    font-size:28px;
    text-align: left;
    .title{
      font-size:30px;
      font-weight: bold;
      padding:20px 20px;
      padding-bottom:0;
    }
    .time{
      padding:20px 20px;
      color:#bbb;
      border-bottom:1px solid #eee;
      font-size:26px;
    }
    .content{
      padding:20px;
    }
  }
</style>

