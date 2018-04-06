import Vue from 'vue'
import Router from 'vue-router'
import BarragePlayer from '../components/BarragePlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BarragePlayer',
      component: BarragePlayer
    }
  ]
})
