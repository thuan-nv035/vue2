import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component(  'myButton',  {
  data() {
    return {
      buttonText: ' myButton'
    }
  },
      template:' <button>{{buttonText}} </button>'
  })
Vue.component( 'mySelect', {
  template: '<select><option>Vui Lòng chọn</option></select>'
})

Vue.component('custom-button',{
  props:{
    href: String,
  },
  components: {

  },
  data(){
    return {
    }
  },
  template: `<button ><a :href="href">Helloooo</a></button>`
})

new Vue({
  render: h => h(App),
}).$mount('#app')
