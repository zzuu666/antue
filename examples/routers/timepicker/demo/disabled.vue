<template>
  <time-picker v-model="time" disabled/>
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
      time: moment('12:08:23', 'HH:mm:ss')
    }
  }
}
</script>
