---
order: 3
title:
  zh-CN: 自定义按钮
  en-US: Custom close button
---

## zh-CN

自定义关闭按钮的样式和文字。

## en-US

To customize the style or font of the close button.

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
        btn: 'confirm',
        btnType: 'default'
      })
    }
  }
}
</script>

````
