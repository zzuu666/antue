---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The most basic usage.

```` html
<template>
  <div>
    <atu-switch :defaultChecked="false" @change="handleChange" />
  </div>
</template>

<script>
import AtuSwitch from '@/switch'
export default {
  components: {
    AtuSwitch
  },
  methods: {
    handleChange (checked) {
      console.log(`switch to ${checked}`)
    }
  }
}
</script>
````
