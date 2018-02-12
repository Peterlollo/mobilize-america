import zipcodes from 'zipcodes'

export const sortRecurringEventsByDate = (events) => {
  return events.map((e) => {
    e.times.sort((a, b) => {
      return a.start < b.start ? -1 : 1
    })
    return e
  })
}

export const filterEventsByZipcode = (zipcode, distance, events) => {
  return events.filter((e) => {
    let eventZipcode = e.location.zipcode
    if (!eventZipcode) {
      return false
    } else {
      console.log('Z>>>', zipcodes.distance(zipcode, e.location.zipcode))
      return zipcodes.distance(zipcode, e.location.zipcode) < distance
    }
  })
}
