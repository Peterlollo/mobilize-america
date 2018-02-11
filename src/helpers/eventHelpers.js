export const sortRecurringEventsByDate = (events) => {
  return events.map((e) => {
    e.times.sort((a, b) => {
      return a.start < b.start ? -1 : 1
    })
    return e
  })
}
