import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'  
import enUS from 'utils/lang/en-US.js'
import zhCN from 'utils/lang/zh-CN.js'
Vue.use(VueI18n)  
//https://blog.csdn.net/qq_35634154/article/details/127428638
const locales={
　　'en-US':enUS,
	'zh-CN':zhCN
};
const i18n = new VueI18n({  
  locale: 'zh-CN',  // 默认选择的语言
  messages : locales
})
Vue.prototype._i18n = i18n 
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	i18n,
    ...App
})
app.$mount()
