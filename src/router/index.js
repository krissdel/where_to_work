import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Material',
    name: 'Material',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Material.vue')
  },
  {
    path: '/Worker',
    name: 'Worker',
    component: () => import( '../views/Worker.vue') 
  },
  {
    path: '/Place',
    name: 'Place',
    component: () => import( '../views/Place.vue') 
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: () => import( '../views/Signup.vue') 
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
