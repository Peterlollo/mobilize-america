import {GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE} from './types'

const state = {
  error: null,
  events: []
}

const mutations = {

  [GET_EVENTS_SUCCESS] (state, events) {
    state.events = events.data.data.events
  },

  [GET_EVENTS_FAILURE] (state, error) {
    state.error = error
  }

}

export default { state, mutations }
