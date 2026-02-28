---
order: 3
title:
  zh-CN: 可关闭的警告提示
  en-US: Closable
---

## zh-CN

显示关闭按钮，点击可关闭警告提示。

## en-US

To show close button.

```` html
<template>
  <div>
    <ant-alert
      type="warning"
      message="Warning Text Warning Text Warning Text Warning Text"
      closable
      @close="onClose"
    />
    <ant-alert
      type="error"
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      closable
      @close="onClose"
    />
  </div>
</template>

<script>
import AntAlert from '@/alert'

export default {
  components: {
    AntAlert
  },
  methods: {
    onClose (e) {
      console.log(e, 'I was closed.')
    }
  }
}
</script>
````
