import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueObserveVisibility from 'vue-observe-visibility'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import 'animate.css'
import '@/assets/main.scss'

Vue.use(VueObserveVisibility)

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
