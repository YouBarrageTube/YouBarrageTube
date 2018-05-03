import Vue from 'vue'
import Router from 'vue-router'
import VideoPage from '../components/VideoPage'
import HomePage from '../components/HomePage'
import CareerPage from '../components/CareerPage'
import AboutUs from '../components/AboutUs'
import SearchPage from '../components/SearchPage'

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
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage,
      props: (route) => ({query: route.query.keyword})
    },
    {
      path: '/extension',
      beforeEnter() { location.href = 'https://chrome.google.com/webstore/detail/youbarragetube/nfolmkdajkapgfohdagpadfcdfhijhne?hl=en' }
  }
  ]
})
