<template>
  <div class="addressIndex">
    <div class="content">
      <ul>
        <li>
          <h4 class="flex-box">
            <span class="box-1 media_title">喜洋洋</span>
            <span>18375875809</span>
          </h4>
          <h5>重庆市渝中区XX街道阳光小区13号</h5>
          <h6 class="flex-box">
            <cube-checkbox v-model="checked">
              设为默认地址
            </cube-checkbox>
            <div class="box-1 flex-box right-bb">
              <a>编辑</a>
              <a>删除</a>
            </div>
          </h6>
        </li>
      </ul>
      <router-link tag="a" to="./add" class="addBtn">新增收货地址</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AddressIndex',
    data (){
      return {
        checked: false
      }
    },
    methods: {

    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .addressIndex{
    font-size:28px;
    width:100%;
    min-height:100vh;
    background-color:white;
    overflow: hidden;
    .content{
      ul{
        li{
          padding:30px;
          border-bottom:20px solid #f5f5f5;
          h4{
            line-height:2;
            justify-content: space-between;
            span:first-child{
              text-align: left;
            }
            border-bottom:1px solid #eee;
          }
          h5{
            text-align: left;
            line-height:2;
            margin-top:10px;
          }
          h6{
            .cube-checkbox{
              padding:0;
            }
            .cube-checkbox-wrap{
              padding:5px 0;
            }
            .right-bb{
              justify-content: flex-end;
              a{
                border:1px solid #aaa;
                padding:15px 30px;
                border-radius: 5px;
                margin-left:20px;
              }
            }
          }
        }
      }
      .addBtn{
        display: block;
        width:630px;
        height:90px;
        line-height:90px;
        text-align: center;
        margin:50px auto;
        border:1px solid #ff0207;
        color:#ff0207;
        border-radius: 10px;
      }
    }
  }
</style>

