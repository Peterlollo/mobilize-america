<template>
  <div class='event-list'>
    <div v-if='eventsToShow.length' id='events-table'>
      <EventSingle v-for='event in eventsToShow' :event='event' :key='event.id'/>
    </div>
    <div v-else>No events in that range</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EventSingle from './EventSingle'
import { sortRecurringEventsByDate, filterEventsByZipcode } from '../helpers/eventHelpers'
export default {
  name: 'EventList',
  computed: {
    eventsToShow () {
      // show filtered events if user has entered a zipcode
      // else show sorted events
      let zipcode = this.zipcodeSettings.zipcode
      let distance = this.zipcodeSettings.distance
      return zipcode ? filterEventsByZipcode(zipcode, distance, this.sortedEvents) : this.sortedEvents
    },
    sortedEvents () {
      // sort event times so that they are in chronological order
      return sortRecurringEventsByDate(this.upcomingEvents)
    },
    ...mapGetters(['upcomingEvents', 'zipcodeSettings'])
  },
  components: {EventSingle},
  data () {
    return {
      mapShowing: false,
      msg: 'Upcoming Events'
    }
  }
}
</script>
