<template>
  <AtuButton type="primary" @click="info">Display normal message</AtuButton>
</template>

<script>
import AtuButton from '@/button'
import message from '@/message'
export default {
  methods: {
    info () {
      message.info('This is a normal message')
    }
  },
  components: {
    AtuButton
  }
}
</script>
