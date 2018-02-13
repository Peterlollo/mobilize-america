<template>
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
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'ViewOptions',
  computed: {
    ...mapGetters(['mapShowing'])
  },
  methods: {
    showMap () {
      this.showMap()
    },
    hideMap () {
      this.hideMap()
    },
    ...mapActions(['showMap', 'hideMap'])
  }
}
</script>

<style scoped>
.view-options {
  margin: 20px 0 30px 0;
}
.deactivated {
  background-color: #eee;
}
</style>
