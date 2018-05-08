<template>
  <time-picker
    :value="time"
    @change="handleChange"/>
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
      time: moment('00:00:00', 'HH:mm:ss')
    }
  },
  methods: {
    handleChange (value, string) {
      this.time = value
      console.log(string)
    }
  }
}
</script>
