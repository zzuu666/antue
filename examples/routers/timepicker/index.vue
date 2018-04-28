<template>
  <time-picker v-model="time" />
</template>

<script>
import TimePicker from '@/timepicker'
// import moment from 'moment'

export default {
  components: {
    TimePicker
  },
  data () {
    return {
      time: null
    }
  }
}
</script>

