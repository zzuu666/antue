<template>
  <div>
    <time-picker v-model="time1" size="large"/>
    <time-picker v-model="time2"/>
    <time-picker v-model="time3" size="small"/>
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
