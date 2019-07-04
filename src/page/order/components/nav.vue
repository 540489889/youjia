<template>
  <div class="orderNav">
    <cube-tab-bar
      v-model="selectedLabelSlots"
      :show-slider="showSlider"
      inline
      @change="changeHandler"
      @click="clickHandler">
      <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
        <!-- name为icon的插槽 -->
        <!--<i slot="icon" :class="item.icon"></i>-->
        <!-- 默认插槽 -->
        {{item.label}}
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>
<script>
  export default {
    name: 'orderNav',
    data (){
      return {
        selectedLabelSlots: '待付款',
        showSlider: false,
        inline:true,
        tabs: [{
          label: '待付款',
          icon: 'cubeic-home'
        },{
          label: '待发货',
          icon: 'cubeic-like'
        },{
          label: '待收货',
          icon: 'cubeic-vip'
        },{
          label: '已完成',
          icon: 'cubeic-person'
        }]
      }
    },
    methods: {
      clickHandler (label) {
        // if you clicked home tab, then print 'Home'
        console.log(label)
      },
      changeHandler (label) {
        console.log(label)
        // if you clicked different tab, this methods can be emitted
      }
    },
    mounted (){
    }
  }
</script>
<style lang="less" scoped>
  .orderNav{
    border-bottom:1px solid #eee;
    background:white;
    .cube-tab_active{
      color:black;
    }
    .cube-tab{
      padding:15px 0;
      position:relative;
    }
    .cube-tab_active::after{
      content: '';
      display: inline-block;
      width:25px;
      height:3px;
      background-color:red;
      position:absolute;
      bottom:0;
      left:50%;
      transform: translateX(-50%);
      border-radius: 2px;
    }
  }
</style>

