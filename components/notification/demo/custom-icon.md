---
order: 4
title:
  zh-CN: 自定义图标
  en-US: Customized Icon
---

## zh-CN

图标可以被自定义。

## en-US

The icon can be customized to any react node.

```` html
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
        icon: 'smile-circle',
        iconStyle: {
          color: '#108ee9'
        }
      })
    }
  }
}
</script>

````
