import Vuex from 'vuex'
import Vue from 'vue'
import App from './App'
import router from './router'
// require('./assets/styles/variables.scss')


Vue.use(Vuex)
import store from './store/store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
