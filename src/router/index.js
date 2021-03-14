import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,

    },
    {
        name: "Post",
        path: '/post/:id',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/blog.vue')

    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/1dcube.io',
        name: 'Cube',
        component: () =>
            import ('../components/1dcube.io.vue')
    }, {
        path: '*',
        name: '404Page'
    }
]

const router = new VueRouter({
    routes
})

export default router