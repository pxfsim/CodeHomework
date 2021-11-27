import Vue from 'vue'
import App from './App.vue'
import message from './components/index'

Vue.config.productionTip = false
Vue.use(message)

new Vue({
  render: h => h(App),
}).$mount('#app')
