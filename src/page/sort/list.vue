<template>
  <cube-page type="sticky-view-scroll" title="Sticky">
    <template slot="content">
      <div class="listWrapper sticky-view-container">
        <cube-sticky :pos="scrollY">
          <cube-scroll
            :scroll-events="scrollEvents"
            @scroll="scrollHandler">
            <home-search></home-search>
            <cube-sticky-ele ele-key="123">
              <index-sort></index-sort>
            </cube-sticky-ele>

            <data-sort></data-sort>
          </cube-scroll>
        </cube-sticky>
      </div>
    </template>
  </cube-page>

</template>
<script>
  import CubePage from '../../components/cube-page.vue'
  import HomeSearch from '../../components/search.vue'
  import IndexSort from './components/sort.vue'
  import DataSort from './components/data.vue'
  export default {
    name: 'SortList',
    data (){
      return {
        scrollEvents: ['scroll'],
        scrollY: 0,
      }
    },
    components: {
      HomeSearch,
      IndexSort,
      DataSort,
      CubePage
    },
    methods: {
      scrollHandler({ y }) {
        this.scrollY = -y
      }
    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .listWrapper{
    font-size:28px;
    background-color:aliceblue;
    min-height:100vh;
    width:100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
</style>

