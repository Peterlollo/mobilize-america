import {
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILURE,
  FILTER_BY_ZIPCODE,
  CLEAR_ZIPCODE,
  SHOW_MAP,
  HIDE_MAP
} from './types'
import axios from 'axios'

export const getEvents = ({commit}) => {
  axios.get('https://mobilize-mock-api.herokuapp.com/api/events')
    .then(events => {
      commit(GET_EVENTS_SUCCESS, events)
    })
    .catch(e => {
      commit(GET_EVENTS_FAILURE, e)
    })
}

export const filterByZipcode = ({commit}, settings) => {
  commit(FILTER_BY_ZIPCODE, settings)
}
export const clearZipcode = ({commit}, zip) => {
  commit(CLEAR_ZIPCODE)
}

export const showMap = ({commit}) => {
  commit(SHOW_MAP)
}

export const hideMap = ({commit}) => {
  commit(HIDE_MAP)
}
