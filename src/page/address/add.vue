<template>
  <div class="addressAdd">
    <div class="content">
      <ul>
        <li class="flex-box">
          <span>姓名</span>
          <cube-input v-model="name" type="text" ></cube-input>
        </li>
        <li class="flex-box">
          <span>联系电话</span>
          <cube-input v-model="tel" ></cube-input>
        </li>
        <li class="flex-box">
          <span>省 市 区</span>
          <cube-button class="box-1" @click="showSetDataPicker">{{city}}</cube-button>
        </li>
        <li class="flex-box">
          <span>详细地址</span>
          <cube-input v-model="address" ></cube-input>
        </li>
      </ul>
    </div>
    <a class="addBtn">新增收货地址</a>
  </div>
</template>
<script>
  import { provinceList, cityList, areaList } from './../../assets/js/area'
  const addressData = provinceList
  addressData.forEach(province => {
    province.children = cityList[province.value]
    province.children.forEach(city => {
      city.children = areaList[city.value]
    })
  })

  export default {
    name: 'AddressAdd',
    data (){
      return {
        name: '',
        tel: '',
        city: '请选择地址',
        address: ''
      }
    },
    methods: {
      showSetDataPicker() {
        // setData when the picker is invisible.
        this.setDataPicker.setData(addressData)
        this.setDataPicker.show()
        setTimeout(() => {
          // setData when the picker is visible.
          this.setDataPicker.setData(addressData, [21, 0, 0])
        }, 1000)
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        this.city = selectedText.join(' ')
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    },
    mounted (){
      this.setDataPicker = this.$createCascadePicker({
        title: '地址选择',
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    }
  }
</script>
<style lang="less" scoped>
  .addressAdd{
    width:100%;
    min-height:100vh;
    overflow: hidden;
    background-color:aliceblue;
    font-size:28px;
    color:#506187;
    .content{
      background-color:white;
      ul{
        padding:0 30px;
        li{
          justify-content: space-between;
          border-bottom:1px solid #eee;
          padding:5px 0;
          .cube-input:after{
            content: initial;
          }
          .cube-input{
            text-align: right;

          }
          .cube-btn{
            text-align: right;
            background:none;
            color:black;
            width:initial;
            font-size:14px;
            padding:15px 0;
          }
        }
        li:last-child{
          border:none;
        }
      }
    }
    .addBtn{
      display: block;
      width:630px;
      height:90px;
      line-height:90px;
      text-align: center;
      margin:60px auto;
      border:none;
      background-color:#ff0207;
      color:white;
      border-radius: 10px;
    }
  }
</style>

