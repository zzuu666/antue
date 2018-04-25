<template>
  <ant-button type="primary" @click="notify">Open the notification box</ant-button>
</template>
<script>
import AntButton from '@/button'
import notification from '@/notification'

export default {
  components: {
    AntButton,
    notification
  },
  methods: {
    notify () {
      notification.open({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        duration: 0
      })
    }
  }
}
</script>
