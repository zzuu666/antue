<template>
  <time-picker v-model="time"/>
</template>

<script>
import TimePicker from '@/timepicker'

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
