webpackJsonp([21],{"+ct3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"detailedWrapper",data:function(){return{list:[],sum:""}},methods:{getIntegralData:function(){var t=this;this.http.get(this.ports.integral.loglist,function(e){if(t.$store.commit("changeLoading",!1),console.log(e),e.success){var i=e.data;t.list=i.res,t.sum=i.sum}else t.showToastTxtOnly(e.msg)})}},mounted:function(){this.getIntegralData()}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detailedWrapper"},[t.$store.state.isLoading?i("my-loading"):t._e(),t._v(" "),i("div",{staticClass:"title"},[i("div",{staticClass:"flex-box hTitle"},[i("div",{staticClass:"box-1"},[i("span",[t._v(t._s(t.sum))]),t._v("积分")]),t._v(" "),i("router-link",{staticClass:"exchangeBtn",attrs:{tag:"a",to:"/integralMall/index"}},[t._v("积分兑换商品")])],1),t._v(" "),i("p",[t._v("积分又可以在积分商城兑换礼品")])]),t._v(" "),i("div",{staticClass:"content"},[i("h2",[t._v("积分明细")]),t._v(" "),t._m(0),t._v(" "),i("ul",t._l(t.list,function(e,a){return i("li",{key:a,staticClass:"flex-box"},[i("span",{staticClass:"t1"},[t._v(t._s(e.point))]),t._v(" "),i("span",{staticClass:"t1"},[t._v(t._s(e.type))]),t._v(" "),i("span",{staticClass:"box-1"},[t._v(t._s(e.create_at))])])}),0)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"flex-box"},[e("span",{staticClass:"t1"},[this._v("积分")]),this._v(" "),e("span",{staticClass:"t1"},[this._v("详细说明")]),this._v(" "),e("span",{staticClass:"box-1"},[this._v("记录时间")])])}]};var r=i("VU/8")(a,n,!1,function(t){i("ojCm")},"data-v-2bb287b7",null);e.default=r.exports},"2hyW":function(t,e,i){t.exports=i.p+"static/img/integral-t-bg.8b585d0.png"},ojCm:function(t,e,i){var a=i("qwwX");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("1f7393fe",a,!0,{})},qwwX:function(t,e,i){var a=i("kxFB");(t.exports=i("FZ+f")(!0)).push([t.i,"\n.detailedWrapper[data-v-2bb287b7]{width:100%;min-height:100vh;background-color:#fff;font-size:3.733vw;position:relative\n}\n.detailedWrapper .title[data-v-2bb287b7]{width:100vw;height:46.667vw;background:url("+a(i("2hyW"))+") no-repeat 50%;background-size:100%;color:#fff;position:relative;padding:4vw;box-sizing:border-box;overflow:hidden;text-align:left\n}\n.detailedWrapper .title .hTitle[data-v-2bb287b7]{margin-top:13.333vw\n}\n.detailedWrapper .title .hTitle span[data-v-2bb287b7]{font-size:8vw;font-weight:700\n}\n.detailedWrapper .title .hTitle .exchangeBtn[data-v-2bb287b7]{margin-left:2.667vw;height:10.667vw;width:40vw;border-radius:5.333vw;text-align:center;border:1px solid #eee;color:#fff;line-height:10.667vw\n}\n.detailedWrapper .title p[data-v-2bb287b7]{line-height:2;margin-top:6.667vw\n}\n.detailedWrapper .content h2[data-v-2bb287b7]{padding:4vw;text-align:left;font-size:4vw;border-bottom:1px solid #eee;font-weight:700\n}\n.detailedWrapper .content h3[data-v-2bb287b7]{padding:4vw 0;border-bottom:1px solid #eee\n}\n.detailedWrapper .content h3 .t1[data-v-2bb287b7]{width:26.667vw;text-align:center\n}\n.detailedWrapper .content ul li[data-v-2bb287b7]{padding:4vw 0;border-bottom:1px solid #eee\n}\n.detailedWrapper .content ul li .t1[data-v-2bb287b7]{width:26.667vw;text-align:center\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/integral/detailed.vue"],names:[],mappings:";AACA,kCAAkC,WAAW,iBAAiB,sBAAsB,kBAAkB,iBAAiB;CACtH;AACD,yCAAyC,YAAY,gBAAgB,uDAAiE,qBAAqB,WAAW,kBAAkB,YAAY,sBAAsB,gBAAgB,eAAe;CACxP;AACD,iDAAiD,mBAAmB;CACnE;AACD,sDAAsD,cAAc,eAAe;CAClF;AACD,8DAA8D,oBAAoB,gBAAgB,WAAW,sBAAsB,kBAAkB,sBAAsB,WAAW,oBAAoB;CACzM;AACD,2CAA2C,cAAc,kBAAkB;CAC1E;AACD,8CAA8C,YAAY,gBAAgB,cAAc,6BAA6B,eAAe;CACnI;AACD,8CAA8C,cAAc,4BAA4B;CACvF;AACD,kDAAkD,eAAe,iBAAiB;CACjF;AACD,iDAAiD,cAAc,4BAA4B;CAC1F;AACD,qDAAqD,eAAe,iBAAiB;CACpF",file:"detailed.vue",sourcesContent:["\n.detailedWrapper[data-v-2bb287b7]{width:100%;min-height:100vh;background-color:#fff;font-size:3.733vw;position:relative\n}\n.detailedWrapper .title[data-v-2bb287b7]{width:100vw;height:46.667vw;background:url(../../assets/ico/integral-t-bg.png) no-repeat 50%;background-size:100%;color:#fff;position:relative;padding:4vw;box-sizing:border-box;overflow:hidden;text-align:left\n}\n.detailedWrapper .title .hTitle[data-v-2bb287b7]{margin-top:13.333vw\n}\n.detailedWrapper .title .hTitle span[data-v-2bb287b7]{font-size:8vw;font-weight:700\n}\n.detailedWrapper .title .hTitle .exchangeBtn[data-v-2bb287b7]{margin-left:2.667vw;height:10.667vw;width:40vw;border-radius:5.333vw;text-align:center;border:1px solid #eee;color:#fff;line-height:10.667vw\n}\n.detailedWrapper .title p[data-v-2bb287b7]{line-height:2;margin-top:6.667vw\n}\n.detailedWrapper .content h2[data-v-2bb287b7]{padding:4vw;text-align:left;font-size:4vw;border-bottom:1px solid #eee;font-weight:700\n}\n.detailedWrapper .content h3[data-v-2bb287b7]{padding:4vw 0;border-bottom:1px solid #eee\n}\n.detailedWrapper .content h3 .t1[data-v-2bb287b7]{width:26.667vw;text-align:center\n}\n.detailedWrapper .content ul li[data-v-2bb287b7]{padding:4vw 0;border-bottom:1px solid #eee\n}\n.detailedWrapper .content ul li .t1[data-v-2bb287b7]{width:26.667vw;text-align:center\n}"],sourceRoot:""}])}});
//# sourceMappingURL=21.7654e21f23395ae5409c.js.map