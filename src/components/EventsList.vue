<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id='events-list'>
      <h2>Upcoming Events</h2>
      <div v-if='sortedEvents.length' id='events-table'>
        <EventSingle v-for='event in sortedEvents' :event='event' :key='event.id'/>
      </div>
      <div v-else>Pardon us, there's an error somewhere. Please try again.</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EventSingle from './EventSingle'
import { sortRecurringEventsByDate } from '../helpers/eventHelpers'

export default {
  name: 'EventsList',
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
      msg: 'Welcome to Your Events List'
    }
  },
  created () {
    this.getEvents()
  }
}
</script>

<style scoped>
</style>
