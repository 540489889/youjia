webpackJsonp([33],{"71A9":function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,"\n.MeCode[data-v-6c61aa8c]{width:100%;min-height:100vh;background-color:#f0f8ff;font-size:3.733vw\n}\n.MeCode .shareWrapper[data-v-6c61aa8c]{color:#fff;padding:4vw;text-align:right;box-sizing:border-box\n}\n.MeCode .shareWrapper img[data-v-6c61aa8c]{width:24.8vw\n}\n.MeCode .shareWrapper h4[data-v-6c61aa8c]{text-align:center;line-height:2\n}\n.MeCode .content[data-v-6c61aa8c]{padding:0 8vw;overflow:hidden\n}\n.MeCode .content .title[data-v-6c61aa8c]{margin-top:9.333vw;margin-bottom:5.333vw;font-size:4.8vw;font-weight:700\n}\n.MeCode .content .infor[data-v-6c61aa8c]{line-height:1.6;text-align:left\n}\n.MeCode .content .infor span[data-v-6c61aa8c]{color:red\n}\n.MeCode .content .code[data-v-6c61aa8c]{background-color:#fff;padding:2vw;padding-top:0;margin-top:9.333vw\n}\n.MeCode .content .code h3[data-v-6c61aa8c]{padding:4vw 0;text-align:center;color:#f06664\n}\n.MeCode .content .code img[data-v-6c61aa8c]{width:79.333vw;height:79.333vw\n}\n.MeCode .content .shareBtn[data-v-6c61aa8c]{background-color:#ff0207;margin:5.333vw auto\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/me/code.vue"],names:[],mappings:";AACA,yBAAyB,WAAW,iBAAiB,yBAAyB,iBAAiB;CAC9F;AACD,uCAAuC,WAAW,YAAY,iBAAiB,qBAAqB;CACnG;AACD,2CAA2C,YAAY;CACtD;AACD,0CAA0C,kBAAkB,aAAa;CACxE;AACD,kCAAkC,cAAc,eAAe;CAC9D;AACD,yCAAyC,mBAAmB,sBAAsB,gBAAgB,eAAe;CAChH;AACD,yCAAyC,gBAAgB,eAAe;CACvE;AACD,8CAA8C,SAAS;CACtD;AACD,wCAAwC,sBAAsB,YAAY,cAAc,kBAAkB;CACzG;AACD,2CAA2C,cAAc,kBAAkB,aAAa;CACvF;AACD,4CAA4C,eAAe,eAAe;CACzE;AACD,4CAA4C,yBAAyB,mBAAmB;CACvF",file:"code.vue",sourcesContent:["\n.MeCode[data-v-6c61aa8c]{width:100%;min-height:100vh;background-color:#f0f8ff;font-size:3.733vw\n}\n.MeCode .shareWrapper[data-v-6c61aa8c]{color:#fff;padding:4vw;text-align:right;box-sizing:border-box\n}\n.MeCode .shareWrapper img[data-v-6c61aa8c]{width:24.8vw\n}\n.MeCode .shareWrapper h4[data-v-6c61aa8c]{text-align:center;line-height:2\n}\n.MeCode .content[data-v-6c61aa8c]{padding:0 8vw;overflow:hidden\n}\n.MeCode .content .title[data-v-6c61aa8c]{margin-top:9.333vw;margin-bottom:5.333vw;font-size:4.8vw;font-weight:700\n}\n.MeCode .content .infor[data-v-6c61aa8c]{line-height:1.6;text-align:left\n}\n.MeCode .content .infor span[data-v-6c61aa8c]{color:red\n}\n.MeCode .content .code[data-v-6c61aa8c]{background-color:#fff;padding:2vw;padding-top:0;margin-top:9.333vw\n}\n.MeCode .content .code h3[data-v-6c61aa8c]{padding:4vw 0;text-align:center;color:#f06664\n}\n.MeCode .content .code img[data-v-6c61aa8c]{width:79.333vw;height:79.333vw\n}\n.MeCode .content .shareBtn[data-v-6c61aa8c]{background-color:#ff0207;margin:5.333vw auto\n}"],sourceRoot:""}])},"U/Uj":function(t,e,a){var n=a("71A9");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("950d1be4",n,!0,{})},YR4O:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"MeCode",data:function(){return{isShare:!1}},methods:{shareClick:function(){this.isShare=!0},changeCloseShare:function(){this.isShare=!1},showToastTxtOnly:function(t){this.toast=this.$createToast({txt:t,type:"txt"}),this.toast.show()},getCodeData:function(){var t=this;this.http.get(this.ports.me.code,function(e){if(t.$store.commit("changeLoading",!1),console.log(e),e.success){var a=e.data;t.count=a.count,t.list=a.res}else t.showToastTxtOnly(e.msg)})}},mounted:function(){this.$store.commit("changeLoading",!1)}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MeCode"},[t.$store.state.isLoading?n("my-loading"):t._e(),t._v(" "),n("div",{staticClass:"content"},[n("h2",{staticClass:"title"},[t._v("邀请好友得现金奖励 多邀多得")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("cube-button",{staticClass:"shareBtn",on:{click:t.shareClick}},[t._v("分享给好友")])],1),t._v(" "),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutRight"}},[t.isShare?n("div",{staticClass:"popup_layer shareWrapper",on:{click:t.changeCloseShare}},[n("img",{attrs:{src:a("NSoo"),alt:""}}),t._v(" "),n("h4",[t._v("点击右上角分享给好友哟！")])]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"infor"},[this._v("\n      邀请好友扫描二维码。TA可获得首单专属优惠,\n      你可获得订单实付金额得 "),e("span",[this._v("5%-8%")]),this._v(" 作为奖励。\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"code"},[e("h3",[this._v("重庆有线优家商城")]),this._v(" "),e("img",{attrs:{src:"http://youjia.svkeji.cn/api/v1/qrcode/index",alt:""}})])}]};var c=a("VU/8")(n,o,!1,function(t){a("U/Uj")},"data-v-6c61aa8c",null);e.default=c.exports}});
//# sourceMappingURL=33.c287317b6550cfc26e67.js.map