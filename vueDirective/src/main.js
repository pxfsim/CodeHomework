import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.directive('vaildate',{
  inserted:function(el, binding){
    console.log('el:', el.parentNode)
    console.log('value:', el.value)
    console.log('binding:', binding)
    let parent = el.parentNode
    let span = document.createElement('span')
    span.style.display='block'
    span.style.color='red'
    span.style.transition='all .5s ease-in .1s;'
    span.innerHTML = binding.value
    parent.appendChild(span)
    setTimeout(()=>{
      span.style.display= 'none'
    }, 1000)
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')