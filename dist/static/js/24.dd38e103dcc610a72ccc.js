webpackJsonp([24],{YR4O:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"MeCode",data:function(){return{}},methods:{showToastTxtOnly:function(t){this.toast=this.$createToast({txt:t,type:"txt"}),this.toast.show()},getCodeData:function(){var t=this;this.http.get(this.ports.me.code,function(e){if(t.$store.commit("changeLoading",!1),console.log(e),e.success){var n=e.data;t.count=n.count,t.list=n.res}else t.showToastTxtOnly(e.msg)})}},mounted:function(){this.$store.commit("changeLoading",!1)}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MeCode"},[t.$store.state.isLoading?n("my-loading"):t._e(),t._v(" "),n("div",{staticClass:"content"},[n("h2",{staticClass:"title"},[t._v("邀请好友得现金奖励 多邀多得")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("cube-button",{staticClass:"shareBtn"},[t._v("分享给好友")])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"infor"},[this._v("\n      邀请好友扫描二维码。TA可获得首单专属优惠,\n      你可获得订单实付金额得 "),e("span",[this._v("5%-8%")]),this._v(" 作为奖励。\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"code"},[e("h3",[this._v("重庆有线优家商城")]),this._v(" "),e("img",{attrs:{src:"http://youjia.svkeji.cn/api/v1/qrcode/index",alt:""}})])}]};var i=n("VU/8")(o,a,!1,function(t){n("k3qO")},"data-v-b5740a42",null);e.default=i.exports},k3qO:function(t,e,n){var o=n("uJ+k");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("962d14bc",o,!0,{})},"uJ+k":function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,"\n.MeCode[data-v-b5740a42]{width:100%;min-height:100vh;background-color:#f0f8ff;font-size:3.733vw\n}\n.MeCode .content[data-v-b5740a42]{padding:0 8vw;overflow:hidden\n}\n.MeCode .content .title[data-v-b5740a42]{margin-top:9.333vw;margin-bottom:5.333vw;font-size:4.8vw;font-weight:700\n}\n.MeCode .content .infor[data-v-b5740a42]{line-height:1.6;text-align:left\n}\n.MeCode .content .infor span[data-v-b5740a42]{color:red\n}\n.MeCode .content .code[data-v-b5740a42]{background-color:#fff;padding:2vw;padding-top:0;margin-top:9.333vw\n}\n.MeCode .content .code h3[data-v-b5740a42]{padding:4vw 0;text-align:center;color:#f06664\n}\n.MeCode .content .code img[data-v-b5740a42]{width:79.333vw;height:79.333vw\n}\n.MeCode .content .shareBtn[data-v-b5740a42]{background-color:#ff0207;margin:5.333vw auto\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/me/code.vue"],names:[],mappings:";AACA,yBAAyB,WAAW,iBAAiB,yBAAyB,iBAAiB;CAC9F;AACD,kCAAkC,cAAc,eAAe;CAC9D;AACD,yCAAyC,mBAAmB,sBAAsB,gBAAgB,eAAe;CAChH;AACD,yCAAyC,gBAAgB,eAAe;CACvE;AACD,8CAA8C,SAAS;CACtD;AACD,wCAAwC,sBAAsB,YAAY,cAAc,kBAAkB;CACzG;AACD,2CAA2C,cAAc,kBAAkB,aAAa;CACvF;AACD,4CAA4C,eAAe,eAAe;CACzE;AACD,4CAA4C,yBAAyB,mBAAmB;CACvF",file:"code.vue",sourcesContent:["\n.MeCode[data-v-b5740a42]{width:100%;min-height:100vh;background-color:#f0f8ff;font-size:3.733vw\n}\n.MeCode .content[data-v-b5740a42]{padding:0 8vw;overflow:hidden\n}\n.MeCode .content .title[data-v-b5740a42]{margin-top:9.333vw;margin-bottom:5.333vw;font-size:4.8vw;font-weight:700\n}\n.MeCode .content .infor[data-v-b5740a42]{line-height:1.6;text-align:left\n}\n.MeCode .content .infor span[data-v-b5740a42]{color:red\n}\n.MeCode .content .code[data-v-b5740a42]{background-color:#fff;padding:2vw;padding-top:0;margin-top:9.333vw\n}\n.MeCode .content .code h3[data-v-b5740a42]{padding:4vw 0;text-align:center;color:#f06664\n}\n.MeCode .content .code img[data-v-b5740a42]{width:79.333vw;height:79.333vw\n}\n.MeCode .content .shareBtn[data-v-b5740a42]{background-color:#ff0207;margin:5.333vw auto\n}"],sourceRoot:""}])}});
//# sourceMappingURL=24.dd38e103dcc610a72ccc.js.map