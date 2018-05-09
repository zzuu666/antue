<template>
  <div>
    <time-picker v-model="time1" size="large"/>
    <time-picker v-model="time2"/>
    <time-picker v-model="time3" size="small"/>
  </div>
</template>

<script>
import TimePicker from '@/timepicker'
import moment from 'moment'

export default {
  components: {
    TimePicker
  },
  data () {
    return {
      time1: moment('12:08:23', 'HH:mm:ss'),
      time2: moment('12:08:23', 'HH:mm:ss'),
      time3: moment('12:08:23', 'HH:mm:ss')
    }
  }
}
</script>
