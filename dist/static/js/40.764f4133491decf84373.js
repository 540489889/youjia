webpackJsonp([40],{aRuH:function(t,c,n){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var s={name:"success",data:function(){return{succ:!1,msg:""}},created:function(){this.getOrderState()},methods:{getOrderState:function(){var t=this,c=this.$route.query.id;this.http.get(this.ports.order.orderstatus+"?id="+c,function(c){t.$store.commit("changeLoading",!1),t.msg=c.data,c.success?t.succ=!0:t.succ=!1})},lookDetails:function(){this.$router.push({path:"/order/details",query:{goods_id:id}})}},mounted:function(){}},e={render:function(){var t=this,c=t.$createElement,n=t._self._c||c;return n("div",{staticClass:"success"},[t.$store.state.isLoading?n("my-loading"):t._e(),t._v(" "),n("div",{staticClass:"content"},[n("h1",[t.succ?n("div",[n("i",{staticClass:"cubeic-right"}),t._v(" "),n("p",[t._v(t._s(t.msg))])]):t._e(),t._v(" "),t.succ?t._e():n("div",[n("i",{staticClass:"cubeic-wrong"}),t._v(" "),n("p",[t._v(t._s(t.msg))])])]),t._v(" "),n("div",{staticClass:"btnBox flex-box"},[n("a",{staticClass:"lookInfo",on:{click:t.lookDetails}},[t._v("查看详情")]),t._v(" "),n("router-link",{staticClass:"home",attrs:{tag:"a",to:"/"}},[t._v("商城首页")])],1)])],1)},staticRenderFns:[]};var o=n("VU/8")(s,e,!1,function(t){n("vFQ5")},"data-v-0f9ddcf2",null);c.default=o.exports},fNk6:function(t,c,n){(t.exports=n("FZ+f")(!0)).push([t.i,"\n.success[data-v-0f9ddcf2]{width:100%;min-height:100vh;background-color:#f0f8ff;font-size:3.733vw\n}\n.success .content[data-v-0f9ddcf2]{overflow:hidden\n}\n.success .content h1[data-v-0f9ddcf2]{margin-top:26.667vw\n}\n.success .content h1 i[data-v-0f9ddcf2]{font-size:16vw;color:#27cd32\n}\n.success .content h1 .cubeic-wrong[data-v-0f9ddcf2]{color:red\n}\n.success .content h1 p[data-v-0f9ddcf2]{line-height:2;color:#000\n}\n.success .content .btnBox[data-v-0f9ddcf2]{justify-content:center;margin-top:8vw\n}\n.success .content .btnBox a[data-v-0f9ddcf2]{width:33.333vw;height:10.667vw;text-align:center;border-radius:5.333vw;line-height:10.667vw\n}\n.success .content .btnBox .lookInfo[data-v-0f9ddcf2]{margin-right:1.333vw;border:1px solid #7f8593;color:#000\n}\n.success .content .btnBox .home[data-v-0f9ddcf2]{margin-left:1.333vw;background-color:#ff3747;color:#fff\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/order/success.vue"],names:[],mappings:";AACA,0BAA0B,WAAW,iBAAiB,yBAAyB,iBAAiB;CAC/F;AACD,mCAAmC,eAAe;CACjD;AACD,sCAAsC,mBAAmB;CACxD;AACD,wCAAwC,eAAe,aAAa;CACnE;AACD,oDAAoD,SAAS;CAC5D;AACD,wCAAwC,cAAc,UAAU;CAC/D;AACD,2CAA2C,uBAAuB,cAAc;CAC/E;AACD,6CAA6C,eAAe,gBAAgB,kBAAkB,sBAAsB,oBAAoB;CACvI;AACD,qDAAqD,qBAAqB,yBAAyB,UAAU;CAC5G;AACD,iDAAiD,oBAAoB,yBAAyB,UAAU;CACvG",file:"success.vue",sourcesContent:["\n.success[data-v-0f9ddcf2]{width:100%;min-height:100vh;background-color:#f0f8ff;font-size:3.733vw\n}\n.success .content[data-v-0f9ddcf2]{overflow:hidden\n}\n.success .content h1[data-v-0f9ddcf2]{margin-top:26.667vw\n}\n.success .content h1 i[data-v-0f9ddcf2]{font-size:16vw;color:#27cd32\n}\n.success .content h1 .cubeic-wrong[data-v-0f9ddcf2]{color:red\n}\n.success .content h1 p[data-v-0f9ddcf2]{line-height:2;color:#000\n}\n.success .content .btnBox[data-v-0f9ddcf2]{justify-content:center;margin-top:8vw\n}\n.success .content .btnBox a[data-v-0f9ddcf2]{width:33.333vw;height:10.667vw;text-align:center;border-radius:5.333vw;line-height:10.667vw\n}\n.success .content .btnBox .lookInfo[data-v-0f9ddcf2]{margin-right:1.333vw;border:1px solid #7f8593;color:#000\n}\n.success .content .btnBox .home[data-v-0f9ddcf2]{margin-left:1.333vw;background-color:#ff3747;color:#fff\n}"],sourceRoot:""}])},vFQ5:function(t,c,n){var s=n("fNk6");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("15d24f0a",s,!0,{})}});
//# sourceMappingURL=40.764f4133491decf84373.js.map