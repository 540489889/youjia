webpackJsonp([11],{BN6G:function(e,t,r){var i=r("FYUn");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r("rjj0")("39457b90",i,!0,{})},FYUn:function(e,t,r){(e.exports=r("FZ+f")(!0)).push([e.i,"\n.serviceBox[data-v-75efb7fe]{width:100%;height:100vh;overflow:hidden;align-items:flex-end\n}\n.serviceWrapper[data-v-75efb7fe]{height:93.333vw;width:100%;box-sizing:border-box;padding:4vw;position:fixed;bottom:0;left:0;background-color:#fff;border-top-left-radius:4vw;border-top-right-radius:4vw\n}\n.serviceWrapper .title[data-v-75efb7fe]{font-size:4.267vw;font-weight:700;text-align:center;position:relative;padding:2vw 0\n}\n.serviceWrapper .title .closeBtn[data-v-75efb7fe]{position:absolute;top:50%;transform:translateY(-50%);right:2.667vw;color:#ccc;font-size:6vw;font-weight:700\n}\n.serviceWrapper .list[data-v-75efb7fe]{text-align:left;margin-top:6.667vw;margin-bottom:6.667vw\n}\n.serviceWrapper .list li[data-v-75efb7fe]{padding:4vw 0;font-size:3.467vw;color:#7f8593\n}\n.serviceWrapper .list li span[data-v-75efb7fe]{margin-right:6.667vw\n}\n.serviceWrapper .serviceBtn[data-v-75efb7fe]{height:10.667vw;line-height:10.667vw;text-align:center;border-radius:5.333vw;width:33.333vw;background-color:#ff3747;margin:4vw auto;color:#fff\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/integralOrder/components/service.vue"],names:[],mappings:";AACA,6BAA6B,WAAW,aAAa,gBAAgB,oBAAoB;CACxF;AACD,iCAAiC,gBAAgB,WAAW,sBAAsB,YAAY,eAAe,SAAS,OAAO,sBAAsB,2BAA2B,2BAA2B;CACxM;AACD,wCAAwC,kBAAkB,gBAAgB,kBAAkB,kBAAkB,aAAa;CAC1H;AACD,kDAAkD,kBAAkB,QAAQ,2BAA2B,cAAc,WAAW,cAAc,eAAe;CAC5J;AACD,uCAAuC,gBAAgB,mBAAmB,qBAAqB;CAC9F;AACD,0CAA0C,cAAc,kBAAkB,aAAa;CACtF;AACD,+CAA+C,oBAAoB;CAClE;AACD,6CAA6C,gBAAgB,qBAAqB,kBAAkB,sBAAsB,eAAe,yBAAyB,gBAAgB,UAAU;CAC3L",file:"service.vue",sourcesContent:["\n.serviceBox[data-v-75efb7fe]{width:100%;height:100vh;overflow:hidden;align-items:flex-end\n}\n.serviceWrapper[data-v-75efb7fe]{height:93.333vw;width:100%;box-sizing:border-box;padding:4vw;position:fixed;bottom:0;left:0;background-color:#fff;border-top-left-radius:4vw;border-top-right-radius:4vw\n}\n.serviceWrapper .title[data-v-75efb7fe]{font-size:4.267vw;font-weight:700;text-align:center;position:relative;padding:2vw 0\n}\n.serviceWrapper .title .closeBtn[data-v-75efb7fe]{position:absolute;top:50%;transform:translateY(-50%);right:2.667vw;color:#ccc;font-size:6vw;font-weight:700\n}\n.serviceWrapper .list[data-v-75efb7fe]{text-align:left;margin-top:6.667vw;margin-bottom:6.667vw\n}\n.serviceWrapper .list li[data-v-75efb7fe]{padding:4vw 0;font-size:3.467vw;color:#7f8593\n}\n.serviceWrapper .list li span[data-v-75efb7fe]{margin-right:6.667vw\n}\n.serviceWrapper .serviceBtn[data-v-75efb7fe]{height:10.667vw;line-height:10.667vw;text-align:center;border-radius:5.333vw;width:33.333vw;background-color:#ff3747;margin:4vw auto;color:#fff\n}"],sourceRoot:""}])},Umc4:function(e,t,r){var i=r("oKw/");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r("rjj0")("92de6666",i,!0,{})},YsyF:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("YnDD"),a={name:"mb",data:function(){return{}},props:{address:Object},methods:{serviceClick:function(){this.$emit("changeServiceClick",this.address)},closeSelected:function(){this.$emit("changeSelected",!1)}},mounted:function(){}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"serviceBox flex-box"},[r("div",{staticClass:"serviceWrapper"},[r("h2",{staticClass:"title"},[e._v("产品安装服务\n      "),r("i",{staticClass:"closeBtn cubeic-wrong",on:{click:function(t){return e.closeSelected()}}})]),e._v(" "),r("ul",{staticClass:"list"},[r("li",{staticClass:"flex-box"},[r("span",[e._v("联系电话")]),e._v(" "),r("p",[e._v(e._s(e.address.phone))])]),e._v(" "),r("li",{staticClass:"flex-box"},[r("span",[e._v("安装地址")]),e._v(" "),r("p",[e._v(e._s(e.address.province+e.address.city+e.address.address))])]),e._v(" "),e._m(0)]),e._v(" "),r("div",{staticClass:"serviceBtn",on:{click:e.serviceClick}},[e._v("确定")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"flex-box"},[t("span",[this._v("安装费用")]),this._v(" "),t("p",[this._v("免费安装")])])}]};var o={name:"mb",data:function(){return{invoiceCompany:!1,isInvoiceRise:!1,name:"",sbCode:"",checkerType:0,optionsType:[{value:0,text:"普通发票"},{value:1,text:"增值税专用发票",disabled:!0}],checkerRise:0,optionsRise:[{value:0,text:"个人"},{value:1,text:"单位"}],checkerContent:0,optionsContent:[{value:0,text:"不开发票"},{value:1,text:"商品明细"}]}},methods:{blurLeave:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},invoiceSub:function(){1==this.checkerContent&&0==this.checkerRise?this.$emit("changeInvoiceSub",{name:1}):1==this.checkerContent&&1==this.checkerRise?this.$emit("changeInvoiceSub",{unit:this.name,sbCode:this.sbCode}):this.$emit("changeInvoiceSub",!1)},closeSelected:function(){this.$emit("changeSelected",!1)},changeInvoiceText:function(e){this.isInvoiceRise=0!==e},changeInvoiceRise:function(e){this.invoiceCompany=0!==e}},mounted:function(){}},s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"invoiceBox flex-box"},[r("div",{staticClass:"invoiceWrapper"},[r("h2",{staticClass:"title"},[e._v("发票\n      "),r("i",{staticClass:"closeBtn cubeic-wrong",on:{click:function(t){return e.closeSelected()}}})]),e._v(" "),r("ul",{staticClass:"list"},[r("li",[r("span",[e._v("发票类型")]),e._v(" "),r("div",{staticClass:"checkDiv"},[r("cube-checker",{attrs:{options:e.optionsType,type:"radio"},model:{value:e.checkerType,callback:function(t){e.checkerType=t},expression:"checkerType"}})],1)]),e._v(" "),e.isInvoiceRise?r("li",{staticClass:"riseLi"},[r("span",[e._v("发票抬头")]),e._v(" "),r("div",{staticClass:"checkDiv"},[r("cube-checker",{attrs:{options:e.optionsRise,type:"radio"},on:{input:e.changeInvoiceRise},model:{value:e.checkerRise,callback:function(t){e.checkerRise=t},expression:"checkerRise"}})],1),e._v(" "),r("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[e.invoiceCompany?r("div",[r("h6",{staticClass:"flex-box"},[r("span",[e._v("单位名称")]),e._v(" "),r("cube-input",{staticClass:"box-1",attrs:{placeholder:"请填写单位名称"},on:{blur:e.blurLeave},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),r("h6",{staticClass:"flex-box"},[r("span",[e._v("纳税人识别码")]),e._v(" "),r("cube-input",{staticClass:"box-1",attrs:{placeholder:"请填写纳税人识别码"},on:{blur:e.blurLeave},model:{value:e.sbCode,callback:function(t){e.sbCode=t},expression:"sbCode"}})],1)]):e._e()])],1):e._e(),e._v(" "),r("li",[r("span",[e._v("发票内容")]),e._v(" "),r("div",{staticClass:"checkDiv"},[r("cube-checker",{attrs:{options:e.optionsContent,type:"radio"},on:{input:e.changeInvoiceText},model:{value:e.checkerContent,callback:function(t){e.checkerContent=t},expression:"checkerContent"}})],1)])]),e._v(" "),r("div",{staticClass:"invoiceBtn",on:{click:e.invoiceSub}},[e._v("确定")])])])},staticRenderFns:[]};var d={name:"ordersWrapper",data:function(){return{selected:!1,selectedTwo:!1,maskShowTwo:!1,maskShow:!1,remarks:"",number:1,address:{},goodsarr:{},express:{},total_price:0,orderInfor:{}}},components:{orderService:r("VU/8")(a,n,!1,function(e){r("BN6G")},"data-v-75efb7fe",null).exports,orderInvoice:r("VU/8")(o,s,!1,function(e){r("ojMW")},"data-v-4550ed14",null).exports,CubePage:i.a},methods:{rightSubClick:function(){var e=this,t={};t.goods_id=this.$route.query.goods_id,t.count=this.$route.query.count,t.address_id=this.address.id,this.http.post(this.ports.integral.points,t,function(t){if(e.$store.commit("changeLoading",!1),console.log(t),e.showToastTxtOnly(t.msg),e.toastTime&&e.toastTime.hide(),t.success){var r=t.data;e.list=r.res}else e.showToastTxtOnly(t.msg)})},checkAddress:function(){var e=this.$route.query.goods_id,t=this.$route.query.key,r=this.$route.query.count;this.$router.push({path:"/integralOrder/address",query:{goods_id:e,key:t,count:r}})},getOrdersData:function(){var e=this,t=this.$route.query.address,r=this.$route.query.goods_id,i=this.$route.query.count;this.number=i,console.log(t),this.http.get(this.ports.integral.create+"?goods_id="+r+"&count="+i,function(r){if(e.$store.commit("changeLoading",!1),console.log(r),r.success){var i=r.data;e.address=i.address,t&&(e.address=JSON.parse(t)),e.goodsarr=i.goods,e.total_price=i.total_price;e.orderInfor.address=e.address}else e.showToastTxtOnly(r.msg)})},remarksVal:function(e){console.log(this.orderInfor)},changeInvoiceSub:function(e){var t=this;if(e){if(1==e.name)e.name=this.address.name;else{if(!e.unit)return this.showToastTxtOnly("请输入单位名称"),!1;if(!e.sbCode)return this.showToastTxtOnly("请输入纳税人识别码"),!1}this.goodsarr.forEach(function(r,i){"a"==r.goods.a&&t.$set(r.goods,"invoice",e)}),this.changeSelectedTwo(!1)}else this.changeSelectedTwo(e)},changeServiceClick:function(e){var t=this;this.goodsarr.forEach(function(r,i){"b"==r.goods.b&&t.$set(r.goods,"ress",e)}),this.changeSelected(!1)},confirmClick:function(e,t,r){var i=this,a=this;"invoice"===e?(this.maskShowTwo=!0,setTimeout(function(){a.selectedTwo=!0,i.goodsarr.forEach(function(e,t){e.goods.a="b"}),t.a="a"},200)):(this.maskShow=!0,setTimeout(function(){i.goodsarr.forEach(function(e,t){e.goods.b="a"}),t.b="b",a.selected=!0},200))},changeSelected:function(e){this.selected=!1;var t=this;e||setTimeout(function(){t.maskShow=!1},300)},changeSelectedTwo:function(e){this.selectedTwo=e;var t=this;this.selectedTwo||setTimeout(function(){t.maskShowTwo=!1},300)},showToastTxtOnly:function(e){this.toast=this.$createToast({txt:e,type:"txt"}),this.toast.show()},reduce:function(){if(this.number<=1)return this.showToastTxtOnly("受不了了，宝贝不能再减少了哦"),!1;this.number-=1},plus:function(){if(this.number>=10)return this.showToastTxtOnly("已经没有更多的库存了，下次再来吧"),!1;this.number+=1},handleNumChange:function(){this.number>=10&&(this.showToastTxtOnly("超出范围"),this.number=10)}},mounted:function(){this.getOrdersData()}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ordersWrapper"},[e.$store.state.isLoading?r("my-loading"):e._e(),e._v(" "),e.address?r("div",{staticClass:"adderssBox flex-box",on:{click:e.checkAddress}},[e._m(0),e._v(" "),r("div",{staticClass:"address-text box-1"},[r("h4",[e._v(e._s(e.address.name)+"  "),r("span",[e._v(e._s(e.address.phone))])]),e._v(" "),r("h6",{staticClass:"media_desc"},[e._v(e._s(e.address.city+e.address.area+e.address.address))])]),e._v(" "),r("div",{staticClass:"address-right cubeic-arrow"})]):r("div",{staticClass:"adderssBox flex-box",on:{click:e.checkAddress}},[e._m(1),e._v(" "),e._m(2),e._v(" "),r("div",{staticClass:"address-right cubeic-arrow"})]),e._v(" "),r("div",{staticClass:"orderInfor"},[r("div",{staticClass:"infor-1 flex-box"},[r("div",{staticClass:"left"},[r("img",{attrs:{src:e.goodsarr.logo,alt:""}})]),e._v(" "),r("div",{staticClass:"text box-1"},[r("div",{staticClass:"flex-box"},[r("h6",{staticClass:"media_desc box-1"},[e._v(e._s(e.goodsarr.title))]),e._v(" "),r("span",[e._v("￥"+e._s(e.goodsarr.point_price))])]),e._v(" "),r("p",{staticClass:"desc media_desc"},[e._v(e._s(e.goodsarr.desc))])])]),e._v(" "),r("ul",{staticClass:"infor-list"},[r("li",[r("div",{staticClass:"nummber-infor flex-box"},[r("h2",[e._v("数量")]),e._v(" "),r("div",{staticClass:"right flex-box"},[r("b",[e._v(e._s(e.number))])])])]),e._v(" "),r("li",{staticClass:"flex-box checkLi"},[r("span",[e._v("配送方式")]),e._v(" "),r("div",{staticClass:"liVal"},[e._v(e._s(e.goodsarr.express_desc))])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("li",{staticClass:"subtotal"},[e._v("\n        共"+e._s(e.number)+"件 小计："),r("span",[e._v(e._s(e.number*e.goodsarr.point_price)+"元")])])])]),e._v(" "),e._m(5),e._v(" "),r("div",{staticClass:"subOrder flex-box"},[r("div",{staticClass:"left box-1"},[e._v("\n      共一件 合计："),r("span",[e._v(e._s(e.number*e.goodsarr.point_price)+"元")])]),e._v(" "),r("div",{staticClass:"rightBtn",on:{click:e.rightSubClick}},[e._v("提交订单")])]),e._v(" "),e.maskShow?r("cube-page",{attrs:{type:"swipe-scroll",title:"Scroll"}},[r("template",{slot:"content"},[r("div",{staticClass:"scroll-list-wrap"},[r("cube-scroll",[r("transition",{attrs:{name:"slide-fade"}},[e.selected?r("order-service",{attrs:{list:e.address},on:{changeServiceClick:e.changeServiceClick,changeSelected:function(t){return e.changeSelected()}}}):e._e()],1)],1)],1)])],2):e._e(),e._v(" "),e.maskShowTwo?r("cube-page",{attrs:{type:"swipe-scroll",title:"Scroll"}},[r("template",{slot:"content"},[r("div",{staticClass:"scroll-list-wrap"},[r("cube-scroll",[r("transition",{attrs:{name:"slide-fade"}},[e.selectedTwo?r("order-invoice",{on:{changeInvoiceSub:e.changeInvoiceSub,changeSelected:function(t){return e.changeSelectedTwo()}}}):e._e()],1)],1)],1)])],2):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"address-ico flex-box"},[t("i")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"address-ico flex-box"},[t("i")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"address-text box-1"},[t("h1",[this._v("请新增地址")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"flex-box checkLi"},[t("span",[this._v("开具发票")]),this._v(" "),t("div",{staticClass:"liVal"},[this._v("本次不开具发票")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"flex-box checkLi"},[t("span",[this._v("安装服务")]),this._v(" "),t("div",{staticClass:"liVal"},[this._v("本次不需要安装")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pay-ui flex-box"},[t("span",{staticClass:"flex-box"},[t("i",{staticClass:"wx-ico"}),this._v("微信支付")]),this._v(" "),t("b",[this._v("默认支付方式")])])}]};var A=r("VU/8")(d,c,!1,function(e){r("Umc4")},"data-v-6826f9fc",null);t.default=A.exports},"oKw/":function(e,t,r){var i=r("kxFB");(e.exports=r("FZ+f")(!0)).push([e.i,"\n.slide-fade-enter-active[data-v-6826f9fc],.slide-fade-leave-active[data-v-6826f9fc]{transition:all .6s ease\n}\n.slide-fade-enter[data-v-6826f9fc],.slide-fade-leave-to[data-v-6826f9fc]{transform:translateY(93.333vw);opacity:0\n}\n.scroll-list-wrap[data-v-6826f9fc]{position:fixed;bottom:0;left:0;width:100%;height:100%;z-index:200;background:rgba(0,0,0,.6);filter:alpha(opacity=60)\n}\n.ordersWrapper[data-v-6826f9fc]{background-color:#f0f8ff;font-size:3.733vw;width:100%;min-height:100vh;padding:2.667vw 4vw;box-sizing:border-box;position:relative;padding-bottom:20vw\n}\n.ordersWrapper .subOrder[data-v-6826f9fc]{position:fixed;bottom:0;left:0;width:100%;height:17.333vw;box-sizing:border-box;padding:0 4vw;background-color:#fff\n}\n.ordersWrapper .subOrder .left[data-v-6826f9fc]{text-align:right;margin-right:2.667vw;font-size:4vw\n}\n.ordersWrapper .subOrder .left span[data-v-6826f9fc]{color:#ff3747;font-weight:700\n}\n.ordersWrapper .subOrder .rightBtn[data-v-6826f9fc]{height:10.667vw;width:34.667vw;line-height:10.667vw;text-align:center;background-color:#ff3747;color:#fff;border-radius:5.333vw\n}\n.ordersWrapper .adderssBox[data-v-6826f9fc]{background-color:#fff;padding:4vw;border-radius:1.333vw;margin-bottom:2.667vw\n}\n.ordersWrapper .adderssBox .address-ico[data-v-6826f9fc]{background-color:#f0f8ff;width:8vw;height:8vw;border-radius:50%;justify-content:center\n}\n.ordersWrapper .adderssBox .address-ico i[data-v-6826f9fc]{width:3.733vw;height:4.667vw;background:url("+i(r("oNv+"))+") no-repeat 50%;background-size:100%\n}\n.ordersWrapper .adderssBox .address-text[data-v-6826f9fc]{text-align:left;margin:0 2vw\n}\n.ordersWrapper .adderssBox .address-text h1[data-v-6826f9fc]{font-size:4.8vw;font-weight:700\n}\n.ordersWrapper .adderssBox .address-text h4[data-v-6826f9fc]{font-size:3.467vw;margin-bottom:1.333vw\n}\n.ordersWrapper .adderssBox .address-text h4 span[data-v-6826f9fc]{color:#7f8593;margin-left:1.333vw\n}\n.ordersWrapper .adderssBox .address-text h6[data-v-6826f9fc]{font-size:4vw\n}\n.ordersWrapper .adderssBox .address-right[data-v-6826f9fc]{font-size:5.333vw\n}\n.ordersWrapper .orderInfor[data-v-6826f9fc]{background-color:#fff;border-radius:1.333vw;padding:4vw;margin-bottom:2.667vw\n}\n.ordersWrapper .orderInfor .infor-1[data-v-6826f9fc]{align-items:flex-start\n}\n.ordersWrapper .orderInfor .infor-1 .left[data-v-6826f9fc]{margin-right:2.667vw\n}\n.ordersWrapper .orderInfor .infor-1 .left img[data-v-6826f9fc]{width:22.667vw;height:22.667vw;border-radius:2vw\n}\n.ordersWrapper .orderInfor .infor-1 .desc[data-v-6826f9fc]{line-height:1.4\n}\n.ordersWrapper .orderInfor .infor-1 .text[data-v-6826f9fc]{text-align:left\n}\n.ordersWrapper .orderInfor .infor-1 .text .flex-box[data-v-6826f9fc]{align-items:flex-start\n}\n.ordersWrapper .orderInfor .infor-1 .text .flex-box span[data-v-6826f9fc]{color:#ff0207;font-size:5.333vw;font-weight:700\n}\n.ordersWrapper .orderInfor .infor-1 .text .typeInfo[data-v-6826f9fc]{height:9.333vw;line-height:9.333vw;text-align:center;background-color:#f2f2f2;color:#7f8593;padding:0 4vw;border-radius:4.667vw;display:inline-block;margin-top:2.667vw\n}\n.ordersWrapper .orderInfor .infor-list li .nummber-infor[data-v-6826f9fc]{justify-content:space-between\n}\n.ordersWrapper .orderInfor .infor-list li .nummber-infor h2[data-v-6826f9fc]{margin:3.333vw 0\n}\n.ordersWrapper .orderInfor .infor-list li .nummber-infor .right span[data-v-6826f9fc]{font-size:4vw;width:4vw;height:4vw;text-align:center\n}\n.ordersWrapper .orderInfor .infor-list .checkLi[data-v-6826f9fc]{justify-content:space-between;padding:4vw 0\n}\n.ordersWrapper .orderInfor .infor-list .checkLi .liVal[data-v-6826f9fc]{color:#7f8593;font-size:3.467vw;margin-left:2.667vw\n}\n.ordersWrapper .orderInfor .infor-list .checkLi .liVal .cube-input[data-v-6826f9fc]:after{content:normal\n}\n.ordersWrapper .orderInfor .infor-list .subtotal[data-v-6826f9fc]{margin-top:2.667vw;text-align:right;font-size:3.467vw\n}\n.ordersWrapper .orderInfor .infor-list .subtotal span[data-v-6826f9fc]{color:#ff3747\n}\n.ordersWrapper .pay-ui[data-v-6826f9fc]{padding:5.333vw 4vw;justify-content:space-between;margin-top:2.667vw;background-color:#fff;border-radius:1.333vw\n}\n.ordersWrapper .pay-ui span i[data-v-6826f9fc]{width:4.8vw;height:4.8vw;background:url("+i(r("C23/"))+") no-repeat 50%;background-size:100%;margin-right:1.333vw\n}\n.ordersWrapper .pay-ui b[data-v-6826f9fc]{color:#7f8593;font-size:3.467vw\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/integralOrder/orders.vue"],names:[],mappings:";AACA,oFAAoF,uBAAuB;CAC1G;AACD,yEAAyE,+BAA+B,SAAS;CAChH;AACD,mCAAmC,eAAe,SAAS,OAAO,WAAW,YAAY,YAAY,0BAA0B,wBAAwB;CACtJ;AACD,gCAAgC,yBAAyB,kBAAkB,WAAW,iBAAiB,oBAAoB,sBAAsB,kBAAkB,mBAAmB;CACrL;AACD,0CAA0C,eAAe,SAAS,OAAO,WAAW,gBAAgB,sBAAsB,cAAc,qBAAqB;CAC5J;AACD,gDAAgD,iBAAiB,qBAAqB,aAAa;CAClG;AACD,qDAAqD,cAAc,eAAe;CACjF;AACD,oDAAoD,gBAAgB,eAAe,qBAAqB,kBAAkB,yBAAyB,WAAW,qBAAqB;CAClL;AACD,4CAA4C,sBAAsB,YAAY,sBAAsB,qBAAqB;CACxH;AACD,yDAAyD,yBAAyB,UAAU,WAAW,kBAAkB,sBAAsB;CAC9I;AACD,2DAA2D,cAAc,eAAe,uDAA+D,oBAAoB;CAC1K;AACD,0DAA0D,gBAAgB,YAAY;CACrF;AACD,6DAA6D,gBAAgB,eAAe;CAC3F;AACD,6DAA6D,kBAAkB,qBAAqB;CACnG;AACD,kEAAkE,cAAc,mBAAmB;CAClG;AACD,6DAA6D,aAAa;CACzE;AACD,2DAA2D,iBAAiB;CAC3E;AACD,4CAA4C,sBAAsB,sBAAsB,YAAY,qBAAqB;CACxH;AACD,qDAAqD,sBAAsB;CAC1E;AACD,2DAA2D,oBAAoB;CAC9E;AACD,+DAA+D,eAAe,gBAAgB,iBAAiB;CAC9G;AACD,2DAA2D,eAAe;CACzE;AACD,2DAA2D,eAAe;CACzE;AACD,qEAAqE,sBAAsB;CAC1F;AACD,0EAA0E,cAAc,kBAAkB,eAAe;CACxH;AACD,qEAAqE,eAAe,oBAAoB,kBAAkB,yBAAyB,cAAc,cAAc,sBAAsB,qBAAqB,kBAAkB;CAC3O;AACD,0EAA0E,6BAA6B;CACtG;AACD,6EAA6E,gBAAgB;CAC5F;AACD,sFAAsF,cAAc,UAAU,WAAW,iBAAiB;CACzI;AACD,iEAAiE,8BAA8B,aAAa;CAC3G;AACD,wEAAwE,cAAc,kBAAkB,mBAAmB;CAC1H;AACD,0FAA0F,cAAc;CACvG;AACD,kEAAkE,mBAAmB,iBAAiB,iBAAiB;CACtH;AACD,uEAAuE,aAAa;CACnF;AACD,wCAAwC,oBAAoB,8BAA8B,mBAAmB,sBAAsB,qBAAqB;CACvJ;AACD,+CAA+C,YAAY,aAAa,uDAA0D,qBAAqB,oBAAoB;CAC1K;AACD,0CAA0C,cAAc,iBAAiB;CACxE",file:"orders.vue",sourcesContent:["\n.slide-fade-enter-active[data-v-6826f9fc],.slide-fade-leave-active[data-v-6826f9fc]{transition:all .6s ease\n}\n.slide-fade-enter[data-v-6826f9fc],.slide-fade-leave-to[data-v-6826f9fc]{transform:translateY(93.333vw);opacity:0\n}\n.scroll-list-wrap[data-v-6826f9fc]{position:fixed;bottom:0;left:0;width:100%;height:100%;z-index:200;background:rgba(0,0,0,.6);filter:alpha(opacity=60)\n}\n.ordersWrapper[data-v-6826f9fc]{background-color:#f0f8ff;font-size:3.733vw;width:100%;min-height:100vh;padding:2.667vw 4vw;box-sizing:border-box;position:relative;padding-bottom:20vw\n}\n.ordersWrapper .subOrder[data-v-6826f9fc]{position:fixed;bottom:0;left:0;width:100%;height:17.333vw;box-sizing:border-box;padding:0 4vw;background-color:#fff\n}\n.ordersWrapper .subOrder .left[data-v-6826f9fc]{text-align:right;margin-right:2.667vw;font-size:4vw\n}\n.ordersWrapper .subOrder .left span[data-v-6826f9fc]{color:#ff3747;font-weight:700\n}\n.ordersWrapper .subOrder .rightBtn[data-v-6826f9fc]{height:10.667vw;width:34.667vw;line-height:10.667vw;text-align:center;background-color:#ff3747;color:#fff;border-radius:5.333vw\n}\n.ordersWrapper .adderssBox[data-v-6826f9fc]{background-color:#fff;padding:4vw;border-radius:1.333vw;margin-bottom:2.667vw\n}\n.ordersWrapper .adderssBox .address-ico[data-v-6826f9fc]{background-color:#f0f8ff;width:8vw;height:8vw;border-radius:50%;justify-content:center\n}\n.ordersWrapper .adderssBox .address-ico i[data-v-6826f9fc]{width:3.733vw;height:4.667vw;background:url(../../assets/ico/address-ico.png) no-repeat 50%;background-size:100%\n}\n.ordersWrapper .adderssBox .address-text[data-v-6826f9fc]{text-align:left;margin:0 2vw\n}\n.ordersWrapper .adderssBox .address-text h1[data-v-6826f9fc]{font-size:4.8vw;font-weight:700\n}\n.ordersWrapper .adderssBox .address-text h4[data-v-6826f9fc]{font-size:3.467vw;margin-bottom:1.333vw\n}\n.ordersWrapper .adderssBox .address-text h4 span[data-v-6826f9fc]{color:#7f8593;margin-left:1.333vw\n}\n.ordersWrapper .adderssBox .address-text h6[data-v-6826f9fc]{font-size:4vw\n}\n.ordersWrapper .adderssBox .address-right[data-v-6826f9fc]{font-size:5.333vw\n}\n.ordersWrapper .orderInfor[data-v-6826f9fc]{background-color:#fff;border-radius:1.333vw;padding:4vw;margin-bottom:2.667vw\n}\n.ordersWrapper .orderInfor .infor-1[data-v-6826f9fc]{align-items:flex-start\n}\n.ordersWrapper .orderInfor .infor-1 .left[data-v-6826f9fc]{margin-right:2.667vw\n}\n.ordersWrapper .orderInfor .infor-1 .left img[data-v-6826f9fc]{width:22.667vw;height:22.667vw;border-radius:2vw\n}\n.ordersWrapper .orderInfor .infor-1 .desc[data-v-6826f9fc]{line-height:1.4\n}\n.ordersWrapper .orderInfor .infor-1 .text[data-v-6826f9fc]{text-align:left\n}\n.ordersWrapper .orderInfor .infor-1 .text .flex-box[data-v-6826f9fc]{align-items:flex-start\n}\n.ordersWrapper .orderInfor .infor-1 .text .flex-box span[data-v-6826f9fc]{color:#ff0207;font-size:5.333vw;font-weight:700\n}\n.ordersWrapper .orderInfor .infor-1 .text .typeInfo[data-v-6826f9fc]{height:9.333vw;line-height:9.333vw;text-align:center;background-color:#f2f2f2;color:#7f8593;padding:0 4vw;border-radius:4.667vw;display:inline-block;margin-top:2.667vw\n}\n.ordersWrapper .orderInfor .infor-list li .nummber-infor[data-v-6826f9fc]{justify-content:space-between\n}\n.ordersWrapper .orderInfor .infor-list li .nummber-infor h2[data-v-6826f9fc]{margin:3.333vw 0\n}\n.ordersWrapper .orderInfor .infor-list li .nummber-infor .right span[data-v-6826f9fc]{font-size:4vw;width:4vw;height:4vw;text-align:center\n}\n.ordersWrapper .orderInfor .infor-list .checkLi[data-v-6826f9fc]{justify-content:space-between;padding:4vw 0\n}\n.ordersWrapper .orderInfor .infor-list .checkLi .liVal[data-v-6826f9fc]{color:#7f8593;font-size:3.467vw;margin-left:2.667vw\n}\n.ordersWrapper .orderInfor .infor-list .checkLi .liVal .cube-input[data-v-6826f9fc]:after{content:normal\n}\n.ordersWrapper .orderInfor .infor-list .subtotal[data-v-6826f9fc]{margin-top:2.667vw;text-align:right;font-size:3.467vw\n}\n.ordersWrapper .orderInfor .infor-list .subtotal span[data-v-6826f9fc]{color:#ff3747\n}\n.ordersWrapper .pay-ui[data-v-6826f9fc]{padding:5.333vw 4vw;justify-content:space-between;margin-top:2.667vw;background-color:#fff;border-radius:1.333vw\n}\n.ordersWrapper .pay-ui span i[data-v-6826f9fc]{width:4.8vw;height:4.8vw;background:url(../../assets/ico/wx-ico.png) no-repeat 50%;background-size:100%;margin-right:1.333vw\n}\n.ordersWrapper .pay-ui b[data-v-6826f9fc]{color:#7f8593;font-size:3.467vw\n}"],sourceRoot:""}])},ojMW:function(e,t,r){var i=r("s5Vi");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r("rjj0")("2395f695",i,!0,{})},s5Vi:function(e,t,r){(e.exports=r("FZ+f")(!0)).push([e.i,"\n.invoiceBox[data-v-4550ed14]{width:100%;height:100vh;overflow:hidden;align-items:flex-end\n}\n.invoiceWrapper[data-v-4550ed14]{height:113.333vw;width:100%;box-sizing:border-box;padding:4vw;position:fixed;bottom:0;left:0;background-color:#fff;border-top-left-radius:4vw;border-top-right-radius:4vw\n}\n.invoiceWrapper .title[data-v-4550ed14]{font-size:4.267vw;font-weight:700;text-align:center;position:relative;padding:2vw 0\n}\n.invoiceWrapper .title .closeBtn[data-v-4550ed14]{position:absolute;top:50%;transform:translateY(-50%);right:2.667vw;color:#ccc;font-size:6vw;font-weight:700\n}\n.invoiceWrapper .list[data-v-4550ed14]{text-align:left;margin-bottom:4vw\n}\n.invoiceWrapper .list li[data-v-4550ed14]{padding:2.667vw 0\n}\n.invoiceWrapper .list li h6[data-v-4550ed14]{font-size:3.467vw\n}\n.invoiceWrapper .list li h6 span[data-v-4550ed14]{margin-right:2vw\n}\n.invoiceWrapper .list li h6 .cube-input[data-v-4550ed14]:after{content:normal\n}\n.invoiceWrapper .list li h6 .cube-input[data-v-4550ed14]{font-size:12px\n}\n.invoiceWrapper .list li h6[data-v-4550ed14]:first-child{margin-top:1.333vw\n}\n.invoiceWrapper .list li .checkDiv[data-v-4550ed14]{margin-top:2.667vw\n}\n.invoiceWrapper .list .riseLi[data-v-4550ed14]{padding-bottom:0\n}\n.invoiceWrapper .invoiceBtn[data-v-4550ed14]{height:10.667vw;line-height:10.667vw;text-align:center;border-radius:5.333vw;width:33.333vw;background-color:#ff3747;margin:4vw auto;color:#fff\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/integralOrder/components/invoice.vue"],names:[],mappings:";AACA,6BAA6B,WAAW,aAAa,gBAAgB,oBAAoB;CACxF;AACD,iCAAiC,iBAAiB,WAAW,sBAAsB,YAAY,eAAe,SAAS,OAAO,sBAAsB,2BAA2B,2BAA2B;CACzM;AACD,wCAAwC,kBAAkB,gBAAgB,kBAAkB,kBAAkB,aAAa;CAC1H;AACD,kDAAkD,kBAAkB,QAAQ,2BAA2B,cAAc,WAAW,cAAc,eAAe;CAC5J;AACD,uCAAuC,gBAAgB,iBAAiB;CACvE;AACD,0CAA0C,iBAAiB;CAC1D;AACD,6CAA6C,iBAAiB;CAC7D;AACD,kDAAkD,gBAAgB;CACjE;AACD,+DAA+D,cAAc;CAC5E;AACD,yDAAyD,cAAc;CACtE;AACD,yDAAyD,kBAAkB;CAC1E;AACD,oDAAoD,kBAAkB;CACrE;AACD,+CAA+C,gBAAgB;CAC9D;AACD,6CAA6C,gBAAgB,qBAAqB,kBAAkB,sBAAsB,eAAe,yBAAyB,gBAAgB,UAAU;CAC3L",file:"invoice.vue",sourcesContent:["\n.invoiceBox[data-v-4550ed14]{width:100%;height:100vh;overflow:hidden;align-items:flex-end\n}\n.invoiceWrapper[data-v-4550ed14]{height:113.333vw;width:100%;box-sizing:border-box;padding:4vw;position:fixed;bottom:0;left:0;background-color:#fff;border-top-left-radius:4vw;border-top-right-radius:4vw\n}\n.invoiceWrapper .title[data-v-4550ed14]{font-size:4.267vw;font-weight:700;text-align:center;position:relative;padding:2vw 0\n}\n.invoiceWrapper .title .closeBtn[data-v-4550ed14]{position:absolute;top:50%;transform:translateY(-50%);right:2.667vw;color:#ccc;font-size:6vw;font-weight:700\n}\n.invoiceWrapper .list[data-v-4550ed14]{text-align:left;margin-bottom:4vw\n}\n.invoiceWrapper .list li[data-v-4550ed14]{padding:2.667vw 0\n}\n.invoiceWrapper .list li h6[data-v-4550ed14]{font-size:3.467vw\n}\n.invoiceWrapper .list li h6 span[data-v-4550ed14]{margin-right:2vw\n}\n.invoiceWrapper .list li h6 .cube-input[data-v-4550ed14]:after{content:normal\n}\n.invoiceWrapper .list li h6 .cube-input[data-v-4550ed14]{font-size:12px\n}\n.invoiceWrapper .list li h6[data-v-4550ed14]:first-child{margin-top:1.333vw\n}\n.invoiceWrapper .list li .checkDiv[data-v-4550ed14]{margin-top:2.667vw\n}\n.invoiceWrapper .list .riseLi[data-v-4550ed14]{padding-bottom:0\n}\n.invoiceWrapper .invoiceBtn[data-v-4550ed14]{height:10.667vw;line-height:10.667vw;text-align:center;border-radius:5.333vw;width:33.333vw;background-color:#ff3747;margin:4vw auto;color:#fff\n}"],sourceRoot:""}])}});
//# sourceMappingURL=11.c0a293fd490cfe70005d.js.map