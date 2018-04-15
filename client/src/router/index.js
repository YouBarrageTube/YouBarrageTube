import Vue from 'vue'
import Router from 'vue-router'
import VideoPage from '../components/VideoPage'
import HomePage from '../components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/videos/videoID',
      name: 'VideoPage',
      component: VideoPage
    }
  ]
})
