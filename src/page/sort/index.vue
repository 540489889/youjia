<template>
  <div class="sortWrapper">
    <cube-page type="scroll-nav-side" title="ScrollNav">
      <div slot="content">
        <div class="view-wrapper">
          <cube-scroll-nav
            :side="true"
            :data="data"
            :current="current"
            @change="changeHandler"
            @sticky-change="stickyChangeHandler">
            <!--<ul class="prepend-header" slot="prepend">-->
              <!--<li>11</li>-->
              <!--<li>22</li>-->
              <!--<li>333</li>-->
            <!--</ul>-->
            <cube-scroll-nav-panel
              v-for="item in data"
              :key="item.name"
              :label="item.name"
              :title="item.name">
              <ul>
                <li v-for="food in item.foods">
                  <div>
                    <img :src="food.icon">
                    <p>{{food.name}}</p>
                  </div>
                </li>
              </ul>
            </cube-scroll-nav-panel>
          </cube-scroll-nav>
        </div>
      </div>
    </cube-page>
  </div>
</template>
<script>
  import CubePage from './components/cube-page.vue'
  import goodsData from './components/goods-list.json'
const goods = goodsData.goods
  export default {
    name: 'mb',
    data (){
      return {
        data: goods,
        current: goods[3].name
      }
    },
    components: {
      CubePage
    },
    data() {
      return {
        data: goods,
        current: goods[3].name
      }
    },
    methods: {
      changeHandler(label) {
        console.log('changed to:', label)
      },
      stickyChangeHandler(current) {
        console.log('sticky-change', current)
      }
    },
    mounted (){

    }
  }
</script>
<style lang="less">
  .scroll-nav-side{
    background-color: #fff;
    .view-wrapper{
      position: fixed;
      top: 90px;
      left: 0;
      bottom: 0;
      width: 100%;
      padding-bottom:120px;
    }
    .prepend-header{
      width: 90%;
      margin: 20px auto;
      text-align: center;
      font-size: 20px;
      line-height: 1.6;
      border-radius: 2px;
      box-shadow: 0 0 4px rgba(0, 0, 0, .2);
    }
    .cube-scroll-nav-main{
      background-color: #efeff4;
    }
    .cube-sticky-fixed{
      background-color: #efeff4;
    }
    .cube-scroll-nav-bar{
      width: 120px;
      background-color: transparent;
    }
    .cube-scroll-nav-bar-item{
      padding: 15px;
      line-height:1.6;
    }
    .cube-scroll-nav-bar-item_active{
      background-color: #fff;
      color:#ff0409;
      border-left:4px solid #ff0409;
    }
    .cube-scroll-nav-panels{
      background-color: #fff;
    }
    .cube-scroll-nav-panel{
      img{
        width: 114px;
        height: 114px;
      }
      ul{
        overflow: hidden;
        font-size: 14px;
        line-height: 1.4;
        color: #666;
        padding:0 10px;
        overflow: ;
        li{
          float: left;
          width: 50%;
          text-align: center;
          margin-bottom:10px;
          div{
            width: 114px;
            margin:0 auto;
            p{
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
    .cube-scroll-nav-panel-title{
      padding: 15px;
      font-size: 16px;
      background-color: #fff;
      text-align: left;
      line-height:1.6;
    }
  }
</style>

