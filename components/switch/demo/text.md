---
order: 2
title:
  zh-CN: 文字和图标
  en-US: Text & icon
---

## zh-CN

带有文字和图标。

## en-US

With text and icon.

```` html
<template>
  <div>
    <atu-switch
      v-model="checked1"
      on="开"
      off="关"></atu-switch>
    <atu-switch
      v-model="checked2"
      on="1"
      off="0"></atu-switch>
    <atu-switch v-model="checked3">
      <icon type="check" slot="on" />
      <icon type="cross" slot="off" />
    </atu-switch>
  </div>
</template>

<script>
import AtuSwitch from '@/switch'
import Icon from '@/icon'

export default {
  components: {
    AtuSwitch,
    Icon
  },
  data () {
    return {
      checked1: false,
      checked2: true,
      checked3: false
    }
  },
  methods: {
    handleChange (checked) {
      console.log(`switch to ${checked}`)
    }
  }
}
</script>
````
