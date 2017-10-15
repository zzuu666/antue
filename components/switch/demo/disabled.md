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
    <atu-switch v-model="checked" :disabled="disabled" />
    <atu-button type="primary" @click="toggle"> Toggle disabled </atu-button>
  </div>
</template>

<script>
import AtuSwitch from '@/switch'
import AtuButton from '@/button'
export default {
  data () {
    return {
      disabled: true,
      checked: true
    }
  },
  components: {
    AtuSwitch,
    AtuButton
  },
  methods: {
    toggle () {
      this.disabled = !this.disabled
    }
  }
}
</script>
````
