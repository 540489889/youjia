webpackJsonp([20],{"2kPl":function(e,t,r){var l=r("5+df");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);r("rjj0")("5e45a4dc",l,!0,{})},"4WrH":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"mb",data:function(){return{name:"",tell:"",receivables_acount:"",receivables_type:"",placeholder:"请选择提现方式",opening_bank:"",captchaLabel:"获取验证码",captchaDisable:!1,inputCode:"",options:["支付宝","银行卡"],value:"银行卡",list:{}}},methods:{getMeData:function(){var e=this;this.http.get(this.ports.me.index,function(t){if(e.$store.commit("changeLoading",!1),console.log(t),t.success){var r=t.data;e.list=r}else e.showToastTxtOnly(t.msg)})},showToastTxtOnly:function(e){this.toast=this.$createToast({txt:e,type:"txt"}),this.toast.show()},subReseller:function(){var e=this;if(!this.name)return this.showToastTxtOnly("请填写姓名"),!1;if(!/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(this.tell))return this.showToastTxtOnly("请填写正确的手机号码"),!1;if("支付宝"==this.value&&!this.receivables_acount)return this.showToastTxtOnly("请填写支付宝账号"),!1;if("银行卡"==this.value){if(!this.opening_bank)return this.showToastTxtOnly("请填写开户行"),!1;if(!this.receivables_acount)return this.showToastTxtOnly("请填写银行卡账号"),!1}var t={};t.name=this.name,t.phone=this.tell,t.receivables_type=this.value,t.opening_bank=this.opening_bank,t.receivables_acount=this.receivables_acount,this.http.post(this.ports.me.distribution,t,function(t){if(e.$store.commit("changeLoading",!1),console.log(t),t.success){var r=t.data;e.count=r.count,e.list=r.res,e.showToastTxtOnly(t.msg),e.$router.push({path:"/me/index"})}else e.showToastTxtOnly(t.msg)})}},mounted:function(){this.getMeData()}},a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"resellerWrapper"},[e.$store.state.isLoading?r("my-loading"):e._e(),e._v(" "),r("div",{staticClass:"title flex-box"},[e.list.headimg?r("img",{attrs:{src:e.list.headimg,alt:""}}):e._e(),e._v(" "),r("p",[e._v(e._s(e.list.nickname))])]),e._v(" "),r("ul",{staticClass:"resellerList"},[r("li",[r("cube-input",{attrs:{placeholder:"请填写姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),r("li",[r("cube-input",{attrs:{placeholder:"请填写电话"},model:{value:e.tell,callback:function(t){e.tell=t},expression:"tell"}})],1),e._v(" "),r("li",[r("cube-select",{attrs:{placeholder:e.placeholder,options:e.options},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),"支付宝"==e.value?r("li",[r("cube-input",{attrs:{placeholder:"请填写支付宝账号"},model:{value:e.receivables_acount,callback:function(t){e.receivables_acount=t},expression:"receivables_acount"}})],1):e._e(),e._v(" "),"银行卡"==e.value?[r("li",[r("cube-input",{attrs:{placeholder:"请填写开户行"},model:{value:e.opening_bank,callback:function(t){e.opening_bank=t},expression:"opening_bank"}})],1),e._v(" "),r("li",[r("cube-input",{attrs:{placeholder:"请填写银行账号"},model:{value:e.receivables_acount,callback:function(t){e.receivables_acount=t},expression:"receivables_acount"}})],1)]:e._e(),e._v(" "),r("li",[r("a",{staticClass:"submitBtn",on:{click:e.subReseller}},[e._v("提交申请")])])],2)],1)},staticRenderFns:[]};var i=r("VU/8")(l,a,!1,function(e){r("2kPl")},"data-v-63d45f18",null);t.default=i.exports},"5+df":function(e,t,r){var l=r("kxFB");(e.exports=r("FZ+f")(!0)).push([e.i,"\n.resellerWrapper[data-v-63d45f18]{width:100vw;height:193.067vw;background:url("+l(r("QULf"))+") no-repeat 50%;background-size:100%;position:relative;font-size:3.733vw\n}\n.resellerWrapper .title[data-v-63d45f18]{padding:4vw;color:#fff\n}\n.resellerWrapper .title img[data-v-63d45f18]{width:10.667vw;height:10.667vw;border-radius:50%;margin-right:2.667vw\n}\n.resellerWrapper .resellerList[data-v-63d45f18]{position:absolute;top:73.333vw;width:77.333vw;left:11.333vw\n}\n.resellerWrapper .resellerList li[data-v-63d45f18]{margin-bottom:4vw\n}\n.resellerWrapper .resellerList li .cube-input[data-v-63d45f18]{background:none;background-color:#eef4f8;border-radius:10px;height:40px\n}\n.resellerWrapper .resellerList li .cube-input[data-v-63d45f18]:after{content:normal\n}\n.resellerWrapper .resellerList li .codeBtn[data-v-63d45f18]{margin-left:1.333vw;background:#eef4f8;font-size:3.733vw;box-sizing:initial;color:#c6c6c6;height:5.333vw\n}\n.resellerWrapper .resellerList li .cube-select[data-v-63d45f18]{text-align:left;background:#eef4f8\n}\n.resellerWrapper .resellerList li .cube-select[data-v-63d45f18]:after{content:normal\n}\n.resellerWrapper .resellerList li .submitBtn[data-v-63d45f18]{display:block;height:10.667vw;line-height:10.667vw;background:#ff0207;color:#fff\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/me/reseller.vue"],names:[],mappings:";AACA,kCAAkC,YAAY,iBAAiB,uDAA+D,qBAAqB,kBAAkB,iBAAiB;CACrL;AACD,yCAAyC,YAAY,UAAU;CAC9D;AACD,6CAA6C,eAAe,gBAAgB,kBAAkB,oBAAoB;CACjH;AACD,gDAAgD,kBAAkB,aAAa,eAAe,aAAa;CAC1G;AACD,mDAAmD,iBAAiB;CACnE;AACD,+DAA+D,gBAAgB,yBAAyB,mBAAmB,WAAW;CACrI;AACD,qEAAqE,cAAc;CAClF;AACD,4DAA4D,oBAAoB,mBAAmB,kBAAkB,mBAAmB,cAAc,cAAc;CACnK;AACD,gEAAgE,gBAAgB,kBAAkB;CACjG;AACD,sEAAsE,cAAc;CACnF;AACD,8DAA8D,cAAc,gBAAgB,qBAAqB,mBAAmB,UAAU;CAC7I",file:"reseller.vue",sourcesContent:["\n.resellerWrapper[data-v-63d45f18]{width:100vw;height:193.067vw;background:url(../../assets/img/reseller-bg.png) no-repeat 50%;background-size:100%;position:relative;font-size:3.733vw\n}\n.resellerWrapper .title[data-v-63d45f18]{padding:4vw;color:#fff\n}\n.resellerWrapper .title img[data-v-63d45f18]{width:10.667vw;height:10.667vw;border-radius:50%;margin-right:2.667vw\n}\n.resellerWrapper .resellerList[data-v-63d45f18]{position:absolute;top:73.333vw;width:77.333vw;left:11.333vw\n}\n.resellerWrapper .resellerList li[data-v-63d45f18]{margin-bottom:4vw\n}\n.resellerWrapper .resellerList li .cube-input[data-v-63d45f18]{background:none;background-color:#eef4f8;border-radius:10px;height:40px\n}\n.resellerWrapper .resellerList li .cube-input[data-v-63d45f18]:after{content:normal\n}\n.resellerWrapper .resellerList li .codeBtn[data-v-63d45f18]{margin-left:1.333vw;background:#eef4f8;font-size:3.733vw;box-sizing:initial;color:#c6c6c6;height:5.333vw\n}\n.resellerWrapper .resellerList li .cube-select[data-v-63d45f18]{text-align:left;background:#eef4f8\n}\n.resellerWrapper .resellerList li .cube-select[data-v-63d45f18]:after{content:normal\n}\n.resellerWrapper .resellerList li .submitBtn[data-v-63d45f18]{display:block;height:10.667vw;line-height:10.667vw;background:#ff0207;color:#fff\n}"],sourceRoot:""}])},QULf:function(e,t,r){e.exports=r.p+"static/img/reseller-bg.88a9d76.png"}});
//# sourceMappingURL=20.4620796c89fa472f7bdf.js.map