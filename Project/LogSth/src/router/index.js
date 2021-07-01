import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/home.vue')
    }
]

export default  createRouter({
    history: createWebHashHistory(),
    routes
})