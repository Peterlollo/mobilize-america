import Vue from 'vue'
import Vuex from 'vuex'
import events from './events'
import * as eventsActions from './events/actions'
import * as eventsGetters from './events/getters'

Vue.use(Vuex)

const modules = {events}
const actions = Object.assign(eventsActions)
const getters = Object.assign(eventsGetters)
const store = new Vuex.Store({
  actions,
  getters,
  modules
})

Vue.use(store)

export default store
