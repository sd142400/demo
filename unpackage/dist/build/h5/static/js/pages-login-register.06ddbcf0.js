(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-register"],{"01ad":function(e,t,n){var i=n("f039");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("8639f4d4",i,!0,{sourceMap:!1,shadowMode:!1})},"0cf8":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("e9c4"),n("ac1f"),n("00b4");var o=i(n("051f")),a={data:function(){return{phoneNumber:"",code:"",passwd:"",acc:"",invite:"",sms:0,getCodeText:"获取验证码",getCodeBtnColor:"#9F9380",getCodeisWaiting:!1,pwdFlag:!0,list:this.$t("login.country"),country:!1,countryName:"中国大陆",countryCode:"+86",verifyCode:""}},onLoad:function(){console.log(this.list)},methods:{bindClick:function(e){console.log("点击item，返回数据"+JSON.stringify(e)),this.changeCountry(),this.countryName=e.item.city,this.countryCode=e.item.code},changePwd:function(){this.pwdFlag=!this.pwdFlag},changeCountry:function(){for(var e=0;e<this.list.length;e++)for(var t=0;t<this.list[e].data.length;t++)this.list[e].data[t].checked=!1;console.log(this.list),this.country=!this.country},Timer:function(){},getCode:function(){var e=this;if(uni.hideKeyboard(),!this.getCodeisWaiting){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return uni.showToast({title:"请填写正确手机号码",icon:"none"}),!1;this.getCodeText="发送中...",this.getCodeisWaiting=!0,this.getCodeBtnColor="#9F9380",o.default.send({phone:this.phoneNumber,areaCode:this.countryCode}).then((function(t){uni.showToast({title:t.data.data.msg,icon:"none"}),e.sms=t.data.data.smsId,e.setTimer()}))}},setTimer:function(){var e=this,t=60;this.getCodeText="重新获取(60)",this.Timer=setInterval((function(){if(t<=0)return e.getCodeisWaiting=!1,e.getCodeBtnColor="#9F9380",e.getCodeText="获取验证码",void clearInterval(e.Timer);e.getCodeText="重新获取("+t+")",t--}),1e3)},doReg:function(){if(uni.hideKeyboard(),!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return uni.showToast({title:"请填写正确手机号码",icon:"none"}),!1;uni.showLoading({title:"提交中..."});var e={areaCode:this.countryCode,phone:this.phoneNumber,acc:this.acc,sms_id:this.sms,sms_code:this.code,pwd:this.passwd,inviteCode:this.invite};o.default.reg(e).then((function(e){uni.hideLoading(),uni.showToast({title:"注册成功",icon:"success"}),setTimeout((function(){uni.redirectTo({url:"login"})}),1e3)}),(function(e){uni.hideLoading()}))},toLogin:function(){uni.hideKeyboard(),uni.redirectTo({url:"login"}),uni.navigateBack()}}};t.default=a},6217:function(e,t,n){"use strict";n.r(t);var i=n("0cf8"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},6356:function(e,t,n){"use strict";n.r(t);var i=n("6370"),o=n("6217");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("8337");var s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"3c4f62e4",null,!1,i["a"],void 0);t["default"]=c.exports},6370:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("d10f").default,uniIndexedList:n("40d4").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"logo"},[n("v-uni-view",{staticClass:"img"},[n("v-uni-image",{attrs:{mode:"widthFix",src:"/static/img/login/logo.png"}})],1)],1),n("v-uni-view",{staticClass:"form re"},[n("v-uni-view",{staticClass:"country",staticStyle:{color:"#9F9380"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeCountry.apply(void 0,arguments)}}},[e._v(e._s(e.countryName)),n("v-uni-view",{staticStyle:{position:"absolute",right:"80upx"}},[e._v(e._s(e.countryCode)),n("uni-icons",{staticStyle:{color:"#9F9380"},attrs:{type:"forward"}})],1)],1),n("v-uni-view",{staticClass:"username"},[n("v-uni-input",{attrs:{placeholder:"请输入手机号","placeholder-style":"color: #9F9380"},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})],1),n("v-uni-view",{staticClass:"code"},[n("v-uni-view",{staticClass:"get-code",style:{color:e.getCodeBtnColor},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.getCode()}}},[e._v(e._s(e.getCodeText))]),n("v-uni-input",{attrs:{placeholder:"请输入验证码","placeholder-style":"color: #9F9380;"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),n("v-uni-view",{staticClass:"username"},[n("v-uni-input",{attrs:{placeholder:"请输入账号","placeholder-style":"color: #9F9380"},model:{value:e.acc,callback:function(t){e.acc=t},expression:"acc"}})],1),n("v-uni-view",{staticClass:"password"},[n("v-uni-input",{attrs:{placeholder:"请输入密码",password:e.pwdFlag,"placeholder-style":"color: #9F9380;"},model:{value:e.passwd,callback:function(t){e.passwd=t},expression:"passwd"}}),n("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:e.pwdFlag,expression:"pwdFlag"}],staticClass:"see",attrs:{src:"/static/img/login/close.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changePwd.apply(void 0,arguments)}}}),n("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:!e.pwdFlag,expression:"!pwdFlag"}],staticClass:"see",attrs:{src:"/static/img/login/open.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changePwd.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"invite"},[n("v-uni-input",{attrs:{placeholder:"请输入邀请码","placeholder-style":"color: #9F9380"},model:{value:e.invite,callback:function(t){e.invite=t},expression:"invite"}})],1),n("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.doReg.apply(void 0,arguments)}}},[e._v("立即注册")]),n("v-uni-view",{staticClass:"res"},[n("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toLogin.apply(void 0,arguments)}}},[e._v("已有账号立即登录")])],1)],1),n("uni-indexed-list",{directives:[{name:"show",rawName:"v-show",value:e.country,expression:"country"}],staticStyle:{"z-index":"99"},attrs:{options:e.list,showSelect:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.bindClick.apply(void 0,arguments)}}})],1)},a=[]},8337:function(e,t,n){"use strict";var i=n("01ad"),o=n.n(i);o.a},f039:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-3c4f62e4]{background:#f9f3e7;height:100%}body.?%PAGE?%[data-v-3c4f62e4]{background:#f9f3e7}.icon[data-v-3c4f62e4]{color:#fff}.logo[data-v-3c4f62e4]{width:100%;height:45vw;display:flex;justify-content:center;align-items:center}.logo .img[data-v-3c4f62e4]{width:25%;height:25vw}.logo .img uni-image[data-v-3c4f62e4]{width:100%}.form[data-v-3c4f62e4]{width:86%;padding:0 7%;font-size:%?30?%}.form .username[data-v-3c4f62e4],\n.form .password[data-v-3c4f62e4],\n.form .invite[data-v-3c4f62e4],\n.form .country[data-v-3c4f62e4],\n.form .code[data-v-3c4f62e4]{width:calc(100% - %?90?%);height:%?90?%;display:flex;align-items:center;border-radius:%?15?%;background-color:#f0ead9;padding:0 %?45?%;margin-bottom:%?26?%;background-repeat:no-repeat;background-position:%?32?% %?28?%}.form .username uni-input[data-v-3c4f62e4],\n.form .password uni-input[data-v-3c4f62e4],\n.form .invite uni-input[data-v-3c4f62e4],\n.form .country uni-input[data-v-3c4f62e4],\n.form .code uni-input[data-v-3c4f62e4]{width:100%;height:%?50?%;color:#9f9380;font-weight:200;margin-left:%?40?%}.form .username .uni-input-placeholder[data-v-3c4f62e4],\n.form .password .uni-input-placeholder[data-v-3c4f62e4],\n.form .invite .uni-input-placeholder[data-v-3c4f62e4],\n.form .country .uni-input-placeholder[data-v-3c4f62e4],\n.form .code .uni-input-placeholder[data-v-3c4f62e4]{margin-left:%?10?%}.form .username[data-v-3c4f62e4]{background-image:url(/static/img/login/username.png)}.form .password[data-v-3c4f62e4]{background-image:url(/static/img/login/pwd.png)}.form .password .see[data-v-3c4f62e4]{width:%?64?%;height:%?40?%}.form .invite[data-v-3c4f62e4]{background-image:url(/static/img/login/invite.png)}.form .btn[data-v-3c4f62e4]{color:#fff;width:100%;height:%?90?%;display:flex;justify-content:center;align-items:center;border-radius:%?15?%;background-color:#956e31;font-size:%?40?%;margin-top:%?150?%}.form .res[data-v-3c4f62e4]{display:flex;justify-content:center;align-items:center;height:%?16?%;color:#956e31}.re .code[data-v-3c4f62e4]{position:relative}.re .code .get-code[data-v-3c4f62e4]{position:absolute;height:%?90?%;display:flex;align-items:center;justify-content:center;right:0;padding:0 %?40?%;z-index:3}.re .code .get-code[data-v-3c4f62e4]:after{content:" ";width:%?1?%;height:%?50?%;background-color:#9d8254;position:absolute;z-index:3;margin-right:100%;left:0;top:%?20?%}.re .res[data-v-3c4f62e4]{display:none;justify-content:space-between;align-items:center;height:%?16?%;color:#956e31}',""]),e.exports=t}}]);