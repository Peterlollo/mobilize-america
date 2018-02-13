import zipcodes from 'zipcodes'

export const sortRecurringEventsByDate = (events) => {
  // for recurring events, sort times chronologically
  return events.map((e) => {
    e.times.sort((a, b) => {
      return a.start < b.start ? -1 : 1
    })
    return e
  })
}

export const filterEventsByZipcode = (zipcode, distance, events) => {
  // if zipcode entered, only show events within the entered distance from the entered zip
  return events.filter((e) => {
    let eventZipcode = e.location.zipcode
    if (!eventZipcode) {
      return false
    } else {
      return zipcodes.distance(zipcode, e.location.zipcode) < distance
    }
  })
}
