---
order: 0
title:
  zh-CN: 普通提示
  en-US: Normal prompt
---

## zh-CN

信息提醒反馈。

## en-US

Normal messages as feedbacks.

```` html
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
````
