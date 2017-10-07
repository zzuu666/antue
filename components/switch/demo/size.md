---
order: 3
title:
  zh-CN: 两种大小
  en-US: Two sizes
---

## zh-CN

`size="small"` 表示小号开关。

## en-US

`size="small"` represents a small sized switch.

```` html
<template>
  <div>
    <atu-switch size="small" :defaultChecked="false" @change="handleChange" />
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
