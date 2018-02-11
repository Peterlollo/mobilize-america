import {
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILURE,
  FILTER_BY_ZIPCODE,
  CLEAR_ZIPCODE
} from './types'

const state = {
  error: null,
  events: [],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  zipcode: null,
  distance: null
}

const mutations = {

  [GET_EVENTS_SUCCESS] (state, events) {
    state.events = events.data.data.events
  },

  [GET_EVENTS_FAILURE] (state, error) {
    state.error = error
  },

  [FILTER_BY_ZIPCODE] (state, settings) {
    state.zipcode = settings.zipcode
    state.distance = settings.distance
  },

  [CLEAR_ZIPCODE] (state) {
    state.zipcode = null
    state.distance = null
  }

}

export default { state, mutations }
