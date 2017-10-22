---
order: 3
title:
  zh-CN: 加载中
  en-US: Message of loading
---

## zh-CN

进行全局 loading，异步自行移除。

## en-US

Display a global loading indicator, which is dismissed by itself asynchronously.

```` html
<template>
  <AtuButton @click="success">Display a loading indicator</AtuButton>
</template>

<script>
import AtuButton from '@/button'
import message from '@/message'
export default {
  methods: {
    success () {
      const hide = message.loading('Action in progress..', 0)
      // Dismiss manually and asynchronously
      setTimeout(hide, 2500)
    }
  },
  components: {
    AtuButton
  }
}
</script>
````
