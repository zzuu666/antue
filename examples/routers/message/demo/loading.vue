<template>
  <AtuButton @click="success">Display a loading indicator</AtuButton>
</template>

<script>
import AtuButton from '@/button'
import message from '@/message'
export default {
  methods: {
    success () {
      const hide = message.loading('Action in progress..', 0)
      // Dismiss manually and asynchronously
      setTimeout(hide, 2500)
    }
  },
  components: {
    AtuButton
  }
}
</script>
