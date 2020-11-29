import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import resize from "vue-element-resize-detector"
Vue.use(resize)

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

