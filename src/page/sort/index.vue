<template>
  <div class="sortWrapper">
    <my-loading v-if="$store.state.isLoading"></my-loading>
    <home-search></home-search>
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
              :key="item.title"
              :label="item.title"
              :title="item.title">
              <ul>
                <router-link v-if="item._child" tag="li" :to="'./list?cate='+it.id" :key="it.id" v-for="it in item._child">
                  <div v-if="it._child" v-for="three in it._child">
                    <img :src="three.logo">
                    <p>{{three.title}}</p>
                  </div>
                </router-link>
              </ul>
            </cube-scroll-nav-panel>
          </cube-scroll-nav>
        </div>
      </div>
    </cube-page>
  </div>
</template>
<script>
  import CubePage from '../../components/cube-page.vue'
  import goodsData from './components/goods-list.json'
  import HomeSearch from '../../components/searchBar.vue'
//const goods = goodsData.goods
  export default {
    name: 'SortIndex',

    components: {
      CubePage,
      HomeSearch
    },
//    data() {
//      return {
//        data: goods,
//        current: goods[3].name
//      }
//    },
    data (){
      return {
        data: [],
        current: ''
      }
    },
    methods: {
      showToastTxtOnly(text) {
        this.toast = this.$createToast({
          txt: text,
          type: 'txt'
        })
        this.toast.show()
      },
      changeHandler(label) {
        console.log('changed to:', label)
      },
      stickyChangeHandler(current) {
        console.log('sticky-change', current)
      },
      getIndexData(){
        this.http.get(this.ports.sort.index, res =>{
          this.$store.commit('changeLoading',false)
          console.log(res)
          if(res.success){
            let data = res.data
            this.data = data.res
            this.current = this.data[0].title
          }else{
            this.showToastTxtOnly(res.msg)
          }
        })
      }
    },
    mounted (){
      this.getIndexData()
    }
  }
</script>
<style lang="less">
  .sortWrapper{
    width:100%;
    height:100vh;
    overflow: hidden;
    .cube-scroll-wrapper{
      width:100%;
    }
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
          width: 110px;
          height: 110px;
        }
        ul{
          overflow: hidden;
          font-size: 14px;
          line-height: 1.4;
          color: #666;
          padding:0 5px;
          li{
            float: left;
            width: 50%;
            text-align: center;
            margin-bottom:10px;
            div{
              /*width: 114px;*/
              margin:0 auto;
              p{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-bottom:10px;
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

  }
</style>

