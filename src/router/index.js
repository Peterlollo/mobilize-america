import Vue from 'vue'
import Router from 'vue-router'
import Events from '@/components/Events'
import Sidebar from '@/components/Sidebar'

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
    }
  ]
})
