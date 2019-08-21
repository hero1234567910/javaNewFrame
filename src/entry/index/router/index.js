import Vue from 'vue'
import Router from 'vue-router';
import Login from '../components/views/Login.vue';
import Home from '../components/views/home.vue';

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/Login',
            name:'Login',
            component:Login
        },
        {
            path:'/Home',
            name:'Home',
            component:Home
        },
    ]
})


