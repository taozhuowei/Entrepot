import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        redirect: (to) => {
            return '/home';
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@v/home/home.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@v/admin/admin.vue'),
        children: [
            {
                path: 'write',
                component: () => import('@v/write/write.vue')
            }
        ]
    }
];
export default createRouter({
    history: createWebHashHistory(),
    routes
});
//# sourceMappingURL=index.js.map