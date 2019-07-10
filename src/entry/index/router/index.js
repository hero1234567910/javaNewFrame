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
            path:'/',
            name:'Home',
            component:Home
        },
    ]
})

// router.beforeEach((to, from, next) => {
//     // to and from are both route objects. must call `next`.
//     let user = localStorage.getItem('m_token');
//     if(to.path == '/Login'){
//         if(user){
//             next({path:'/'})
//         }else{
//             next();
//         }
//     }else{
//         if(!user){
//             next({path:'/login'})
//         }else{
//             next();
//         }
//     }
// });
