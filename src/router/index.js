import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Price from '../views/Price.vue'
import Contact from '../views/Contact.vue'
import CoffeeMap from '../views/CoffeeMap.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/price',
    name: 'Price',
    component: Price
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "price" */ '../views/Price.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/map',
    name: 'CoffeeMap',
    component: CoffeeMap
  },
  {
    path: '*', 
    name: 'NotFound',
    component: NotFound 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
