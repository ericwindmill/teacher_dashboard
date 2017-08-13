import Vuex from 'vuex'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons/circle'
import 'vue-awesome/icons/check-circle'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)
// require('./assets/styles/variables.scss')


Vue.use(Vuex)
import store from './store/store'
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
