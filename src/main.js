// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/weather'
    },
    {
      path: '/weather',
      name: 'weather',
      component: _ => import('./components/one.vue')
    },
    {
      path: '/traffic',
      name: 'traffic',
      component: _ => import('./components/weather.vue')
    },{
      path: '/video',
      name: 'video',
      component: _ => import('./components/video.vue')
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
