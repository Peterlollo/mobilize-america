<template>
  <div>
    <div id="events">
      <h1>Events</h1>
      <div id='events-list' v-if='this.events.length'>
        <ViewOptions />
        <EventList v-if='!mapShowing'/>
        <Map v-else/>
      </div>
      <div v-else>
        <div class='try-again'>
          <h2>Pardon us, there's an error somewhere. Please try again.</h2>
          <button class='btn sm' v-on:click='getEvents'>Find Events</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EventList from './EventList'
import ViewOptions from './ViewOptions'
import Map from './Map'

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
    ...mapGetters(['events', 'mapShowing'])
  },
  components: {EventList, ViewOptions, Map},
  created () {
    if (!this.events.length) {
      this.getEvents()
    }
  }
}
</script>

<style scoped>
#events {
  margin: 30px 0 0 0;
  padding: 10px 0 50px 0;
}
.try-again {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sm {
  width: 60%;
}
</style>
