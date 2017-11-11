<template>
  <AtuButton @click="success">Customized display duration</AtuButton>
</template>

<script>
import AtuButton from '@/button'
import message from '@/message'
export default {
  methods: {
    success () {
      message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10)
    }
  },
  components: {
    AtuButton
  }
}
</script>


