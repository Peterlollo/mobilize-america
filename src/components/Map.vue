<template>
  <div>
    <div id="map">
      <gmap-map
        :center="center"
        :zoom="zoom"
        class='map-container'
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Map',
  computed: {
    center () {
      let usa = {lat: 38.2, lng: -100.4}
      let zipcodeData = this.zipcodeSettings
      if (zipcodeData.zipcode) {
        let lat = zipcodeData.latitude
        let lng = zipcodeData.longitude
        return {lat, lng}
      } else {
        return usa
      }
    },
    zoom () {
      let zipcodeData = this.zipcodeSettings
      if (zipcodeData.zipcode) {
        return 9
      } else {
        return 4
      }
    },
    markers () {
      return this.upcomingEvents.map((e) => {
        let lat = e.location.latitude
        let lng = e.location.longitude
        e.position = {lat, lng}
        return e
      })
    },
    ...mapGetters(['events', 'upcomingEvents', 'zipcodeSettings'])
  },
  methods: {
    ...mapActions(['getEvents'])
  },
  created () {
    if (!this.events.length) {
      this.getEvents()
    }
  }
}
</script>

<style scoped>
#map {
  margin: 30px 0 0 0;
  padding: 10px 0 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.map-container {
  min-width: 500px;
  min-height: 300px;
  max-width: 700px;
}
</style>
