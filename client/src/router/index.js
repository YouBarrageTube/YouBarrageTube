import Vue from 'vue'
import Router from 'vue-router'
import BarragePlayer from '../components/BarragePlayer'
import VideoPage from '../components/VideoPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VideoPage',
      component: VideoPage
    }
  ]
})
