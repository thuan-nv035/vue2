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

new Vue({
  render: h => h(App),
}).$mount('#app')
