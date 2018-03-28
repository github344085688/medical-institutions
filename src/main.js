// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './enterprise/statedata'
Vue.config.productionTip = false
import publiCmethods from './publiCmethods'
Vue.use(publiCmethods);
import './assets/elcss/index.css'
import Element from 'element-ui'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import {ch} from './enterprise/language/Chinese'
import {en} from './enterprise/language/English'
Vue.use(VueI18n)
const messages = {
  en: {
    ...en,
    ...enLocale
  },
  zh: {
    ...ch,
    ...zhLocale
  }
}
const i18n = new VueI18n({
  locale: 'zh',
  messages,
})
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  template: '<App/>',
  components: { App }
})
