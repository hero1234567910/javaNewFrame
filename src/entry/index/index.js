import Vue from 'vue'
import ElementUI from 'element-ui'
import indexView from './index.vue'
import axios from 'axios'
import Router from 'vue-router';
import router from './router/index.js'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';

Vue.use(ElementUI);
Vue.prototype.axios = axios;

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  let user = localStorage.getItem('m_token');
  if(to.path == '/Login'){
      if(user){
          next({path:'/'})
      }else{
          next();
      }
  }else{
      if(!user){
          next({path:'/Login'})
      }else{
          next();
      }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(indexView),
})

