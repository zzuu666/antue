---
order: 2
title:
  zh-CN: 带有图标的通知提醒框
  en-US: Notification with icon
---

## zh-CN

通知提醒框左侧有图标。

## en-US

A notification box with a icon at the left side.

```` html
<template>
  <div>
    <ant-button @click="success">Success</ant-button>
    <ant-button @click="info">info</ant-button>
    <ant-button @click="warning">warning</ant-button>
    <ant-button @click="error">Error</ant-button>
  </div>
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
    success () {
      notification.success({
        message: 'Success Message',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    },
    info () {
      notification.info({
        message: 'Info Message',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    },
    warning () {
      notification.warning({
        message: 'Warning Message',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    },
    error () {
      notification.error({
        message: 'Error Message',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    }
  }
}
</script>

````

