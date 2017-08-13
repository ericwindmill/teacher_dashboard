import Vue from 'vue'
import Vuex from 'vuex'
import assignments from './modules/assignments'
import submissions from './modules/submissions'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    assignments,
    submissions
  }
})

export default store
