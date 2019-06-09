import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'intro',
      component: () => import('./views/Intro')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('./views/Community')
    },
    {
      path: '*',
      name: 'error404',
      component: () => import('./views/Error404')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
