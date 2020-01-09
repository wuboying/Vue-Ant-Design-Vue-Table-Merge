import Vue from 'vue'
import App from './App.vue'
import router from './router'
import antDesign from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import _http from './utils/axios'
import _api from './utils/api'
Vue.config.productionTip = false
Vue.use(antDesign);
Vue.prototype.$http = _http
Vue.prototype.$api = _api
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
