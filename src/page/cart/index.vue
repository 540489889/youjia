<template>
  <cube-page type="swipe-view" title="Swipe">
    <template slot="content">
      <div class="swipe-wrapper">
        <cube-scroll>
          <cube-swipe>
            <transition-group name="swipe" tag="ul">
              <li class="swipe-item-wrapper" v-for="(data,index) in swipeData" :key="data.item.id">
                <cube-swipe-item
                  ref="swipeItem"
                  :btns="data.btns"
                  :index="index"
                  @btn-click="onBtnClick">
                  <div @click="onItemClick(data.item, index)" class="item-inner flex-box">
                    <div class="icon">
                      <img width="60" height="60" :src="data.item.imgurl">
                    </div>
                    <div class="text box-1">
                      <h2 class="item-name" v-html="data.item.name"></h2>
                      <p class="item-desc" v-html="data.item.desc"></p>
                    </div>
                  </div>
                </cube-swipe-item>
              </li>
            </transition-group>
          </cube-swipe
          >
        </cube-scroll>
      </div>
    </template>
  </cube-page>
</template>
<script>
  import CubePage from './components/cube-page.vue'
  import { customData } from './components/swipe'
  export default {
    name: 'cartIndex',
    data (){
      return {
        swipeData: customData
      }
    },
    components: {
      CubePage
    },
    methods: {
      onItemClick(item) {
        alert('click item:', item)
      },
      onBtnClick(btn, index) {
        if (btn.action === 'delete') {
          this.$createActionSheet({
            title: '确认要删除吗',
            active: 0,
            data: [
              {content: '删除'}
            ],
            onSelect: () => {
              this.swipeData.splice(index, 1)
            }
          }).show()
        } else {
          this.$refs.swipeItem[index].shrink()
        }
      }
    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .swipe-enter-active,.swipe-leave-active{
    transition: all .5s;
    .item-inner{
      transition: all .5s;
    }
  }
  .swipe-enter,.swipe-leave-to{
    .item-inner{
      height: 0
    }
  }
  .swipe-view{
    .swipe-wrapper{
      position: fixed;
      top:0;
      left:0;
      right:0;
      bottom: 0;
      background: #fff;
      padding-bottom:120px;
      .swipe-item-wrapper{
        overflow: hidden;
      }
      .item-inner{
        padding: 0 20px;
        text-align: left;
        margin-bottom:20px;
        height: 120px;
        .icon{
          width: 120px;
          padding-right: 20px;
        }
        .text{
          line-height: 28px;
          overflow: hidden;
          font-size: 28px;
          .item-name{
            margin-bottom: 20px;
            color: #333;
          }
        }
      }
    }
  }
</style>

