

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import login from '../components/login/Login'
import signup from '../components/login/Signup'
import forum from '../components/forum/Forum'
import logout from '../components/login/Logout'
import read from '../components/forum/Read'
import create from '../components/forum/Create'

const routes = [
     { path: '/login', component: login },
     { path: '/logout', component: logout },
     { path: '/signup', component: signup },
     { path: '/forum', component: forum ,name:'forum'},
     { path: '/question/:slug', component: read ,name:'read'},
     { path: '/ask', component: create}
]

const router = new VueRouter({
    routes ,// short for `routes: routes`
    hashbang:false,
    mode:'history'
})


export default router
