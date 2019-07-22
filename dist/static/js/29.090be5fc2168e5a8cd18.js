webpackJsonp([29],{Gt0H:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("KZMD"),d=n.c;d.forEach(function(t){t.children=n.b[t.value],t.children.forEach(function(t){t.children=n.a[t.value]})});var s={name:"AddressAdd",data:function(){return{defaultVal:!1,is_default:0,name:"",tel:"",cityAll:"",cityShow:"请选择地址",address:"",province:"",area:"",city:""}},methods:{defaultChange:function(t){this.is_default=t?1:0},addAddress:function(){var t=this;if(!this.name)return this.showToastTxtOnly("请输入姓名"),!1;if(!/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/.test(this.tel))return this.showToastTxtOnly("请输入电话"),!1;if(!this.city)return this.showToastTxtOnly("请输入选择地址"),!1;if(!this.address)return this.showToastTxtOnly("请输入详细地址"),!1;var e={};e.name=this.name,e.phone=this.tel,e.province=this.province,e.city=this.city,e.address=this.address,e.area=this.area,e.is_default=this.is_default,this.http.post(this.ports.me.address,e,function(e){if(t.$store.commit("changeLoading",!1),console.log(e),e.success){e.data;t.$router.go(-1)}else t.showToastTxtOnly(e.msg)})},showToastTxtOnly:function(t){this.toast=this.$createToast({txt:t,type:"txt"}),this.toast.show()},showSetDataPicker:function(){var t=this;this.setDataPicker.setData(d),this.setDataPicker.show(),setTimeout(function(){t.setDataPicker.setData(d,[21,0,0])},1e3)},selectHandle:function(t,e,a){this.city=a[0],this.area=a[2],this.province=a[0],this.cityAll=a.join(""),this.cityShow=this.cityAll},cancelHandle:function(){this.$createToast({type:"correct",txt:"Picker canceled",time:1e3}).show()}},mounted:function(){this.$store.commit("changeLoading",!1),this.setDataPicker=this.$createCascadePicker({title:"地址选择",onSelect:this.selectHandle,onCancel:this.cancelHandle})}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addressAdd"},[t.$store.state.isLoading?a("my-loading"):t._e(),t._v(" "),a("div",{staticClass:"content"},[a("ul",[a("li",{staticClass:"flex-box"},[a("span",[t._v("姓名")]),t._v(" "),a("cube-input",{attrs:{placeholder:"请输入姓名",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),a("li",{staticClass:"flex-box"},[a("span",[t._v("联系电话")]),t._v(" "),a("cube-input",{attrs:{placeholder:"请输入电话"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1),t._v(" "),a("li",{staticClass:"flex-box"},[a("span",[t._v("省 市 区")]),t._v(" "),a("cube-button",{staticClass:"box-1",on:{click:t.showSetDataPicker}},[t._v(t._s(t.cityShow))])],1),t._v(" "),a("li",{staticClass:"flex-box"},[a("span",[t._v("详细地址")]),t._v(" "),a("cube-input",{attrs:{placeholder:"请输入详细地址"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),t._v(" "),a("li",{staticClass:"flex-box"},[a("span",[t._v("设为默认地址")]),t._v(" "),a("cube-switch",{on:{input:t.defaultChange},model:{value:t.defaultVal,callback:function(e){t.defaultVal=e},expression:"defaultVal"}})],1)])]),t._v(" "),a("a",{staticClass:"addBtn",on:{click:t.addAddress}},[t._v("新增收货地址")])],1)},staticRenderFns:[]};var o=a("VU/8")(s,i,!1,function(t){a("j46j")},"data-v-74b8e79d",null);e.default=o.exports},WIpy:function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,"\n.addressAdd[data-v-74b8e79d]{width:100%;min-height:100vh;overflow:hidden;background-color:#f0f8ff;font-size:3.733vw;color:#506187\n}\n.addressAdd .content[data-v-74b8e79d]{background-color:#fff\n}\n.addressAdd .content ul[data-v-74b8e79d]{padding:0 4vw\n}\n.addressAdd .content ul li[data-v-74b8e79d]{justify-content:space-between;border-bottom:1px solid #eee;padding:.667vw 0\n}\n.addressAdd .content ul li .cube-input[data-v-74b8e79d]:after{content:normal\n}\n.addressAdd .content ul li .cube-input[data-v-74b8e79d]{text-align:right\n}\n.addressAdd .content ul li .cube-btn[data-v-74b8e79d]{text-align:right;background:none;color:#000;width:auto;font-size:14px;padding:15px 0\n}\n.addressAdd .content ul li[data-v-74b8e79d]:last-child{border:none\n}\n.addressAdd .addBtn[data-v-74b8e79d]{display:block;width:84vw;height:12vw;line-height:12vw;text-align:center;margin:8vw auto;border:none;background-color:#ff0207;color:#fff;border-radius:1.333vw\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/order/add.vue"],names:[],mappings:";AACA,6BAA6B,WAAW,iBAAiB,gBAAgB,yBAAyB,kBAAkB,aAAa;CAChI;AACD,sCAAsC,qBAAqB;CAC1D;AACD,yCAAyC,aAAa;CACrD;AACD,4CAA4C,8BAA8B,6BAA6B,gBAAgB;CACtH;AACD,8DAA8D,cAAc;CAC3E;AACD,wDAAwD,gBAAgB;CACvE;AACD,sDAAsD,iBAAiB,gBAAgB,WAAW,WAAW,eAAe,cAAc;CACzI;AACD,uDAAuD,WAAW;CACjE;AACD,qCAAqC,cAAc,WAAW,YAAY,iBAAiB,kBAAkB,gBAAgB,YAAY,yBAAyB,WAAW,qBAAqB;CACjM",file:"add.vue",sourcesContent:["\n.addressAdd[data-v-74b8e79d]{width:100%;min-height:100vh;overflow:hidden;background-color:#f0f8ff;font-size:3.733vw;color:#506187\n}\n.addressAdd .content[data-v-74b8e79d]{background-color:#fff\n}\n.addressAdd .content ul[data-v-74b8e79d]{padding:0 4vw\n}\n.addressAdd .content ul li[data-v-74b8e79d]{justify-content:space-between;border-bottom:1px solid #eee;padding:.667vw 0\n}\n.addressAdd .content ul li .cube-input[data-v-74b8e79d]:after{content:normal\n}\n.addressAdd .content ul li .cube-input[data-v-74b8e79d]{text-align:right\n}\n.addressAdd .content ul li .cube-btn[data-v-74b8e79d]{text-align:right;background:none;color:#000;width:auto;font-size:14px;padding:15px 0\n}\n.addressAdd .content ul li[data-v-74b8e79d]:last-child{border:none\n}\n.addressAdd .addBtn[data-v-74b8e79d]{display:block;width:84vw;height:12vw;line-height:12vw;text-align:center;margin:8vw auto;border:none;background-color:#ff0207;color:#fff;border-radius:1.333vw\n}"],sourceRoot:""}])},j46j:function(t,e,a){var n=a("WIpy");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("d3bbc442",n,!0,{})}});
//# sourceMappingURL=29.090be5fc2168e5a8cd18.js.map