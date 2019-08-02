import Vue from 'vue'
import ElementUI from 'element-ui'
import LoginView from '../views/Login.vue'
import 'element-ui/lib/theme-chalk/index.css'
import evn from '../../utils/evn.js';
import axios from 'axios'

Vue.use(ElementUI)
Vue.prototype.axios = axios

function model(http){
  return{
    Login(data){
      return http.post(evn.SEC_HOSAPI +'/sys/login',data,{
        headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    }

  }
  
}
export default model