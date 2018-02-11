<template>
  <div>
    <div id="events">
      <h1>{{ msg }}</h1>
      <div id='events-list'>
        <h2>Upcoming Events</h2>
        <div v-if='sortedEvents.length' id='events-table'>
          <EventSingle v-for='event in sortedEvents' :event='event' :key='event.id'/>
        </div>
        <div v-else>Pardon us, there's an error somewhere. Please try again.</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EventSingle from './EventSingle'
import { sortRecurringEventsByDate } from '../helpers/eventHelpers'

export default {
  name: 'Events',
  methods: mapActions([ 'getEvents' ]),
  computed: {
    sortedEvents () {
      return sortRecurringEventsByDate(this.upcomingEvents)
    },
    ...mapGetters([ 'events', 'upcomingEvents' ])
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
