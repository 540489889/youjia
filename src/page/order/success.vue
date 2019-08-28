<template>
  <div class="success">
    <my-loading v-if="$store.state.isLoading"></my-loading>
    <div class="content">
        <h1>
          <div v-if="succ" >
            <i class="cubeic-right"></i>
            <p>交易成功</p>
          </div>
          <div v-else>
            <i class="cubeic-wrong"></i>
            <p>{{msg}}</p>
          </div>
        </h1>
        <div class="btnBox flex-box">
          <!--<a class="lookInfo" @click="lookDetails">查看详情</a>-->
          <router-link tag="a" to="/" class="home">商城首页</router-link>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'success',
    data (){
      return {
        succ: false,
        msg: '',
        id: ''
      }
    },
    created(){
      this.getOrderState()
    },
    methods: {
      getOrderState(){
        let id = this.$route.query.id
        this.http.get(this.ports.order.orderstatus+'?id='+id, res =>{
          this.$store.commit('changeLoading',false)
          console.log(res)
          this.id = res.data.id
          if(res.success){
            this.succ = true
          }else{
            this.succ = false
            this.msg = res.msg
          }
        })
      },
      lookDetails(){
        this.$router.push({path: '/order/details',query:{
          id: this.id,
        }})
      }
    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .success{
    width:100%;
    min-height:100vh;
    background-color:aliceblue;
    font-size:28px;
    .content{
      overflow: hidden;
      h1{
        margin-top:200px;
        i{
          font-size:120px;
          color:#27cd32;
        }
        .cubeic-wrong{
          color:red;
        }
        p{
          line-height:2;
          color:black;
        }
      }
      .btnBox{
        justify-content: center;
        margin-top:60px;
        a{
          width:250px;
          height:80px;
          text-align: center;
          border-radius: 40px;
          line-height:80px;
        }
        .lookInfo{
          margin-right:10px;
          border:1px solid #7f8593;
          color:black;
        }
        .home{
          margin-left:10px;
          background-color:#ff3747;
          color:white;
        }
      }
    }
  }
</style>

