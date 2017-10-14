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
    <atu-switch size="small" v-model="switch1"/>
    <atu-switch v-model="switch2" />
  </div>
</template>

<script>
import AtuSwitch from '@/switch'
export default {
  data () {
    return {
      switch1: false,
      switch2: false
    }
  },
  components: {
    AtuSwitch
  }
}
</script>
````
