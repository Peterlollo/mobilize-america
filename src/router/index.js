import Vue from 'vue'
import Router from 'vue-router'
import EventsList from '@/components/EventsList'
import SidebarFilter from '@/components/SidebarFilter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        sidebar: SidebarFilter,
        main: EventsList
      }
    }
  ]
})
