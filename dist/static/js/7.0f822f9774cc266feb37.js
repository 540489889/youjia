webpackJsonp([7],{"54mn":function(e,t,a){"use strict";var r={name:"mb",data:function(){return{}},props:{address:Object},methods:{serviceClick:function(){this.$emit("changeServiceClick",this.address)},closeSelected:function(){this.$emit("changeSelected",!1)}},mounted:function(){}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"serviceBox flex-box"},[a("div",{staticClass:"serviceWrapper"},[a("h2",{staticClass:"title"},[e._v("产品安装服务\n      "),a("i",{staticClass:"closeBtn cubeic-wrong",on:{click:function(t){return e.closeSelected()}}})]),e._v(" "),a("ul",{staticClass:"list"},[a("li",{staticClass:"flex-box"},[a("span",[e._v("联系电话")]),e._v(" "),a("p",[e._v(e._s(e.address.phone))])]),e._v(" "),a("li",{staticClass:"flex-box"},[a("span",[e._v("安装地址")]),e._v(" "),a("p",[e._v(e._s(e.address.province+e.address.city+e.address.address))])]),e._v(" "),e._m(0)]),e._v(" "),a("div",{staticClass:"serviceBtn",on:{click:e.serviceClick}},[e._v("确定")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"flex-box"},[t("span",[this._v("安装费用")]),this._v(" "),t("p",[this._v("免费安装")])])}]};var o=a("VU/8")(r,i,!1,function(e){a("vhFy")},"data-v-740cd732",null);t.a=o.exports},G5rp:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("YnDD"),i=a("54mn"),o=a("ry+v"),s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"serviceBox flex-box"},[a("div",{staticClass:"serviceWrapper"},[a("h2",{staticClass:"title"},[e._v("请选择是否需要安装服务\n      "),a("i",{staticClass:"closeBtn cubeic-wrong",on:{click:function(t){return e.closeSelected()}}})]),e._v(" "),a("ul",{staticClass:"list"},[a("li",{staticClass:"flex-box"},[a("cube-radio-group",{attrs:{options:e.options2,position:"right","hollow-style":!0},model:{value:e.selected2,callback:function(t){e.selected2=t},expression:"selected2"}})],1)]),e._v(" "),a("div",{staticClass:"serviceBtn",on:{click:e.handleClickCancel}},[e._v("确定")])])])},staticRenderFns:[]};var n=a("VU/8")({name:"mb",data:function(){return{selected2:0,options2:[{label:"是",value:1},{label:"否",value:0}]}},methods:{closeSelected:function(){this.$emit("changeSelected",!1)},handleClickCancel:function(){this.$emit("changeOkSelected",this.selected2)}},mounted:function(){}},s,!1,function(e){a("aYYz")},"data-v-05ab767c",null).exports,c={name:"ordersWrapper",data:function(){return{maskAzShow:!1,selectedNew:!1,selected:!1,selectedTwo:!1,maskShowTwo:!1,maskShow:!1,remarks:"",number:1,address:{},goodsarr:{},express:{},total_price:0,total_count:0,orderInfor:{},makeToast:null}},components:{orderService:i.a,orderInvoice:o.a,orderReason:n,CubePage:r.a},created:function(){this.getOrdersData()},computed:{total:function(){for(var e=0,t=0;t<this.goodsarr.length;t++)console.log(this.goodsarr[t].goods.ress),this.goodsarr[t].goods.ress&&(e+=this.goodsarr[t].goods.ressPrice);return e+=this.total_price}},methods:{changeOkSelected:function(e){var t=this;if(e){this.goodsarr.forEach(function(a,r){"b"==a.goods.b?(t.$set(a.goods,"ress",e),t.$set(a.goods,"ressPrice",a.goods.count*a.goods.install_price),a.goods.count*a.goods.install_price):t.$set(a.goods,"ress",0)}),this.selected=!1;var a=this;this.selected||setTimeout(function(){a.maskShow=!1},300)}else this.goodsarr.forEach(function(a,r){"b"==a.goods.b&&(t.$set(a.goods,"ress",e),t.$set(a.goods,"ressPrice","本次不需要安装"))}),this.changeSelected(!1)},showToastMask:function(){this.makeToast=this.$createToast({txt:"Loading...",mask:!0,time:0}),this.makeToast.show()},rightSubClick:function(){var e=this;if(!this.address.name)return this.showToastTxtOnly("请填写收货地址"),!1;var t=[];this.goodsarr.forEach(function(a,r){t.push(a.goods),e.orderInfor.goods=t}),this.showToastMask(),this.http.post(this.ports.order.index,this.orderInfor,function(t){if(e.$store.commit("changeLoading",!1),e.makeToast&&e.makeToast.show(),t.success){var a=t.data;e.http.get(e.ports.order.pay+"?id="+a,function(a){if(a.success){var r=t.data;location.href=r}else e.showToastTxtOnly(t.msg)})}else e.showToastTxtOnly(t.msg)})},checkAddress:function(){var e=this.$route.query.goods_id,t=this.$route.query.key,a=this.$route.query.count;this.$router.push({path:"/order/address",query:{goods_id:e,key:t,count:a}})},getOrdersData:function(){var e=this,t=this.$route.query.address;console.log(t);var a=this.$route.query.goods_id,r=this.$route.query.key,i=this.$route.query.count;console.log(i,r,a),this.http.get(this.ports.order.create+"?goods_id="+a+"&key="+r+"&count="+i,function(a){if(e.$store.commit("changeLoading",!1),console.log(a),a.success){var r=a.data;e.address=r.address,t&&(e.address=JSON.parse(t)),e.goodsarr=r.goodsarr,e.total_price=r.total_price,e.total_count=r.total_count;var i=[];e.goodsarr.forEach(function(t,a){i.push(t.goods),e.orderInfor.goods=i}),e.orderInfor.address=e.address}else e.showToastTxtOnly(a.msg)})},remarksVal:function(e){console.log(this.orderInfor)},changeInvoiceSub:function(e){var t=this;if(e){if(1==e.name)e.name=this.address.name;else{if(!e.unit)return this.showToastTxtOnly("请输入单位名称"),!1;if(!e.sbCode)return this.showToastTxtOnly("请输入纳税人识别码"),!1}this.goodsarr.forEach(function(a,r){"a"==a.goods.a&&t.$set(a.goods,"invoice",e)}),this.changeSelectedTwo(!1)}else this.changeSelectedTwo(e)},changeServiceClick:function(e){var t=this;this.goodsarr.forEach(function(a,r){"b"==a.goods.b&&t.$set(a.goods,"ress",e)}),this.changeSelected(!1)},confirmClick:function(e,t,a){var r=this,i=this;"invoice"===e?(this.maskShowTwo=!0,setTimeout(function(){i.selectedTwo=!0,r.goodsarr.forEach(function(e,t){e.goods.a="b"}),t.a="a"},200)):(this.maskShow=!0,setTimeout(function(){r.goodsarr.forEach(function(e,t){e.goods.b="a"}),t.b="b",i.selected=!0},200))},changeSelected:function(e){this.selected=!1;var t=this;e||setTimeout(function(){t.maskShow=!1},300)},changeSelectedTwo:function(e){this.selectedTwo=e;var t=this;this.selectedTwo||setTimeout(function(){t.maskShowTwo=!1},300)},showToastTxtOnly:function(e){this.toast=this.$createToast({txt:e,type:"txt"}),this.toast.show()},reduce:function(){if(this.number<=1)return this.showToastTxtOnly("受不了了，宝贝不能再减少了哦"),!1;this.number-=1},plus:function(){if(this.number>=10)return this.showToastTxtOnly("已经没有更多的库存了，下次再来吧"),!1;this.number+=1},handleNumChange:function(){this.number>=10&&(this.showToastTxtOnly("超出范围"),this.number=10)}},mounted:function(){}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ordersWrapper"},[e.$store.state.isLoading?a("my-loading"):e._e(),e._v(" "),e.address.name?a("div",{staticClass:"adderssBox flex-box",on:{click:e.checkAddress}},[e._m(0),e._v(" "),a("div",{staticClass:"address-text box-1"},[a("h4",[e._v(e._s(e.address.name)+"  "),a("span",[e._v(e._s(e.address.phone))])]),e._v(" "),a("h6",{staticClass:"media_desc"},[e._v(e._s(e.address.city+e.address.area+e.address.address))])]),e._v(" "),a("div",{staticClass:"address-right cubeic-arrow"})]):a("div",{staticClass:"adderssBox flex-box",on:{click:e.checkAddress}},[e._m(1),e._v(" "),e._m(2),e._v(" "),a("div",{staticClass:"address-right cubeic-arrow"})]),e._v(" "),e._l(e.goodsarr,function(t,r){return a("div",{key:r,staticClass:"orderInfor"},[a("div",{staticClass:"infor-1 flex-box"},[a("div",{staticClass:"left"},[a("img",{attrs:{src:t.goods.logo,alt:""}})]),e._v(" "),a("div",{staticClass:"text box-1"},[a("div",{staticClass:"flex-box"},[a("h6",{staticClass:"media_desc box-1"},[e._v(e._s(t.goods.goods_name))]),e._v(" "),a("span",[e._v("￥"+e._s(t.goods.price))])]),e._v(" "),a("div",{staticClass:"typeInfo"},[e._v(e._s(t.goods.goods_spec))])])]),e._v(" "),a("ul",{staticClass:"infor-list"},[a("li",[a("div",{staticClass:"nummber-infor flex-box"},[a("h2",[e._v("数量")]),e._v(" "),a("div",{staticClass:"right flex-box"},[a("b",[e._v(e._s(t.goods.count))])])])]),e._v(" "),a("li",{staticClass:"flex-box checkLi"},[a("span",[e._v("配送方式")]),e._v(" "),a("div",{staticClass:"liVal"},[e._v(e._s(t.express.express_desc))])]),e._v(" "),a("li",{staticClass:"flex-box checkLi"},[a("span",[e._v("开具发票")]),e._v(" "),t.goods.invoice?a("div",[t.goods.invoice.name?a("div",{staticClass:"liVal",on:{click:function(a){return e.confirmClick("invoice",t.goods,r)}}},[e._v(e._s(t.goods.invoice.name)+" "),a("i",{staticClass:"cubeic-arrow"})]):t.goods.invoice.unit?a("div",{staticClass:"liVal",on:{click:function(a){return e.confirmClick("invoice",t.goods,r)}}},[e._v(e._s(t.goods.invoice.unit)+" "),a("i",{staticClass:"cubeic-arrow"})]):e._e()]):a("div",{staticClass:"liVal",on:{click:function(a){return e.confirmClick("invoice",t.goods,r)}}},[e._v("本次不开具发票 "),a("i",{staticClass:"cubeic-arrow"})])]),e._v(" "),a("li",{staticClass:"flex-box checkLi"},[a("span",[e._v("安装服务")]),e._v(" "),t.goods.is_install?a("div",[a("div",{staticClass:"liVal",on:{click:function(a){return e.confirmClick("service",t.goods)}}},[t.goods.ress?a("span",[e._v("本次安装共需 "),a("b",{staticStyle:{color:"red"}},[e._v(e._s(t.goods.ressPrice))]),e._v(" 元")]):a("span",[e._v("本次不需要安装")]),e._v(" "),a("i",{staticClass:"cubeic-arrow"})])]):a("div",{staticClass:"liVal"},[e._v("本次不需要安装")])]),e._v(" "),a("li",{staticClass:"flex-box checkLi"},[a("span",[e._v("订单备注")]),e._v(" "),a("div",{staticClass:"liVal box-1"},[a("cube-input",{attrs:{placeholder:"选填请提前与商家协商一致"},on:{input:e.remarksVal},model:{value:t.goods.remarks,callback:function(a){e.$set(t.goods,"remarks",a)},expression:"item.goods.remarks"}})],1)]),e._v(" "),a("li",{staticClass:"subtotal"},[e._v("\n        共"+e._s(t.goods.count)+"件 小计："),a("span",[e._v(e._s(t.goods.count*t.goods.price+Number(t.express.express_price))+"元")])])])])}),e._v(" "),e._m(3),e._v(" "),a("div",{staticClass:"subOrder flex-box"},[a("div",{staticClass:"left box-1"},[e._v("\n      共"+e._s(e.total_count)+"件 合计："),a("span",[e._v(e._s(e.total)+"元")])]),e._v(" "),a("div",{staticClass:"rightBtn",on:{click:function(t){return e.rightSubClick()}}},[e._v("提交订单")])]),e._v(" "),e.maskShow?a("cube-page",{attrs:{type:"swipe-scroll",title:"Scroll"}},[a("template",{slot:"content"},[a("div",{staticClass:"scroll-list-wrap"},[a("cube-scroll",[a("transition",{attrs:{name:"slide-fade"}},[e.selected?a("order-reason",{on:{changeOkSelected:e.changeOkSelected,changeSelected:function(t){return e.changeSelected()}}}):e._e()],1)],1)],1)])],2):e._e(),e._v(" "),e.maskShowTwo?a("cube-page",{attrs:{type:"swipe-scroll",title:"Scroll"}},[a("template",{slot:"content"},[a("div",{staticClass:"scroll-list-wrap"},[a("cube-scroll",[a("transition",{attrs:{name:"slide-fade"}},[e.selectedTwo?a("order-invoice",{on:{changeInvoiceSub:e.changeInvoiceSub,changeSelected:function(t){return e.changeSelectedTwo()}}}):e._e()],1)],1)],1)])],2):e._e()],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"address-ico flex-box"},[t("i")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"address-ico flex-box"},[t("i")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"address-text box-1"},[t("h1",[this._v("请新增地址")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pay-ui flex-box"},[t("span",{staticClass:"flex-box"},[t("i",{staticClass:"wx-ico"}),this._v("微信支付")]),this._v(" "),t("b",[this._v("默认支付方式")])])}]};var A=a("VU/8")(c,d,!1,function(e){a("vMox")},"data-v-5f19076a",null);t.default=A.exports},RO38:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.invoiceBox[data-v-669173aa]{width:100%;height:100vh;overflow:hidden;align-items:flex-end\n}\n.invoiceWrapper[data-v-669173aa]{height:113.333vw;width:100%;box-sizing:border-box;padding:4vw;position:fixed;bottom:0;left:0;background-color:#fff;border-top-left-radius:4vw;border-top-right-radius:4vw\n}\n.invoiceWrapper .title[data-v-669173aa]{font-size:4.267vw;font-weight:700;text-align:center;position:relative;padding:2vw 0\n}\n.invoiceWrapper .title .closeBtn[data-v-669173aa]{position:absolute;top:50%;transform:translateY(-50%);right:2.667vw;color:#ccc;font-size:6vw;font-weight:700\n}\n.invoiceWrapper .list[data-v-669173aa]{text-align:left;margin-bottom:4vw\n}\n.invoiceWrapper .list li[data-v-669173aa]{padding:2.667vw 0\n}\n.invoiceWrapper .list li h6[data-v-669173aa]{font-size:3.467vw\n}\n.invoiceWrapper .list li h6 span[data-v-669173aa]{margin-right:2vw\n}\n.invoiceWrapper .list li h6 .cube-input[data-v-669173aa]:after{content:normal\n}\n.invoiceWrapper .list li h6 .cube-input[data-v-669173aa]{font-size:12px\n}\n.invoiceWrapper .list li h6[data-v-669173aa]:first-child{margin-top:1.333vw\n}\n.invoiceWrapper .list li .checkDiv[data-v-669173aa]{margin-top:2.667vw\n}\n.invoiceWrapper .list .riseLi[data-v-669173aa]{padding-bottom:0\n}\n.invoiceWrapper .invoiceBtn[data-v-669173aa]{height:10.667vw;line-height:10.667vw;text-align:center;border-radius:5.333vw;width:33.333vw;background-color:#ff3747;margin:4vw auto;color:#fff\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/order/components/invoice.vue"],names:[],mappings:";AACA,6BAA6B,WAAW,aAAa,gBAAgB,oBAAoB;CACxF;AACD,iCAAiC,iBAAiB,WAAW,sBAAsB,YAAY,eAAe,SAAS,OAAO,sBAAsB,2BAA2B,2BAA2B;CACzM;AACD,wCAAwC,kBAAkB,gBAAgB,kBAAkB,kBAAkB,aAAa;CAC1H;AACD,kDAAkD,kBAAkB,QAAQ,2BAA2B,cAAc,WAAW,cAAc,eAAe;CAC5J;AACD,uCAAuC,gBAAgB,iBAAiB;CACvE;AACD,0CAA0C,iBAAiB;CAC1D;AACD,6CAA6C,iBAAiB;CAC7D;AACD,kDAAkD,gBAAgB;CACjE;AACD,+DAA+D,cAAc;CAC5E;AACD,yDAAyD,cAAc;CACtE;AACD,yDAAyD,kBAAkB;CAC1E;AACD,oDAAoD,kBAAkB;CACrE;AACD,+CAA+C,gBAAgB;CAC9D;AACD,6CAA6C,gBAAgB,qBAAqB,kBAAkB,sBAAsB,eAAe,yBAAyB,gBAAgB,UAAU;CAC3L",file:"invoice.vue",sourcesContent:["\n.invoiceBox[data-v-669173aa]{width:100%;height:100vh;overflow:hidden;align-items:flex-end\n}\n.invoiceWrapper[data-v-669173aa]{height:113.333vw;width:100%;box-sizing:border-box;padding:4vw;position:fixed;bottom:0;left:0;background-color:#fff;border-top-left-radius:4vw;border-top-right-radius:4vw\n}\n.invoiceWrapper .title[data-v-669173aa]{font-size:4.267vw;font-weight:700;text-align:center;position:relative;padding:2vw 0\n}\n.invoiceWrapper .title .closeBtn[data-v-669173aa]{position:absolute;top:50%;transform:translateY(-50%);right:2.667vw;color:#ccc;font-size:6vw;font-weight:700\n}\n.invoiceWrapper .list[data-v-669173aa]{text-align:left;margin-bottom:4vw\n}\n.invoiceWrapper .list li[data-v-669173aa]{padding:2.667vw 0\n}\n.invoiceWrapper .list li h6[data-v-669173aa]{font-size:3.467vw\n}\n.invoiceWrapper .list li h6 span[data-v-669173aa]{margin-right:2vw\n}\n.invoiceWrapper .list li h6 .cube-input[data-v-669173aa]:after{content:normal\n}\n.invoiceWrapper .list li h6 .cube-input[data-v-669173aa]{font-size:12px\n}\n.invoiceWrapper .list li h6[data-v-669173aa]:first-child{margin-top:1.333vw\n}\n.invoiceWrapper .list li .checkDiv[data-v-669173aa]{margin-top:2.667vw\n}\n.invoiceWrapper .list .riseLi[data-v-669173aa]{padding-bottom:0\n}\n.invoiceWrapper .invoiceBtn[data-v-669173aa]{height:10.667vw;line-height:10.667vw;text-align:center;border-radius:5.333vw;width:33.333vw;background-color:#ff3747;margin:4vw auto;color:#fff\n}"],sourceRoot:""}])},W2nl:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.serviceBox[data-v-05ab767c]{width:100%;height:100vh;overflow:hidden;align-items:flex-end\n}\n.serviceWrapper[data-v-05ab767c]{height:80vw;width:100%;box-sizing:border-box;padding:4vw;position:fixed;bottom:0;left:0;background-color:#fff;border-top-left-radius:4vw;border-top-right-radius:4vw\n}\n.serviceWrapper .title[data-v-05ab767c]{font-size:4.267vw;font-weight:700;text-align:center;position:relative;padding:2vw 0\n}\n.serviceWrapper .title .closeBtn[data-v-05ab767c]{position:absolute;top:50%;transform:translateY(-50%);right:2.667vw;color:#ccc;font-size:6vw;font-weight:700\n}\n.serviceWrapper .test[data-v-05ab767c]{text-align:left;color:#7f8593;font-size:3.467vw;line-height:2;padding-left:4vw;margin-top:2.667vw\n}\n.serviceWrapper .list[data-v-05ab767c]{text-align:left;margin-top:2.667vw;margin-bottom:4vw\n}\n.serviceWrapper .list li[data-v-05ab767c]{padding:4vw 0;font-size:3.467vw;color:#7f8593\n}\n.serviceWrapper .list li .cube-radio-group[data-v-05ab767c]{width:100%\n}\n.serviceWrapper .list li .border-top-1px[data-v-05ab767c]:before{content:normal\n}\n.serviceWrapper .serviceBtn[data-v-05ab767c]{height:10.667vw;line-height:10.667vw;text-align:center;border-radius:5.333vw;width:33.333vw;background-color:#ff3747;margin:4vw auto;color:#fff\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/order/components/reason.vue"],names:[],mappings:";AACA,6BAA6B,WAAW,aAAa,gBAAgB,oBAAoB;CACxF;AACD,iCAAiC,YAAY,WAAW,sBAAsB,YAAY,eAAe,SAAS,OAAO,sBAAsB,2BAA2B,2BAA2B;CACpM;AACD,wCAAwC,kBAAkB,gBAAgB,kBAAkB,kBAAkB,aAAa;CAC1H;AACD,kDAAkD,kBAAkB,QAAQ,2BAA2B,cAAc,WAAW,cAAc,eAAe;CAC5J;AACD,uCAAuC,gBAAgB,cAAc,kBAAkB,cAAc,iBAAiB,kBAAkB;CACvI;AACD,uCAAuC,gBAAgB,mBAAmB,iBAAiB;CAC1F;AACD,0CAA0C,cAAc,kBAAkB,aAAa;CACtF;AACD,4DAA4D,UAAU;CACrE;AACD,iEAAiE,cAAc;CAC9E;AACD,6CAA6C,gBAAgB,qBAAqB,kBAAkB,sBAAsB,eAAe,yBAAyB,gBAAgB,UAAU;CAC3L",file:"reason.vue",sourcesContent:["\n.serviceBox[data-v-05ab767c]{width:100%;height:100vh;overflow:hidden;align-items:flex-end\n}\n.serviceWrapper[data-v-05ab767c]{height:80vw;width:100%;box-sizing:border-box;padding:4vw;position:fixed;bottom:0;left:0;background-color:#fff;border-top-left-radius:4vw;border-top-right-radius:4vw\n}\n.serviceWrapper .title[data-v-05ab767c]{font-size:4.267vw;font-weight:700;text-align:center;position:relative;padding:2vw 0\n}\n.serviceWrapper .title .closeBtn[data-v-05ab767c]{position:absolute;top:50%;transform:translateY(-50%);right:2.667vw;color:#ccc;font-size:6vw;font-weight:700\n}\n.serviceWrapper .test[data-v-05ab767c]{text-align:left;color:#7f8593;font-size:3.467vw;line-height:2;padding-left:4vw;margin-top:2.667vw\n}\n.serviceWrapper .list[data-v-05ab767c]{text-align:left;margin-top:2.667vw;margin-bottom:4vw\n}\n.serviceWrapper .list li[data-v-05ab767c]{padding:4vw 0;font-size:3.467vw;color:#7f8593\n}\n.serviceWrapper .list li .cube-radio-group[data-v-05ab767c]{width:100%\n}\n.serviceWrapper .list li .border-top-1px[data-v-05ab767c]:before{content:normal\n}\n.serviceWrapper .serviceBtn[data-v-05ab767c]{height:10.667vw;line-height:10.667vw;text-align:center;border-radius:5.333vw;width:33.333vw;background-color:#ff3747;margin:4vw auto;color:#fff\n}"],sourceRoot:""}])},aYYz:function(e,t,a){var r=a("W2nl");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("65717116",r,!0,{})},fn4P:function(e,t,a){var r=a("kxFB");(e.exports=a("FZ+f")(!0)).push([e.i,"\n.cube-page[data-v-5f19076a]{background:none\n}\n.slide-fade-enter-active[data-v-5f19076a],.slide-fade-leave-active[data-v-5f19076a]{transition:all .6s ease\n}\n.slide-fade-enter[data-v-5f19076a],.slide-fade-leave-to[data-v-5f19076a]{transform:translateY(93.333vw);opacity:0\n}\n.scroll-list-wrap[data-v-5f19076a]{position:fixed;bottom:0;left:0;width:100%;height:100%;z-index:200;background:rgba(0,0,0,.6);filter:alpha(opacity=60)\n}\n.ordersWrapper[data-v-5f19076a]{background-color:#f0f8ff;font-size:3.733vw;width:100%;min-height:100vh;padding:2.667vw 4vw;box-sizing:border-box;position:relative;padding-bottom:20vw\n}\n.ordersWrapper .subOrder[data-v-5f19076a]{position:fixed;bottom:0;left:0;width:100%;height:17.333vw;box-sizing:border-box;padding:0 4vw;background-color:#fff\n}\n.ordersWrapper .subOrder .left[data-v-5f19076a]{text-align:right;margin-right:2.667vw;font-size:4vw\n}\n.ordersWrapper .subOrder .left span[data-v-5f19076a]{color:#ff3747;font-weight:700\n}\n.ordersWrapper .subOrder .rightBtn[data-v-5f19076a]{height:10.667vw;width:34.667vw;line-height:10.667vw;text-align:center;background-color:#ff3747;color:#fff;border-radius:5.333vw\n}\n.ordersWrapper .adderssBox[data-v-5f19076a]{background-color:#fff;padding:4vw;border-radius:1.333vw;margin-bottom:2.667vw\n}\n.ordersWrapper .adderssBox .address-ico[data-v-5f19076a]{background-color:#f0f8ff;width:8vw;height:8vw;border-radius:50%;justify-content:center\n}\n.ordersWrapper .adderssBox .address-ico i[data-v-5f19076a]{width:3.733vw;height:4.667vw;background:url("+r(a("oNv+"))+") no-repeat 50%;background-size:100%\n}\n.ordersWrapper .adderssBox .address-text[data-v-5f19076a]{text-align:left;margin:0 2vw\n}\n.ordersWrapper .adderssBox .address-text h1[data-v-5f19076a]{font-size:4.8vw;font-weight:700\n}\n.ordersWrapper .adderssBox .address-text h4[data-v-5f19076a]{font-size:3.467vw;margin-bottom:1.333vw\n}\n.ordersWrapper .adderssBox .address-text h4 span[data-v-5f19076a]{color:#7f8593;margin-left:1.333vw\n}\n.ordersWrapper .adderssBox .address-text h6[data-v-5f19076a]{font-size:4vw\n}\n.ordersWrapper .adderssBox .address-right[data-v-5f19076a]{font-size:5.333vw\n}\n.ordersWrapper .orderInfor[data-v-5f19076a]{background-color:#fff;border-radius:1.333vw;padding:4vw;margin-bottom:2.667vw\n}\n.ordersWrapper .orderInfor .infor-1[data-v-5f19076a]{align-items:flex-start\n}\n.ordersWrapper .orderInfor .infor-1 .left[data-v-5f19076a]{margin-right:2.667vw\n}\n.ordersWrapper .orderInfor .infor-1 .left img[data-v-5f19076a]{width:22.667vw;height:22.667vw;border-radius:2vw\n}\n.ordersWrapper .orderInfor .infor-1 .text[data-v-5f19076a]{text-align:left\n}\n.ordersWrapper .orderInfor .infor-1 .text .flex-box[data-v-5f19076a]{align-items:flex-start\n}\n.ordersWrapper .orderInfor .infor-1 .text .flex-box span[data-v-5f19076a]{color:#ff0207;font-size:5.333vw;font-weight:700\n}\n.ordersWrapper .orderInfor .infor-1 .text .typeInfo[data-v-5f19076a]{height:9.333vw;line-height:9.333vw;text-align:center;color:#7f8593;display:inline-block\n}\n.ordersWrapper .orderInfor .infor-list li .nummber-infor[data-v-5f19076a]{justify-content:space-between\n}\n.ordersWrapper .orderInfor .infor-list li .nummber-infor h2[data-v-5f19076a]{margin:3.333vw 0\n}\n.ordersWrapper .orderInfor .infor-list li .nummber-infor .right span[data-v-5f19076a]{font-size:4vw;width:4vw;height:4vw;text-align:center\n}\n.ordersWrapper .orderInfor .infor-list .checkLi[data-v-5f19076a]{justify-content:space-between;padding:4vw 0\n}\n.ordersWrapper .orderInfor .infor-list .checkLi .liVal[data-v-5f19076a]{color:#7f8593;font-size:3.467vw;margin-left:2.667vw\n}\n.ordersWrapper .orderInfor .infor-list .checkLi .liVal .cube-input[data-v-5f19076a]:after{content:normal\n}\n.ordersWrapper .orderInfor .infor-list .subtotal[data-v-5f19076a]{text-align:right;font-size:3.467vw\n}\n.ordersWrapper .orderInfor .infor-list .subtotal span[data-v-5f19076a]{color:#ff3747\n}\n.ordersWrapper .pay-ui[data-v-5f19076a]{padding:5.333vw 4vw;justify-content:space-between;margin-top:2.667vw;background-color:#fff;border-radius:1.333vw\n}\n.ordersWrapper .pay-ui span i[data-v-5f19076a]{width:4.8vw;height:4.8vw;background:url("+r(a("C23/"))+") no-repeat 50%;background-size:100%;margin-right:1.333vw\n}\n.ordersWrapper .pay-ui b[data-v-5f19076a]{color:#7f8593;font-size:3.467vw\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/order/orders.vue"],names:[],mappings:";AACA,4BAA4B,eAAe;CAC1C;AACD,oFAAoF,uBAAuB;CAC1G;AACD,yEAAyE,+BAA+B,SAAS;CAChH;AACD,mCAAmC,eAAe,SAAS,OAAO,WAAW,YAAY,YAAY,0BAA0B,wBAAwB;CACtJ;AACD,gCAAgC,yBAAyB,kBAAkB,WAAW,iBAAiB,oBAAoB,sBAAsB,kBAAkB,mBAAmB;CACrL;AACD,0CAA0C,eAAe,SAAS,OAAO,WAAW,gBAAgB,sBAAsB,cAAc,qBAAqB;CAC5J;AACD,gDAAgD,iBAAiB,qBAAqB,aAAa;CAClG;AACD,qDAAqD,cAAc,eAAe;CACjF;AACD,oDAAoD,gBAAgB,eAAe,qBAAqB,kBAAkB,yBAAyB,WAAW,qBAAqB;CAClL;AACD,4CAA4C,sBAAsB,YAAY,sBAAsB,qBAAqB;CACxH;AACD,yDAAyD,yBAAyB,UAAU,WAAW,kBAAkB,sBAAsB;CAC9I;AACD,2DAA2D,cAAc,eAAe,uDAA+D,oBAAoB;CAC1K;AACD,0DAA0D,gBAAgB,YAAY;CACrF;AACD,6DAA6D,gBAAgB,eAAe;CAC3F;AACD,6DAA6D,kBAAkB,qBAAqB;CACnG;AACD,kEAAkE,cAAc,mBAAmB;CAClG;AACD,6DAA6D,aAAa;CACzE;AACD,2DAA2D,iBAAiB;CAC3E;AACD,4CAA4C,sBAAsB,sBAAsB,YAAY,qBAAqB;CACxH;AACD,qDAAqD,sBAAsB;CAC1E;AACD,2DAA2D,oBAAoB;CAC9E;AACD,+DAA+D,eAAe,gBAAgB,iBAAiB;CAC9G;AACD,2DAA2D,eAAe;CACzE;AACD,qEAAqE,sBAAsB;CAC1F;AACD,0EAA0E,cAAc,kBAAkB,eAAe;CACxH;AACD,qEAAqE,eAAe,oBAAoB,kBAAkB,cAAc,oBAAoB;CAC3J;AACD,0EAA0E,6BAA6B;CACtG;AACD,6EAA6E,gBAAgB;CAC5F;AACD,sFAAsF,cAAc,UAAU,WAAW,iBAAiB;CACzI;AACD,iEAAiE,8BAA8B,aAAa;CAC3G;AACD,wEAAwE,cAAc,kBAAkB,mBAAmB;CAC1H;AACD,0FAA0F,cAAc;CACvG;AACD,kEAAkE,iBAAiB,iBAAiB;CACnG;AACD,uEAAuE,aAAa;CACnF;AACD,wCAAwC,oBAAoB,8BAA8B,mBAAmB,sBAAsB,qBAAqB;CACvJ;AACD,+CAA+C,YAAY,aAAa,uDAA0D,qBAAqB,oBAAoB;CAC1K;AACD,0CAA0C,cAAc,iBAAiB;CACxE",file:"orders.vue",sourcesContent:["\n.cube-page[data-v-5f19076a]{background:none\n}\n.slide-fade-enter-active[data-v-5f19076a],.slide-fade-leave-active[data-v-5f19076a]{transition:all .6s ease\n}\n.slide-fade-enter[data-v-5f19076a],.slide-fade-leave-to[data-v-5f19076a]{transform:translateY(93.333vw);opacity:0\n}\n.scroll-list-wrap[data-v-5f19076a]{position:fixed;bottom:0;left:0;width:100%;height:100%;z-index:200;background:rgba(0,0,0,.6);filter:alpha(opacity=60)\n}\n.ordersWrapper[data-v-5f19076a]{background-color:#f0f8ff;font-size:3.733vw;width:100%;min-height:100vh;padding:2.667vw 4vw;box-sizing:border-box;position:relative;padding-bottom:20vw\n}\n.ordersWrapper .subOrder[data-v-5f19076a]{position:fixed;bottom:0;left:0;width:100%;height:17.333vw;box-sizing:border-box;padding:0 4vw;background-color:#fff\n}\n.ordersWrapper .subOrder .left[data-v-5f19076a]{text-align:right;margin-right:2.667vw;font-size:4vw\n}\n.ordersWrapper .subOrder .left span[data-v-5f19076a]{color:#ff3747;font-weight:700\n}\n.ordersWrapper .subOrder .rightBtn[data-v-5f19076a]{height:10.667vw;width:34.667vw;line-height:10.667vw;text-align:center;background-color:#ff3747;color:#fff;border-radius:5.333vw\n}\n.ordersWrapper .adderssBox[data-v-5f19076a]{background-color:#fff;padding:4vw;border-radius:1.333vw;margin-bottom:2.667vw\n}\n.ordersWrapper .adderssBox .address-ico[data-v-5f19076a]{background-color:#f0f8ff;width:8vw;height:8vw;border-radius:50%;justify-content:center\n}\n.ordersWrapper .adderssBox .address-ico i[data-v-5f19076a]{width:3.733vw;height:4.667vw;background:url(../../assets/ico/address-ico.png) no-repeat 50%;background-size:100%\n}\n.ordersWrapper .adderssBox .address-text[data-v-5f19076a]{text-align:left;margin:0 2vw\n}\n.ordersWrapper .adderssBox .address-text h1[data-v-5f19076a]{font-size:4.8vw;font-weight:700\n}\n.ordersWrapper .adderssBox .address-text h4[data-v-5f19076a]{font-size:3.467vw;margin-bottom:1.333vw\n}\n.ordersWrapper .adderssBox .address-text h4 span[data-v-5f19076a]{color:#7f8593;margin-left:1.333vw\n}\n.ordersWrapper .adderssBox .address-text h6[data-v-5f19076a]{font-size:4vw\n}\n.ordersWrapper .adderssBox .address-right[data-v-5f19076a]{font-size:5.333vw\n}\n.ordersWrapper .orderInfor[data-v-5f19076a]{background-color:#fff;border-radius:1.333vw;padding:4vw;margin-bottom:2.667vw\n}\n.ordersWrapper .orderInfor .infor-1[data-v-5f19076a]{align-items:flex-start\n}\n.ordersWrapper .orderInfor .infor-1 .left[data-v-5f19076a]{margin-right:2.667vw\n}\n.ordersWrapper .orderInfor .infor-1 .left img[data-v-5f19076a]{width:22.667vw;height:22.667vw;border-radius:2vw\n}\n.ordersWrapper .orderInfor .infor-1 .text[data-v-5f19076a]{text-align:left\n}\n.ordersWrapper .orderInfor .infor-1 .text .flex-box[data-v-5f19076a]{align-items:flex-start\n}\n.ordersWrapper .orderInfor .infor-1 .text .flex-box span[data-v-5f19076a]{color:#ff0207;font-size:5.333vw;font-weight:700\n}\n.ordersWrapper .orderInfor .infor-1 .text .typeInfo[data-v-5f19076a]{height:9.333vw;line-height:9.333vw;text-align:center;color:#7f8593;display:inline-block\n}\n.ordersWrapper .orderInfor .infor-list li .nummber-infor[data-v-5f19076a]{justify-content:space-between\n}\n.ordersWrapper .orderInfor .infor-list li .nummber-infor h2[data-v-5f19076a]{margin:3.333vw 0\n}\n.ordersWrapper .orderInfor .infor-list li .nummber-infor .right span[data-v-5f19076a]{font-size:4vw;width:4vw;height:4vw;text-align:center\n}\n.ordersWrapper .orderInfor .infor-list .checkLi[data-v-5f19076a]{justify-content:space-between;padding:4vw 0\n}\n.ordersWrapper .orderInfor .infor-list .checkLi .liVal[data-v-5f19076a]{color:#7f8593;font-size:3.467vw;margin-left:2.667vw\n}\n.ordersWrapper .orderInfor .infor-list .checkLi .liVal .cube-input[data-v-5f19076a]:after{content:normal\n}\n.ordersWrapper .orderInfor .infor-list .subtotal[data-v-5f19076a]{text-align:right;font-size:3.467vw\n}\n.ordersWrapper .orderInfor .infor-list .subtotal span[data-v-5f19076a]{color:#ff3747\n}\n.ordersWrapper .pay-ui[data-v-5f19076a]{padding:5.333vw 4vw;justify-content:space-between;margin-top:2.667vw;background-color:#fff;border-radius:1.333vw\n}\n.ordersWrapper .pay-ui span i[data-v-5f19076a]{width:4.8vw;height:4.8vw;background:url(../../assets/ico/wx-ico.png) no-repeat 50%;background-size:100%;margin-right:1.333vw\n}\n.ordersWrapper .pay-ui b[data-v-5f19076a]{color:#7f8593;font-size:3.467vw\n}"],sourceRoot:""}])},"ry+v":function(e,t,a){"use strict";var r={name:"mb",data:function(){return{invoiceCompany:!1,isInvoiceRise:!1,name:"",sbCode:"",checkerType:0,optionsType:[{value:0,text:"普通发票"},{value:1,text:"增值税专用发票",disabled:!0}],checkerRise:0,optionsRise:[{value:0,text:"个人"},{value:1,text:"单位"}],checkerContent:0,optionsContent:[{value:0,text:"不开发票"},{value:1,text:"商品明细"}]}},methods:{blurLeave:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},invoiceSub:function(){1==this.checkerContent&&0==this.checkerRise?this.$emit("changeInvoiceSub",{name:1}):1==this.checkerContent&&1==this.checkerRise?this.$emit("changeInvoiceSub",{unit:this.name,sbCode:this.sbCode}):this.$emit("changeInvoiceSub",!1)},closeSelected:function(){this.$emit("changeSelected",!1)},changeInvoiceText:function(e){this.isInvoiceRise=0!==e},changeInvoiceRise:function(e){this.invoiceCompany=0!==e}},mounted:function(){}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"invoiceBox flex-box"},[a("div",{staticClass:"invoiceWrapper"},[a("h2",{staticClass:"title"},[e._v("发票\n      "),a("i",{staticClass:"closeBtn cubeic-wrong",on:{click:function(t){return e.closeSelected()}}})]),e._v(" "),a("ul",{staticClass:"list"},[a("li",[a("span",[e._v("发票类型")]),e._v(" "),a("div",{staticClass:"checkDiv"},[a("cube-checker",{attrs:{options:e.optionsType,type:"radio"},model:{value:e.checkerType,callback:function(t){e.checkerType=t},expression:"checkerType"}})],1)]),e._v(" "),e.isInvoiceRise?a("li",{staticClass:"riseLi"},[a("span",[e._v("发票抬头")]),e._v(" "),a("div",{staticClass:"checkDiv"},[a("cube-checker",{attrs:{options:e.optionsRise,type:"radio"},on:{input:e.changeInvoiceRise},model:{value:e.checkerRise,callback:function(t){e.checkerRise=t},expression:"checkerRise"}})],1),e._v(" "),a("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[e.invoiceCompany?a("div",[a("h6",{staticClass:"flex-box"},[a("span",[e._v("单位名称")]),e._v(" "),a("cube-input",{staticClass:"box-1",attrs:{placeholder:"请填写单位名称"},on:{blur:e.blurLeave},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),a("h6",{staticClass:"flex-box"},[a("span",[e._v("纳税人识别码")]),e._v(" "),a("cube-input",{staticClass:"box-1",attrs:{placeholder:"请填写纳税人识别码"},on:{blur:e.blurLeave},model:{value:e.sbCode,callback:function(t){e.sbCode=t},expression:"sbCode"}})],1)]):e._e()])],1):e._e(),e._v(" "),a("li",[a("span",[e._v("发票内容")]),e._v(" "),a("div",{staticClass:"checkDiv"},[a("cube-checker",{attrs:{options:e.optionsContent,type:"radio"},on:{input:e.changeInvoiceText},model:{value:e.checkerContent,callback:function(t){e.checkerContent=t},expression:"checkerContent"}})],1)])]),e._v(" "),a("div",{staticClass:"invoiceBtn",on:{click:e.invoiceSub}},[e._v("确定")])])])},staticRenderFns:[]};var o=a("VU/8")(r,i,!1,function(e){a("vi25")},"data-v-669173aa",null);t.a=o.exports},uSn5:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.serviceBox[data-v-740cd732]{width:100%;height:100vh;overflow:hidden;align-items:flex-end\n}\n.serviceWrapper[data-v-740cd732]{height:93.333vw;width:100%;box-sizing:border-box;padding:4vw;position:fixed;bottom:0;left:0;background-color:#fff;border-top-left-radius:4vw;border-top-right-radius:4vw\n}\n.serviceWrapper .title[data-v-740cd732]{font-size:4.267vw;font-weight:700;text-align:center;position:relative;padding:2vw 0\n}\n.serviceWrapper .title .closeBtn[data-v-740cd732]{position:absolute;top:50%;transform:translateY(-50%);right:2.667vw;color:#ccc;font-size:6vw;font-weight:700\n}\n.serviceWrapper .list[data-v-740cd732]{text-align:left;margin-top:6.667vw;margin-bottom:6.667vw\n}\n.serviceWrapper .list li[data-v-740cd732]{padding:4vw 0;font-size:3.467vw;color:#7f8593\n}\n.serviceWrapper .list li span[data-v-740cd732]{margin-right:6.667vw\n}\n.serviceWrapper .serviceBtn[data-v-740cd732]{height:10.667vw;line-height:10.667vw;text-align:center;border-radius:5.333vw;width:33.333vw;background-color:#ff3747;margin:4vw auto;color:#fff\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/order/components/service.vue"],names:[],mappings:";AACA,6BAA6B,WAAW,aAAa,gBAAgB,oBAAoB;CACxF;AACD,iCAAiC,gBAAgB,WAAW,sBAAsB,YAAY,eAAe,SAAS,OAAO,sBAAsB,2BAA2B,2BAA2B;CACxM;AACD,wCAAwC,kBAAkB,gBAAgB,kBAAkB,kBAAkB,aAAa;CAC1H;AACD,kDAAkD,kBAAkB,QAAQ,2BAA2B,cAAc,WAAW,cAAc,eAAe;CAC5J;AACD,uCAAuC,gBAAgB,mBAAmB,qBAAqB;CAC9F;AACD,0CAA0C,cAAc,kBAAkB,aAAa;CACtF;AACD,+CAA+C,oBAAoB;CAClE;AACD,6CAA6C,gBAAgB,qBAAqB,kBAAkB,sBAAsB,eAAe,yBAAyB,gBAAgB,UAAU;CAC3L",file:"service.vue",sourcesContent:["\n.serviceBox[data-v-740cd732]{width:100%;height:100vh;overflow:hidden;align-items:flex-end\n}\n.serviceWrapper[data-v-740cd732]{height:93.333vw;width:100%;box-sizing:border-box;padding:4vw;position:fixed;bottom:0;left:0;background-color:#fff;border-top-left-radius:4vw;border-top-right-radius:4vw\n}\n.serviceWrapper .title[data-v-740cd732]{font-size:4.267vw;font-weight:700;text-align:center;position:relative;padding:2vw 0\n}\n.serviceWrapper .title .closeBtn[data-v-740cd732]{position:absolute;top:50%;transform:translateY(-50%);right:2.667vw;color:#ccc;font-size:6vw;font-weight:700\n}\n.serviceWrapper .list[data-v-740cd732]{text-align:left;margin-top:6.667vw;margin-bottom:6.667vw\n}\n.serviceWrapper .list li[data-v-740cd732]{padding:4vw 0;font-size:3.467vw;color:#7f8593\n}\n.serviceWrapper .list li span[data-v-740cd732]{margin-right:6.667vw\n}\n.serviceWrapper .serviceBtn[data-v-740cd732]{height:10.667vw;line-height:10.667vw;text-align:center;border-radius:5.333vw;width:33.333vw;background-color:#ff3747;margin:4vw auto;color:#fff\n}"],sourceRoot:""}])},vMox:function(e,t,a){var r=a("fn4P");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("497ce116",r,!0,{})},vhFy:function(e,t,a){var r=a("uSn5");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("43b2ba75",r,!0,{})},vi25:function(e,t,a){var r=a("RO38");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("7327ec93",r,!0,{})}});
//# sourceMappingURL=7.0f822f9774cc266feb37.js.map