/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './Router/router'

//VueSimplemde
import VueSimplemde from 'vue-simplemde'
Vue.component('vue-simplemde', VueSimplemde)

import md from 'marked'
window.md = md
//Class Import
import User from './Helpers/User'
window.User = User;
//console.log(User.loggedIn())


window.EventBus = new Vue();



Vue.use(Vuetify)


// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('AppHome', require('./components/AppHome.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
    el: '#app',
    router
});
