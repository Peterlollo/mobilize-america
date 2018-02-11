<template>
  <div id="filters">
    <h1>Filters</h1>
    <div class='distance'>
      <button class='btn' v-if='!distanceShowing' v-on:click='toggle'>Set Distance</button>
      <button class='btn' v-if='distanceShowing' v-on:click='clear'>Clear Distance</button>
      <div class='distance-options' v-if='distanceShowing'>
        <input v-on:keypress='validate()' v-model='zipcode' placeholder='Zipcode' type='text' max='5'/>
        <span v-if='zipcodeError'>{{zipcodeError}}</span>
        <button v-for='option in distanceOptions'
          v-on:click='setZipcode(option.distance)'
          :key='option.distance'
          class='btn btn-secondary'>
          Less than {{option.distance}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Filters',
  data () {
    return {
      zipcodeError: null,
      distanceShowing: false,
      zipcode: '',
      distanceOptions: [
        {distance: 20},
        {distance: 50},
        {distance: 100}
      ]
    }
  },
  methods: {
    validate (evt) {
      evt = evt || window.event
      if (this.zipcode.toString().length > 4) {
        evt.preventDefault()
      } else {
        this.isNumber(evt)
      }
    },
    toggle () {
      this.distanceShowing = !this.distanceShowing
    },
    clear () {
      this.toggle()
      this.clearZipcode()
    },
    isNumber (evt) {
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    },
    setZipcode (distance) {
      if (this.zipcode.length < 5 || this.zipcode.length > 5) {
        this.zipcodeError = 'Zipcode must be five digits'
      } else {
        let zipcode = this.zipcode
        this.filterByZipcode({zipcode, distance})
      }
    },
    ...mapActions([ 'filterByZipcode', 'clearZipcode' ])
  }
}
</script>

<style scoped>
#filters {
  background-color: #eee;
  padding: 10px 0 50px 0;
  margin: 30px 0 0 0;
}
.distance-options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.distance-options > * {
  margin: 5px;
}
</style>
