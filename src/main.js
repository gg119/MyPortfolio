import Vue from 'vue'
import App from './App.vue'
import VueHead from 'vue-head'
import router from './router'
import titleMixin from './titleMixin'

Vue.mixin(titleMixin)
Vue.use(VueHead)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
