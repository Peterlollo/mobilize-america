<template>
  <div>
    <div id="events">
      <h1>{{ msg }}</h1>
      <div id='events-list' v-if='this.events.length'>
        <h2>Upcoming Events</h2>
        <div v-if='eventsToShow.length' id='events-table'>
          <EventSingle v-for='event in eventsToShow' :event='event' :key='event.id'/>
        </div>
        <div v-else>No events in that range</div>
      </div>
      <div v-else>Pardon us, there's an error somewhere. Please try again.</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EventSingle from './EventSingle'
import { sortRecurringEventsByDate, filterEventsByZipcode } from '../helpers/eventHelpers'

export default {
  name: 'Events',
  methods: mapActions([ 'getEvents' ]),
  computed: {
    eventsToShow () {
      let zipcode = this.zipcodeSettings.zipcode
      let distance = this.zipcodeSettings.distance
      return zipcode ? filterEventsByZipcode(zipcode, distance, this.sortedEvents) : this.sortedEvents
    },
    sortedEvents () {
      return sortRecurringEventsByDate(this.upcomingEvents)
    },
    ...mapGetters([ 'events', 'upcomingEvents', 'zipcodeSettings' ])
  },
  components: { EventSingle },
  data () {
    return {
      msg: 'Events List'
    }
  },
  created () {
    this.getEvents()
  }
}
</script>

<style scoped>
#events {
  margin: 30px 0 0 0;
  padding: 10px 0 50px 0;
}
</style>
