<template>
  <div class="serviceBox flex-box">
    <div class="serviceWrapper">
      <h2 class="title">请选择是否需要安装服务
        <i class="closeBtn cubeic-wrong" @click="closeSelected()"></i>
      </h2>
      <!--<p class="test">请选择退换货的原因</p>-->
      <ul class="list">
        <li class="flex-box">
          <cube-radio-group v-model="selected2" :options="options2" position="right" :hollow-style="true" />
        </li>
      </ul>
      <div class="serviceBtn" @click="handleClickCancel">确定</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mb',
    data (){
      return {
        selected2: 0,
        options2: [
          {
            label: '是',
            value: 1
          },
          {
            label: '否',
            value: 0
          },
        ]
      }
    },
    methods: {
      //取消订单
      closeSelected(){
        this.$emit('changeSelected',false)
      },
      handleClickCancel(){
        let data = '';
        this.$emit('changeOkSelected',this.selected2)
      }
    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .serviceBox{
    width:100%;
    height:100vh;
    overflow: hidden;
    align-items: flex-end;
  }
  .serviceWrapper{
    height:600px;
    width:100%;
    box-sizing: border-box;
    padding:30px;
    position:fixed;
    bottom:0;
    left:0;
    background-color:white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    .title{
      font-size:32px;
      font-weight: bold;
      text-align: center;
      position:relative;
      padding:15px 0;
      .closeBtn{
        position:absolute;
        top:50%;
        transform: translateY(-50%);
        right:20px;
        color:#ccc;
        font-size:45px;
        font-weight: bold;
      }
    }
    .test{
      text-align: left;
      color:#7f8593;
      font-size:26px;
      line-height:2;
      padding-left:30px;
      margin-top:20px;
    }
    .list{
      text-align: left;
      margin-top:20px;
      margin-bottom:30px;
      li{
        padding:30px 0;
        font-size:26px;
        color:#7f8593;
        .cube-radio-group{
          width:100%;
        }
        .border-top-1px:before{
          content: initial;
        }
      }
    }
    .serviceBtn{
      height:80px;
      line-height:80px;
      text-align: center;
      border-radius: 40px;
      width:250px;
      background-color:#ff3747;
      margin:30px auto;
      color:white;
    }
  }
</style>

