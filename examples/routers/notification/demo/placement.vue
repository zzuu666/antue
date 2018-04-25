<template>
  <div>
    <select v-model="placement">
      <option value="topLeft">topLeft</option>
      <option value="topRight">topRight</option>
      <option value="bottomLeft">bottomLeft</option>
      <option value="bottomRight">bottomRight</option>
    </select>
    <ant-button type="primary" @click="notify">Open the notification box</ant-button>
  </div>
</template>
<script>
import AntButton from '@/button'
import notification from '@/notification'

export default {
  data () {
    return {
      placement: 'bottomRight'
    }
  },
  components: {
    AntButton,
    notification
  },
  methods: {
    notify () {
      notification.open({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        placement: this.placement
      })
    }
  }
}
</script>
