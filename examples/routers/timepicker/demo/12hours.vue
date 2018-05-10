<template>
  <div>
    <time-picker use12-hours v-model="time1"/>
    <time-picker use12-hours format="h:mm:ss A" v-model="time2"/>
    <time-picker use12-hours format="h:mm a" v-model="time3"/>
  </div>
</template>

<script>
import TimePicker from '@/timepicker'

export default {
  components: {
    TimePicker
  },
  data () {
    return {
      time1: null,
      time2: null,
      time3: null
    }
  }
}
</script>
