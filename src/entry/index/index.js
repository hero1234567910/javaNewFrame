import Vue from 'vue'
import ElementUI from 'element-ui'
import indexView from './index.vue'
import axios from 'axios'
import router from './router/index.js'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.prototype.axios = axios;
new Vue({
  el: '#app',
  router,
  render: h => h(indexView)
})