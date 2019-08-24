webpackJsonp([30],{ZVAs:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("KZMD"),s=n.c;s.forEach(function(t){t.children=n.b[t.value],t.children.forEach(function(t){t.children=n.a[t.value]})});var i={name:"AddressAdd",data:function(){return{defaultVal:!1,is_default:0,name:"",tel:"",cityAll:"",cityShow:"请选择地址",address:"",province:"",area:"",city:""}},methods:{defaultChange:function(t){this.is_default=t?1:0},getInitData:function(){var t=this,e=this.$route.params.id;this.http.get(this.ports.me.address+"/"+e+"/edit",function(e){if(t.$store.commit("changeLoading",!1),console.log(e),e.success){var a=e.data;a.is_default?t.defaultVal=!0:t.defaultVal=!1,t.is_default=a.is_default,t.name=a.name,t.tel=a.phone,t.address=a.address,t.province=a.province,t.area=a.area,t.city=a.city,t.cityShow=t.province+t.city+t.area}else t.showToastTxtOnly(e.msg)})},addAddress:function(){var t=this,e=this.$route.params.id;if(!this.name)return this.showToastTxtOnly("请输入姓名"),!1;if(!/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/.test(this.tel))return this.showToastTxtOnly("请输入正确的电话号码"),!1;if(!this.city)return this.showToastTxtOnly("请输入选择地址"),!1;if(!this.address)return this.showToastTxtOnly("请输入详细地址"),!1;var a={};a.name=this.name,a.phone=this.tel,a.province=this.province,a.city=this.city,a.address=this.address,a.area=this.area,a.is_default=this.is_default,this.http.put(this.ports.me.address+"/"+e,a,function(e){if(t.$store.commit("changeLoading",!1),console.log(e),e.success){e.data;t.$router.push({path:"/address/index"})}else t.showToastTxtOnly(e.msg)})},showToastTxtOnly:function(t){this.toast=this.$createToast({txt:t,type:"txt"}),this.toast.show()},showSetDataPicker:function(){var t=this;this.setDataPicker.setData(s),this.setDataPicker.show(),setTimeout(function(){t.setDataPicker.setData(s,[21,0,0])},1e3)},selectHandle:function(t,e,a){this.city=a[0],this.area=a[2],this.province=a[0],this.cityAll=a.join(""),this.cityShow=this.cityAll},cancelHandle:function(){this.$createToast({type:"correct",txt:"Picker canceled",time:1e3}).show()}},mounted:function(){this.getInitData(),this.$store.commit("changeLoading",!1),this.setDataPicker=this.$createCascadePicker({title:"地址选择",onSelect:this.selectHandle,onCancel:this.cancelHandle})}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addressAdd"},[t.$store.state.isLoading?a("my-loading"):t._e(),t._v(" "),a("div",{staticClass:"content"},[a("ul",[a("li",{staticClass:"flex-box"},[a("span",[t._v("姓名")]),t._v(" "),a("cube-input",{attrs:{placeholder:"请输入姓名",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),a("li",{staticClass:"flex-box"},[a("span",[t._v("联系电话")]),t._v(" "),a("cube-input",{attrs:{placeholder:"请输入电话"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1),t._v(" "),a("li",{staticClass:"flex-box"},[a("span",[t._v("省 市 区")]),t._v(" "),a("cube-button",{staticClass:"box-1",on:{click:t.showSetDataPicker}},[t._v(t._s(t.cityShow))])],1),t._v(" "),a("li",{staticClass:"flex-box"},[a("span",[t._v("详细地址")]),t._v(" "),a("cube-input",{attrs:{placeholder:"请输入详细地址"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),t._v(" "),a("li",{staticClass:"flex-box"},[a("span",[t._v("设为默认地址")]),t._v(" "),a("cube-switch",{on:{input:t.defaultChange},model:{value:t.defaultVal,callback:function(e){t.defaultVal=e},expression:"defaultVal"}})],1)])]),t._v(" "),a("a",{staticClass:"addBtn",on:{click:t.addAddress}},[t._v("保存")])],1)},staticRenderFns:[]};var o=a("VU/8")(i,d,!1,function(t){a("ce7q")},"data-v-84efb774",null);e.default=o.exports},ce7q:function(t,e,a){var n=a("p775");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("1f17d9c4",n,!0,{})},p775:function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,"\n.addressAdd[data-v-84efb774]{width:100%;min-height:100vh;overflow:hidden;background-color:#f0f8ff;font-size:3.733vw;color:#506187\n}\n.addressAdd .content[data-v-84efb774]{background-color:#fff\n}\n.addressAdd .content ul[data-v-84efb774]{padding:0 4vw\n}\n.addressAdd .content ul li[data-v-84efb774]{justify-content:space-between;border-bottom:1px solid #eee;padding:.667vw 0\n}\n.addressAdd .content ul li .cube-input[data-v-84efb774]:after{content:normal\n}\n.addressAdd .content ul li .cube-input[data-v-84efb774]{text-align:right\n}\n.addressAdd .content ul li .cube-btn[data-v-84efb774]{text-align:right;background:none;color:#000;width:auto;font-size:14px;padding:15px 0\n}\n.addressAdd .content ul li[data-v-84efb774]:last-child{border:none\n}\n.addressAdd .addBtn[data-v-84efb774]{display:block;width:84vw;height:12vw;line-height:12vw;text-align:center;margin:8vw auto;border:none;background-color:#ff0207;color:#fff;border-radius:1.333vw\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/address/edit.vue"],names:[],mappings:";AACA,6BAA6B,WAAW,iBAAiB,gBAAgB,yBAAyB,kBAAkB,aAAa;CAChI;AACD,sCAAsC,qBAAqB;CAC1D;AACD,yCAAyC,aAAa;CACrD;AACD,4CAA4C,8BAA8B,6BAA6B,gBAAgB;CACtH;AACD,8DAA8D,cAAc;CAC3E;AACD,wDAAwD,gBAAgB;CACvE;AACD,sDAAsD,iBAAiB,gBAAgB,WAAW,WAAW,eAAe,cAAc;CACzI;AACD,uDAAuD,WAAW;CACjE;AACD,qCAAqC,cAAc,WAAW,YAAY,iBAAiB,kBAAkB,gBAAgB,YAAY,yBAAyB,WAAW,qBAAqB;CACjM",file:"edit.vue",sourcesContent:["\n.addressAdd[data-v-84efb774]{width:100%;min-height:100vh;overflow:hidden;background-color:#f0f8ff;font-size:3.733vw;color:#506187\n}\n.addressAdd .content[data-v-84efb774]{background-color:#fff\n}\n.addressAdd .content ul[data-v-84efb774]{padding:0 4vw\n}\n.addressAdd .content ul li[data-v-84efb774]{justify-content:space-between;border-bottom:1px solid #eee;padding:.667vw 0\n}\n.addressAdd .content ul li .cube-input[data-v-84efb774]:after{content:normal\n}\n.addressAdd .content ul li .cube-input[data-v-84efb774]{text-align:right\n}\n.addressAdd .content ul li .cube-btn[data-v-84efb774]{text-align:right;background:none;color:#000;width:auto;font-size:14px;padding:15px 0\n}\n.addressAdd .content ul li[data-v-84efb774]:last-child{border:none\n}\n.addressAdd .addBtn[data-v-84efb774]{display:block;width:84vw;height:12vw;line-height:12vw;text-align:center;margin:8vw auto;border:none;background-color:#ff0207;color:#fff;border-radius:1.333vw\n}"],sourceRoot:""}])}});
//# sourceMappingURL=30.ae027d3f2f072851bceb.js.map