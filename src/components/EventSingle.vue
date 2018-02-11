<template>
  <div id='single-event'>
    <div class='time'>
      {{ event.times[0].start }}
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
    // month () {
    //   return this.event.times
    // }
    ...mapGetters(['months'])
  }

}
</script>

<style scoped>
#single-event {
  display: flex;
  flex-direction: row;
}
</style>
