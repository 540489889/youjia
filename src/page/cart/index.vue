<template>
  <div class="cart-wrapper">
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
                      <cube-checkbox v-model="data.item.checked" @input="changeCheck" option="" ></cube-checkbox>
                      <div class="flex-box box-1 twoItem">
                        <div class="icon">
                          <img width="168" height="168" :src="data.item.imgurl">
                        </div>
                        <div class="text box-1">
                          <h2 class="item-name media_title" v-html="data.item.name"></h2>
                          <p class="item-desc media_desc" v-html="data.item.desc"></p>
                          <h4 class="item-money flex-box">
                            <div class="left">
                              ￥<span v-html="data.item.price"></span>
                            </div>
                            <div class="right flex-box">
                              <span @click="reduce(data.item)">-</span>
                              <cube-input :min="1" :max="10" type="number" @change="handleNumChange(data.item)" v-model="data.item.num"></cube-input>
                              <span @click="plus(data.item)">+</span>
                            </div>
                          </h4>
                        </div>
                      </div>

                    </div>
                  </cube-swipe-item>
                </li>
              </transition-group>
            </cube-swipe>
          </cube-scroll>
        </div>
      </template>
    </cube-page>
    <div class="all-check flex-box">
      <cube-checkbox
        v-model="checked"
        @input="changeAllCheck"
        :option="option"></cube-checkbox>
      <div class="all-money box-1">
        合计: <span>￥{{total}}</span>
      </div>
      <a class="go-ck">去结算({{number}})</a>
    </div>
  </div>
</template>
<script>
  import CubePage from './components/cube-page.vue'
  import { customData } from './components/swipe'
  export default {
    name: 'cartIndex',
    data (){
      return {
        number:0,
        checked: false, //全选
        option: {
          label: '全选',
          value: false
        },
        swipeData: customData
      }
    },
    components: {
      CubePage
    },
    computed: {
      //合计
      total: function () {
        let num = 0;
        let tempData = this.swipeData
        for(let i=0;i<tempData.length;i++){
          if(tempData[i].item.checked){
            num+=tempData[i].item.num*tempData[i].item.price
          }
        }
        return num
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
      onItemClick(item) {
//        alert('click item:', item)
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
      },
      //减法
      reduce(item){
        if(item.num<=1){
          this.showToastTxtOnly('受不了了，宝贝不能再减少了哦')
          return false
        }else{
          item.num -=1;
        }
      },
      //加法
      plus(item){
        if(item.num>=item.stock) {
          this.showToastTxtOnly('已经没有更多的库存了，下次再来吧')
          return false
        }else{
          item.num +=1
        }
      },
      //数量监听限制
      handleNumChange(item){
        if(item.num>=item.stock){
          this.showToastTxtOnly('超出范围')
          item.num = item.stock
        }
      },
      //选择监听
      changeCheck(val){
        let nums = 0
        let newNum = this.swipeData.map((currVal,index,arr)=>{
          if(!currVal.item.checked){
            nums = 0
          }else{
            nums = 1
          }
          return nums
        })
        this.number = eval(newNum.join('+'))
        if(this.swipeData.every((currentValue,index,arr)=>{
//          console.log(currentValue,index,arr)
          if(currentValue.item.checked === false){
            return false
          }else{
            return true
          }
        })){
          this.checked = true
        }else{
          this.checked = false
        }
      },
      //全选
      changeAllCheck(val){
        for(let i=0;i<this.swipeData.length;i++){
          if(val) {
            this.$set(this.swipeData[i].item,'checked',true)
            this.number = this.swipeData.length
          }else{
            this.$set(this.swipeData[i].item,'checked',false)
            this.number = 0
          }
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
  .all-check{
    position:fixed;
    bottom:120px;
    width:100%;
    background-color:white;
    z-index: 10;
    height:110px;

    .all-money{
      font-size:26px;
      color:#7f8593;
      text-align: left;
      span{
        color:black;
        font-size:32px;
      }
    }
    .go-ck{
      display: inline-block;
      font-size:30px;
      color:white;
      background-color:#ff3747;
      height:80px;
      border-radius: 40px;
      line-height:80px;
      text-align: center;
      min-width:185px;
      margin:0 15px;
    }
  }
  .swipe-view{
    .swipe-wrapper{
      font-size:28px;
      position: fixed;
      top:0;
      left:0;
      right:0;
      bottom: 0;
      background: aliceblue;
      padding-bottom:230px;
      .swipe-item-wrapper:first-child{
        margin-top:20px;
      }
      .swipe-item-wrapper{
        overflow: hidden;
        width:700px;
        margin:0 auto;
      }
      .cube-swipe{}

      .item-inner{
        text-align: left;
        min-height: 168px;
        background-color:white;
        margin-bottom:20px;
        padding:30px;
        border-radius: 10px;
        .twoItem{
          align-items: flex-start;
        }

        .cube-checkbox{
          padding-left:0;
          padding-right:10px;
          font-size:20px;
        }
        .icon{
          width: 168px;
          height:168px;
          margin-right: 20px;
          img{
            width:100%;
            height:100%;
            border-radius: 10px;
          }
        }
        .text{
          line-height: 28px;
          overflow: hidden;
          font-size: 28px;
          .item-name{
            margin-bottom: 20px;
            color: black;
          }
          .item-desc{
            color:#7f8593;
            font-size:24px;
            line-height:1.4;
          }
          .item-money{
            margin-top:30px;
            justify-content: space-between;
            .left{
              color:#ff3747;
              span{
                font-size:36px;
                font-weight: bold;
              }
            }
            .right{
              span{
                font-size:30px;
                width:30px;
                height:30px;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
</style>

