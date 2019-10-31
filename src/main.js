// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import axios from 'axios'

axios.defaults.xsrfHeaderName = 'X-CSRFToken'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$api = 'http://127.0.0.1:8000/api/'

const config = {
  apiKey: 'AIzaSyA9992fhuMYvv-9gLKj9TEJt0M9_6OlsF8',
  authDomain: 'posshop.firebaseapp.com',
  databaseURL: 'https://posshop.firebaseio.com',
  projectId: 'posshop',
  storageBucket: 'posshop.appspot.com',
  messagingSenderId: '279993257503'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.component('MenuBar', {
  template: '<button type="button" class="btn btn-success" onclick="javascript:ShowModalGoods();">New Goods</button>'
})
