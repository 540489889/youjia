<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
    <loading v-if="$store.state.isLoading"></loading>
    <nav-bar :selectedNavTitle="this.$store.state.defaultTitle" v-show="showBar"></nav-bar>
  </div>
</template>
<script>
  import loading from './components/loading.vue'
  import navBar from './components/navBar.vue'
  export default {
    name: 'app',
    data (){
      return{
        transitionName:'',
        showBar: true,
      }
    },
    created (){
    },
    methods:{

    },
    components:{
      navBar,
      loading
    },
    watch: {
      //使用watch 监听$router的变化
      '$route' (to, from) {
//      this.$store.state.defaultTitle = '首页'
        this.$store.commit('changeTitle',to.meta.title)
        this.$store.commit('changeLoading',true)
        //导航显示
        switch (to.name){
          case 'Home':
            this.showBar = true
            break
          case 'SortIndex':
            this.showBar = true
            break
          case 'MeIndex':
            this.showBar = true
            break
          case 'CartIndex':
            this.showBar = true
            break
          default :
            this.showBar = false
        }
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if(to.meta.index > from.meta.index){
          //设置动画名称
          this.transitionName = 'slide-left';
        }else{
          this.transitionName = 'slide-right';
        }
      }, deep: true
    }
  }
</script>

<style lang="less" scoped>
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
  }
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
