webpackJsonp([35],{"5jvf":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"authorIndex",data:function(){return{}},created:function(){var e=window.location.href;console.log(e);var t,n,a=(t=new RegExp("(^|&)"+"openId"+"=([^&]*)(&|$)"),null!=(n=window.location.search.substr(1).match(t))&&unescape(n[2]));if(a)alert(1),this.$store.commit("changeLogin",a),this.$router.push({path:"/"});else{var o="http://ccnwx.itlw.cn/service/weixin/web/authorize?returnUrl="+e;window.location.href=o}},methods:{},mounted:function(){}},o={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"authorIndex"})},staticRenderFns:[]};var i=n("VU/8")(a,o,!1,function(e){n("PGsk")},"data-v-4faaa8ec",null);t.default=i.exports},PGsk:function(e,t,n){var a=n("luWw");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("69727a02",a,!0,{})},luWw:function(e,t,n){(e.exports=n("FZ+f")(!0)).push([e.i,"\n.authorIndex[data-v-4faaa8ec]{width:100vw;min-height:100vh;background-color:#fff;font-size:4vw\n}","",{version:3,sources:["G:/公司/git/youjia/src/page/author/index.vue"],names:[],mappings:";AACA,8BAA8B,YAAY,iBAAiB,sBAAsB,aAAa;CAC7F",file:"index.vue",sourcesContent:["\n.authorIndex[data-v-4faaa8ec]{width:100vw;min-height:100vh;background-color:#fff;font-size:4vw\n}"],sourceRoot:""}])}});
//# sourceMappingURL=35.843db4b8709088e09d97.js.map