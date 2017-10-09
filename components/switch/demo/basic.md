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
    <div>
      <atu-switch v-model="checked" />
    </div>
    <!-- 语法糖 -->
    <h3 class="atu-gap-top atu-gap-bottom">等效于</h3>
    <div>
      <atu-switch :checked="checked2" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import AtuSwitch from '@/switch'
export default {
  components: {
    AtuSwitch
  },
  data () {
    return {
      checked: false,
      checked2: false
    }
  },
  methods: {
    handleChange (checked) {
      this.checked2 = checked
      console.log(`switch to ${checked}`)
    }
  }
}
</script>
````
