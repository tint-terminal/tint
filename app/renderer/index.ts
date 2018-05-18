import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { createRouter } from './router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: createRouter(),
  render: h => h(App),
})
