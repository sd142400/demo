(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-user-user"],{"0531":function(t,i,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("71ed")),s={data:function(){return{isfirst:!0,headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,user:{acc:"",face:"",uid:0,phone:"",level:"",inviteCode:"",inviteUrl:"",have_pay_pwd:0}}},onPullDownRefresh:function(){setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){this.statusHeight=0},onReady:function(){uni.setStorage({key:"UserInfo",data:!1,success:function(){},fail:function(t){}})},onShow:function(){var t=this;uni.getStorage({key:"UserInfo",success:function(i){i.data?t.user=i.data:t.isfirst},fail:function(t){}})},created:function(){this.fetchInfo(),this.fetchInvite()},methods:{fetchInfo:function(){var t=this;n.default.info().then((function(i){t.user=i.data.data,t.user.face="/static/img/user/DAY"+t.user.headImg+".png"}))},fetchInvite:function(){n.default.invite().then((function(t){console.log(t.data.data)}))},toMsg:function(){uni.navigateTo({url:"../../msg/msg"})},toOrderList:function(t){uni.setStorageSync("tbIndex",t),uni.navigateTo({url:"../../user/order_list/order_list?tbIndex="+t})},toSetting:function(){uni.navigateTo({url:"../../user/setting/setting"})},toMyQR:function(){uni.navigateTo({url:"../../user/myQR/myQR"})},toRecharge:function(){uni.navigateTo({url:"../../user/money/recharge"})},toTransfer:function(){uni.navigateTo({url:"../../user/money/transfer"})},toWithdraw:function(){uni.navigateTo({url:"../../user/money/withdraw"})},toList:function(){uni.navigateTo({url:"../../user/bottom/list"})},toDtail:function(){uni.navigateTo({url:"../../user/bottom/detail"})},toAddress:function(){uni.navigateTo({url:"../../user/bottom/address"})},toTeam:function(){uni.navigateTo({url:"../../user/bottom/team"})},toLogin:function(){uni.showToast({title:"请登录",icon:"none"}),uni.navigateTo({url:"../../login/login"}),this.isfirst=!1},isLogin:function(){var t=uni.getStorageSync("UserInfo");return!!t},toDeposit:function(){uni.navigateTo({url:"../../user/deposit/deposit"})},toPage:function(t){t?uni.navigateTo({url:t}):uni.showToast({title:"模板未包含此页面",icon:"none"})}}};i.default=s},"2db7":function(t,i,e){var a=e("ad7f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("ec97bf32",a,!0,{sourceMap:!1,shadowMode:!1})},"374a":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={uniIcons:e("d10f").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t.showHeader?e("v-uni-view",{staticClass:"status",style:{position:t.headerPosition,top:t.statusTop}}):t._e(),t.showHeader?e("v-uni-view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop}},[e("v-uni-view",{staticClass:"addr"}),e("v-uni-view",{staticClass:"input-box"})],1):t._e(),t.showHeader?e("v-uni-view",{staticClass:"place"}):t._e(),e("v-uni-view",{staticClass:"user"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-image",{attrs:{src:t.user.face},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toSetting.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"username"},[t._v(t._s(t.user.acc))]),e("v-uni-view",{staticClass:"signature",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toSetting.apply(void 0,arguments)}}},[t._v("")])],1),e("v-uni-view",{staticClass:"erweima",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toSetting.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"right"},[e("uni-icons",{staticStyle:{color:"#9F9380"},attrs:{type:"forward"}})],1)],1)],1),e("v-uni-view",{staticClass:"VIP"},[e("v-uni-view",{staticClass:"title"}),e("v-uni-view",{staticClass:"tis"}),e("v-uni-view",{staticClass:"share"})],1),e("v-uni-view",{staticClass:"order"},[e("v-uni-view",{staticClass:"btns",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toAddress.apply(void 0,arguments)}}},[e("v-uni-view",[e("v-uni-image",{staticStyle:{width:"56upx",height:"56upx"},attrs:{src:"/static/img/user/cz-b.png"}})],1),e("v-uni-view",[e("v-uni-image",{staticStyle:{width:"56upx",height:"44upx"},attrs:{src:"/static/img/user/cz.png"}})],1)],1),e("v-uni-view",{staticClass:"btns",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toWithdraw.apply(void 0,arguments)}}},[e("v-uni-view",[e("v-uni-image",{staticStyle:{width:"56upx",height:"56upx"},attrs:{src:"/static/img/user/tx-b.png"}})],1),e("v-uni-view",[e("v-uni-image",{staticStyle:{width:"56upx",height:"44upx"},attrs:{src:"/static/img/user/tx.png"}})],1)],1),e("v-uni-view",{staticClass:"btns",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toTransfer.apply(void 0,arguments)}}},[e("v-uni-view",[e("v-uni-image",{staticStyle:{width:"56upx",height:"56upx"},attrs:{src:"/static/img/user/zz-b.png"}})],1),e("v-uni-view",[e("v-uni-image",{staticStyle:{width:"56upx",height:"44upx"},attrs:{src:"/static/img/user/zz.png"}})],1)],1),e("v-uni-view",{staticStyle:{clear:"both"}})],1),e("v-uni-view",{staticClass:"toolbar"},[e("v-uni-view",{staticClass:"items"},[e("v-uni-view",{staticClass:"icon"},[e("v-uni-image",{attrs:{src:"/static/img/user/icon1.png"}})],1),e("v-uni-view",{staticClass:"name"},[t._v("USDT")]),e("v-uni-view",{staticClass:"right"},[t._v("0")]),e("v-uni-view",{staticClass:"clear"})],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-view",{staticClass:"icon"},[e("v-uni-image",{attrs:{src:"/static/img/user/icon2.png"}})],1),e("v-uni-view",{staticClass:"name"},[t._v("波场")]),e("v-uni-view",{staticClass:"right"},[e("uni-icons",{staticStyle:{color:"#9F9380"},attrs:{type:"forward"}})],1),e("v-uni-view",{staticClass:"clear"})],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-view",{staticClass:"icon"},[e("v-uni-image",{attrs:{src:"/static/img/user/icon3.png"}})],1),e("v-uni-view",{staticClass:"name"},[t._v("币安")]),e("v-uni-view",{staticClass:"right"},[e("uni-icons",{staticStyle:{color:"#9F9380"},attrs:{type:"forward"}})],1),e("v-uni-view",{staticClass:"clear"})],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-view",{staticClass:"icon"},[e("v-uni-image",{attrs:{src:"/static/img/user/icon4.png"}})],1),e("v-uni-view",{staticClass:"name"},[t._v("质押")]),e("v-uni-view",{staticClass:"right"},[t._v("0")]),e("v-uni-view",{staticClass:"clear"})],1)],1),e("v-uni-view",{staticClass:"toolbar"},[e("v-uni-view",{staticClass:"items",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toList.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"icon"},[t._v("我的质押")]),e("v-uni-view",{staticClass:"right"},[e("uni-icons",{staticStyle:{color:"#9F9380"},attrs:{type:"forward"}})],1),e("v-uni-view",{staticClass:"clear"})],1),e("v-uni-view",{staticClass:"items",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDtail.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"icon"},[t._v("资金明细")]),e("v-uni-view",{staticClass:"right"},[e("uni-icons",{staticStyle:{color:"#9F9380"},attrs:{type:"forward"}})],1),e("v-uni-view",{staticClass:"clear"})],1),e("v-uni-view",{staticClass:"items",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toTeam.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"icon"},[t._v("我的团队")]),e("v-uni-view",{staticClass:"right"},[e("uni-icons",{staticStyle:{color:"#9F9380"},attrs:{type:"forward"}})],1),e("v-uni-view",{staticClass:"clear"})],1)],1)],1)},s=[]},"616f":function(t,i,e){"use strict";var a=e("2db7"),n=e.n(a);n.a},"71ed":function(t,i,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("203c")),s={info:function(){return n.default.get("/user_info",{})},moneyLog:function(t){return n.default.get("/get_wallet_log",t)},invite:function(){return n.default.get("/invite_info",{})},withdraw:function(t){return n.default.get("/api_withdraw",t)},transfer:function(t){return n.default.get("/transfer",t)},team:function(t){return n.default.get("/my_team",t)},pldege:function(t){return n.default.get("/get_order",t)},detail:function(t){return n.default.get("/get_order_details",t)},address:function(t){return n.default.get("/get_wallet_address",t)}};i.default=s},8299:function(t,i,e){"use strict";e.r(i);var a=e("0531"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},ad7f:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-7e7402a2]{position:relative;background-color:#f9f3e7}body.?%PAGE?%[data-v-7e7402a2]{background-color:#f9f3e7}.status[data-v-7e7402a2]{width:100%;height:0;position:fixed;z-index:10;background-color:#f06c7a;top:0}.header[data-v-7e7402a2]{width:92%;padding:0 4%;height:%?100?%;display:flex;justify-content:flex-end;align-items:center;position:fixed;top:0;z-index:10;background-color:#f9f3e7}.header .icon-btn[data-v-7e7402a2]{width:%?120?%;height:%?60?%;flex-shrink:0;display:flex}.header .icon-btn .icon[data-v-7e7402a2]{color:#fff;width:%?60?%;height:%?60?%;display:flex;justify-content:flex-end;align-items:center;font-size:%?42?%}.place[data-v-7e7402a2]{background-color:#f9f3e7;height:%?100?%}.place-bottom[data-v-7e7402a2]{height:%?300?%}.user[data-v-7e7402a2]{width:92%;padding:0 4%;display:flex;align-items:center;background-color:#f9f3e7;background-image:url(/static/img/user/bg.png);background-size:cover;padding-bottom:%?120?%}.user .left[data-v-7e7402a2]{width:20vw;height:20vw;flex-shrink:0;margin-right:%?20?%;border:solid %?1?% #fff;border-radius:100%}.user .left uni-image[data-v-7e7402a2]{width:20vw;height:20vw;border-radius:100%}.user .right[data-v-7e7402a2]{width:100%}.user .right .username[data-v-7e7402a2]{font-size:%?36?%;color:#4a3a35}.user .right .signature[data-v-7e7402a2]{margin-top:%?10?%;color:#eee;font-size:%?28?%;background-image:url(/static/img/user/vip.png);background-repeat:no-repeat;height:%?40?%}.user .erweima[data-v-7e7402a2]{flex-shrink:0;width:10vw;height:10vw;margin-left:5vw;border-radius:100%;display:flex;justify-content:center;align-items:center}.user .erweima .icon[data-v-7e7402a2]{color:#7b6335;font-size:%?42?%}.order[data-v-7e7402a2]{width:98%;height:%?168?%;margin:%?0?% auto;margin-top:%?-80?%;padding-top:%?46?%;background-image:url(/static/img/user/order-bg.png);background-repeat:no-repeat;background-size:cover}.order .btns[data-v-7e7402a2]{float:left;width:33.3%;text-align:center}.VIP[data-v-7e7402a2]{width:100%;height:%?220?%;margin:%?-100?% auto 0 auto;background-image:url(/static/img/user/vip-bg.png);background-repeat:no-repeat;background-size:cover;border-radius:%?15?%;display:flex;align-items:center}.VIP .title[data-v-7e7402a2]{width:%?104?%;height:%?40?%;margin-left:%?120?%;margin-top:%?28?%;color:#796335;font-size:%?30?%;background-image:url(/static/img/user/vip-font.png);background-repeat:no-repeat}.VIP .tis[data-v-7e7402a2]{width:%?112?%;height:%?28?%;margin-left:%?30?%;margin-top:%?34?%;display:flex;color:#fcf0d0;font-size:%?26?%;background-image:url(/static/img/user/invite.png);background-repeat:no-repeat}.VIP .share[data-v-7e7402a2]{margin-left:%?140?%;margin-top:%?24?%;width:%?132?%;display:flex;justify-content:flex-end;height:%?48?%;background-image:url(/static/img/user/share.png);background-repeat:no-repeat}.toolbar[data-v-7e7402a2]{width:92%;margin:0 4% %?24?% 4%;background-color:#fffbf1;box-shadow:%?0?% %?0?% %?25?% rgba(0,0,0,.1);border-radius:%?15?%}.toolbar .items[data-v-7e7402a2]{border:%?1?% solid #eee}.toolbar .items .icon[data-v-7e7402a2]{padding:%?26?% 0 %?26?% %?32?%;float:left;font-size:%?32?%;font-weight:400}.toolbar .items .icon uni-image[data-v-7e7402a2]{width:%?48?%;height:%?48?%;border-radius:%?48?%}.toolbar .items .name[data-v-7e7402a2]{padding:%?38?% 0 %?26?% %?32?%;float:left}.toolbar .items .right[data-v-7e7402a2]{padding:%?38?% %?48?% %?0?% %?0?%;float:right}.toolbar .items .clear[data-v-7e7402a2]{clear:both}',""]),t.exports=i},cabe:function(t,i,e){"use strict";e.r(i);var a=e("374a"),n=e("8299");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("616f");var o=e("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"7e7402a2",null,!1,a["a"],void 0);i["default"]=r.exports}}]);