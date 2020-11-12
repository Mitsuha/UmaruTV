import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/views/Index";
import Media from "@/views/Media";
import Episode from "@/views/Episode";
import Auth from "./views/Auth";

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        }, {
            path: '/anime/:id',
            name: 'media',
            component: Media
        }, {
            path: '/anime/:aid/episode/:eid?',
            name: 'episode',
            component: Episode
        },{
            path: '/login',
            name: 'login',
            component: Auth
        },{
            path: '/register',
            name: 'register',
            component: Auth
        },
    ]
})