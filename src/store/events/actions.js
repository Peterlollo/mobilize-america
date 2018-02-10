import axios from 'axios'

export const getEvents = () => {
  axios.get('https://mobilize-mock-api.herokuapp.com/api/events')
    .then(response => {
    // JSON responses are automatically parsed.
      // this.posts = response.data
      console.log('response: ', response)
    })
    .catch(e => {
      // this.errors.push(e)
      console.log('error: ', e)
    })
}
