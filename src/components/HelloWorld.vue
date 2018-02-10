<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id='events-list'>
      <h2>Events</h2>
      <div v-if='events.length'>
        <EventSingle :event='events[0]'/>
      </div>
      <div v-else>Pardon us, there's an error somewhere. Please try again.</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EventSingle from './EventSingle'

export default {
  name: 'HelloWorld',
  methods: mapActions([ 'getEvents' ]),
  computed: mapGetters([ 'events' ]),
  components: { EventSingle },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.getEvents()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
