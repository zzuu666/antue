---
order: 2
title:
  zh-CN: 修改延时
  en-US: Customize duration
---

## zh-CN

自定义时长 `10s`，默认时长为 `3s`。

## en-US

Customize message display duration from default `3s` to `10s`.

```` html
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
````
