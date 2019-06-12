// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './style/animation.styl'
import './directives.js';

// import vuexI18n from 'vuex-i18n'
// import languageDataList from './locale'
// Vue.use(vuexI18n.plugin)

Vue.config.productionTip = false
Vue.use(ElementUI)

//自动设置语言
// for (let i = 0; i < languageDataList.length; i++) {
//   Vue.i18n.add(languageDataList[i].language, languageDataList[i].data)
// }
// Vue.i18n.set($getLanguage())
// filters
// Object.keys(filters).forEach((item) => {
//   Vue.filter(item, filters[item])
// })

//存储token
if (localStorage.getItem('userToken') && !store.state.userToken) {
  store.commit('saveToken', localStorage.getItem('userToken'));

} else {
  console.log(store.state.userToken);
  
}
String.prototype.replaceAll=function(f,e){
  var reg=new RegExp(f,"g");   
  return this.replace(reg,e); 
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
