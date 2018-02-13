export const events = state => state.events.events
export const error = state => state.events.error
export const months = state => state.events.months
export const days = state => state.events.days
export const zipcode = state => state.events.zipcode
export const mapShowing = state => state.events.mapShowing
export const zipcodeSettings = state => {
  let zipcode = state.events.zipcode
  let distance = state.events.distance
  let latitude = state.events.latitude
  let longitude = state.events.longitude
  return {zipcode, distance, latitude, longitude}
}
export const upcomingEvents = state => {
  let events = state.events.events
  let now = new Date().toISOString()
  return events.filter((e) => {
    e.times = e.times.filter((t) => {
      return t.start > now
    })
    return e.times.length
  })
}
