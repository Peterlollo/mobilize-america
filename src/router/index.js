import Vue from 'vue'
import Router from 'vue-router'
import Events from '@/components/Events'
import Sidebar from '@/components/Sidebar'
import Map from '@/components/Map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        sidebar: Sidebar,
        main: Events
      }
    },
    {
      path: '/map',
      name: 'map',
      components: {
        main: Map
      }
    }
  ]
})
