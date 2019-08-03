import Vue from 'vue'
import App from './App.vue'
import Body from './components/Body.vue'

Vue.config.productionTip = false
Vue.component('app-body', Body)
new Vue({
  render: h => h(App)
}).$mount('#app')
