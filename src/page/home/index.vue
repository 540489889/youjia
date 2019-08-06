<template>
  <div class="homeIndex">
    <my-loading v-if="isLoading"></my-loading>
    <home-search></home-search>
    <home-swiper :banner="banner"></home-swiper>
    <nav-swiper :menu="menu"></nav-swiper>
    <advert-swiper :information="information"></advert-swiper>
    <home-list
      :choice="choice"
      :newList="newList"></home-list>
  </div>
</template>
<script>
  import axios from 'axios'
  import HomeSearch from '../../components/searchBar.vue'
  import HomeSwiper from './components/swiper.vue'
  import NavSwiper from './components/navSwiper.vue'
  import AdvertSwiper from './components/advertSwiper.vue'
  import HomeList from './components/list.vue'
//  import loading from '../../components/loading.vue'
  export default {
    name: 'homeIndex',
    data() {
      return {
        isLoading: true,
        banner: [], //轮播图
        choice: {}, //平台精选
        newList: {}, //新品推荐
        cart: 0, //
        information: [],//来点快讯
        menu: [],//menu
      }
    },
    components: {
      HomeSearch,
      HomeSwiper,
      NavSwiper,
      AdvertSwiper,
      HomeList,
//      loading
    },
    created (){
    },
    methods: {
      showToastTxtOnly(text) {
        this.toast = this.$createToast({
          txt: text,
          type: 'txt'
        })
        this.toast.show()
      },
      getIndexData(){
        axios.get('http://youjia.svkeji.cn/api/v1/index').then(res=>{
          this.isLoading = false
          this.$store.commit('changeLoading',false)
          console.log(res,999999)
          if(res.success){
            let data = res.data
            this.banner = data.banner
            this.choice = data.choice
            this.newList = data.new
            this.cart = data.cart
            this.menu = data.menu
            this.information = data.information
            this.$store.commit('changeCartNum',this.cart)
          }else{
            this.showToastTxtOnly(res.msg)
          }
        });
//        this.http.get(this.ports.home.index, res =>{
//          this.isLoading = false
//          this.$store.commit('changeLoading',false)
//          console.log(res,999999)
//          if(res.success){
//            let data = res.data
//            this.banner = data.banner
//            this.choice = data.choice
//            this.newList = data.new
//            this.cart = data.cart
//            this.menu = data.menu
//            this.information = data.information
//            this.$store.commit('changeCartNum',this.cart)
//          }else{
//            this.showToastTxtOnly(res.msg)
//          }
//        })
      }
    },
    mounted (){
      this.getIndexData()
    }
  }
</script>
<style lang="less" scoped>
  .homeIndex{
    width:750px;
    min-height:100vh;
    background-color:aliceblue;
    font-size:26px;
    padding-bottom:100px;
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
