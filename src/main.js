import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import 'animate.css'
import 'aos/dist/aos.css'
import '@/assets/main.scss'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },

  router,
  store,
  render: h => h(App)
}).$mount('#app')
