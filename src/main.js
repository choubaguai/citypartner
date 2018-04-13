// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import './common/css/reset.css'
import './common/css/common.css'
import 'mint-ui/lib/style.css';
Vue.use(Mint);
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)
import axios from 'axios'
Vue.prototype.$ajax = axios
import './common/js/rem.js'
import qs from 'qs'
Vue.prototype.$qs = qs;  
// Vue.prototype.HOST = '/api'
Vue.config.productionTip = false

//引入moment时间插件
import moment from 'moment'
//定义全局过滤器时间时分秒
Vue.filter('datemat',function(input,fmtstring){
  return moment(input).format(fmtstring)
})

//引入validate.js
import './common/js/validate.js'

Vue.filter('color',function(input,a){
  if(input=="正常"){
    this.style.color='red';
  }
})
// preview 插件
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

