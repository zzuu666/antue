---
order: 1
title:
  zh-CN: 自动关闭的延时
  en-US: Duration after which the notification box is closed
---

## zh-CN

自定义通知框自动关闭的延时，默认`4.5s`，取消自动关闭只要将该值设为 `0` 即可。

## en-US

`Duration` can be used to specify how long the notification stays open. After the duration time elapses,
the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0,
the notification box will never close automatically.

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
        duration: 0
      })
    }
  }
}
</script>

````
