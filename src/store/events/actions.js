import {GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE} from './types'
import axios from 'axios'

export const getEvents = ({commit}) => {
  axios.get('https://mobilize-mock-api.herokuapp.com/api/events')
    .then(events => {
      commit(GET_EVENTS_SUCCESS, events)
      // console.log('response: ', events)
      console.log('events: ', events.data.data.events)
    })
    .catch(e => {
      commit(GET_EVENTS_FAILURE, e)
      console.log('error: ', e)
    })
}
