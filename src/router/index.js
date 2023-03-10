import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Main.vue'
import Projectsview from '../views/Projectsview.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projectsview
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    window.scrollTo(0,0);
  },
  
  routes
})

export default router
