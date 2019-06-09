import Vue from 'vue'
import Router from 'vue-router'
import Intro from './views/Intro.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: () => import('./views/Home.vue')
    // },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('./views/Community.vue')
    },
    {
      path: '*',
      name: 'error404',
      component: () => import('./views/Error404.vue')
    },
  ]
})
