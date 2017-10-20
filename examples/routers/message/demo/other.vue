<template>
  <div>
    <AtuButton @click="success">Success</AtuButton>
    <AtuButton @click="error">Error</AtuButton>
    <AtuButton @click="warning">Warning</AtuButton>
  </div>
</template>

<script>
import AtuButton from '@/button'
import message from '@/message'
export default {
  methods: {
    success () {
      message.success('This is a success message')
    },
    error () {
      message.error('This is a error message')
    },
    warning () {
      message.warning('This is a warning message')
    }
  },
  components: {
    AtuButton
  }
}
</script>

<style>

</style>

