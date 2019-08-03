import Vue from 'vue'
import App from './App.vue'

Vue.directive('styling', {
  bind (el, binding, vNode) {
    console.log(el)
    console.log(binding)
    console.log(vNode)
    let delay = 0
    if (binding.modifiers.delay) {
      delay = 3000
    }
    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
