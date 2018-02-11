<template>
  <div id='single-event'>
    <div class='time'>
      <h2>{{ time.month }}</h2>
      <h1>{{ time.day }}</h1>
    </div>
    <div class='name'>
      {{ event.name }}
    </div>
    <div class='description'>
      <div>{{ event.description }}</div>
    </div>
    <div class='city'>
      <div>{{ event.location.city }}</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: ['event'],
  computed: {
    time () {
      let t = new Date(this.event.times[0].start)
      let month = this.months[t.getMonth()]
      let day = t.getDate()
      return { month, day }
    },
    ...mapGetters(['months'])
  }

}
</script>

<style scoped>
#single-event {
  display: flex;
  flex-direction: row;
  align-items: center;
}
#single-event > * {
  margin: 0 5px;
}
</style>
