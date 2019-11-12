import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store.js'
import './assets/variables.scss'
import './assets/styles.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

