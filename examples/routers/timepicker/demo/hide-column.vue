<template>
  <time-picker v-model="time" :format="format"/>
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
      format: 'HH:mm',
      time: moment('12:08', 'HH:mm')
    }
  }
}
</script>
