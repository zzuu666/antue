<template>
  <time-picker
    :open="open"
    v-model="time"
    @open-change="handleOpenChange">
    <atu-button size="small" type="primary" @click="handleCloseClick">
      Ok
    </atu-button>
  </time-picker>
</template>

<script>
import TimePicker from '@/timepicker'
import AtuButton from '@/button'

export default {
  components: {
    TimePicker,
    AtuButton
  },
  data () {
    return {
      time: null,
      open: false
    }
  },
  methods: {
    handleOpenChange (v) {
      this.open = v
    },
    handleCloseClick () {
      this.open = false
    }
  }
}
</script>
