import Vue from 'vue';
import VueRouter from "vue-router";
import Welcome from "./views/welcome.vue";
import Home from "./views/home.vue";
import Story from "./views/story/story.vue";
import Login from "./views/login.vue";


//setup router
Vue.use(VueRouter);
var routes = [
    {path: '/', component: Welcome},
    {path: '/home', component: Home},
    {path: '/login', component: Login},
    {path: '/new', component: Story},
];

var router = new VueRouter({routes});


var App =  new Vue({
    router
}).$mount('#app')
