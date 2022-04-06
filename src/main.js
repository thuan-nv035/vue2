import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('custom-button',{
  // props:{
  //   href: String,
  // },
  data(){
    return {
    }
  },
  template: '<button ><a >Helloooo</a></button>'

})

Vue.component(  'myButton',  {
  data() {
    return {
      buttonText: ' myButton'
    }
  },
  template:' <button>{{buttonText}} </button>'
})

new Vue({
  render: h => h(App),
}).$mount('#app')


