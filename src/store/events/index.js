import {
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILURE,
  FILTER_BY_ZIPCODE,
  CLEAR_ZIPCODE,
  SHOW_MAP,
  HIDE_MAP
} from './types'

import zipcodes from 'zipcodes'

const state = {
  error: null,
  events: [],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  zipcode: null,
  latitude: null,
  longitude: null,
  distance: null,
  mapShowing: false
}

const mutations = {

  [GET_EVENTS_SUCCESS] (state, events) {
    state.events = events.data.data.events
  },

  [GET_EVENTS_FAILURE] (state, error) {
    state.error = error
  },

  [FILTER_BY_ZIPCODE] (state, settings) {
    let zipcodeData = zipcodes.lookup(settings.zipcode)
    state.zipcode = settings.zipcode
    state.distance = settings.distance
    state.latitude = zipcodeData.latitude
    state.longitude = zipcodeData.longitude
  },

  [CLEAR_ZIPCODE] (state) {
    state.zipcode = null
    state.distance = null
    state.latitude = null
    state.longitude = null
  },

  [SHOW_MAP] (state) {
    state.mapShowing = true
  },

  [HIDE_MAP] (state) {
    state.mapShowing = false
  }

}

export default { state, mutations }
