<template>
  <div id='single-event'>
    <h4>Single Event</h4>
    <div class='event-row'>
      <div>description: </div>
      <div>{{ event.description }}</div>
    </div>
    <div class='event-row'>
      <div>location: </div>
      <div>{{ event.location }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'event' ]
}
</script>

<style scoped>
#single-event {
  display: flex;
  flex-direction: column;
}
.event-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>