---
order: 1
title:
  zh-CN: 不可用
  en-US: Disabled
---

## zh-CN

Switch 失效状态。

## en-US

Disabled state of `Switch`.

```` html
<template>
  <div>
    <atu-switch :defaultChecked="false" :disabled="disabled" @change="handleChange" />
    <atu-button type="primary" @click="toggle"> Toggle disabled </atu-button>
  </div>
</template>

<script>
import AtuSwitch from '@/switch'
import AtuButton from '@/button'
export default {
  data () {
    return {
      disabled: true
    }
  },
  components: {
    AtuSwitch,
    AtuButton
  },
  methods: {
    handleChange (checked) {
      console.log(`switch to ${checked}`)
    },
    toggle () {
      this.disabled = !this.disabled
    }
  }
}
</script>
````
