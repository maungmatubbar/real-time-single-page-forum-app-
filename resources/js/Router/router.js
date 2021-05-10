

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import login from '../components/login/Login'
import signup from '../components/login/Signup'
import forum from '../components/forum/Forum'
import logout from '../components/login/Logout'
const routes = [
     { path: '/login', component: login },
     { path: '/logout', component: logout },
     { path: '/signup', component: signup },
     { path: '/forum', component: forum ,name:'forum'}
]

const router = new VueRouter({
    routes ,// short for `routes: routes`
    hashbang:false,
    mode:'history'
})


export default router
