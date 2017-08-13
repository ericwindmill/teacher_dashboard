import Vue from 'vue'
import Vuex from 'vuex'
import assignments from './modules/assignments/assignments'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    assignments,
  }
})

export default store
