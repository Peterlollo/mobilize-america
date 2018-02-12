<template>
  <div>
    <div id="events">
      <h1>Events</h1>
      <div id='events-list' v-if='this.events.length'>
        <div class='view-options'>
          <button class='btn btn-secondary'
            :class='{deactivated: mapShowing}'
            v-on:click='hideMap'>
            Event List
          </button>
          <button class='btn btn-secondary'
            :class='{deactivated: !mapShowing}'
            v-on:click='showMap'>
            Event Map
          </button>
        </div>
        <h2>{{msg}}</h2>
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
  methods: {
    showMap () {
      this.mapShowing = true
    },
    hideMap () {
      this.mapShowing = false
    },
    ...mapActions([ 'getEvents' ])
  },
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
      mapShowing: false,
      msg: 'Upcoming Events'
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
.deactivated {
  background-color: #eee;
}
</style>
