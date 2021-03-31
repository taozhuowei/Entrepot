import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: About
  },
  {
    path: '/Today',
    name: 'Today',
    component: () => import( '../views/Today.vue')
   },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
