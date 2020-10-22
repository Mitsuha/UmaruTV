import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/views/Index";
import Media from "@/views/Media";
import Episode from "@/views/Episode";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        }, {
            path: '/media',
            name: 'media',
            component: Media
        }, {
            path: '/episode',
            name: 'episode',
            component: Episode
        },
    ]
})