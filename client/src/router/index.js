import Vue from 'vue'
import Router from 'vue-router'
import VideoPage from '../components/VideoPage'
import HomePage from '../components/HomePage'
import CareerPage from '../components/CareerPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/videos/:id',
      name: 'VideoPage',
      component: VideoPage
    },
    {
      path: '/career',
      name: 'CareerPage',
      component: CareerPage
    }
  ]
})
