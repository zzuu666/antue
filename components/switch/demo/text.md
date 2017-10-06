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
      :defaultChecked="true"
      checkedChildren="开"
      unCheckedChildren="关"></atu-switch>
    <atu-switch
      :defaultChecked="true"
      checkedChildren="1"
      unCheckedChildren="0"></atu-switch>
    <atu-switch
      :defaultChecked="true">
      <icon type="check" slot="checkedChildren" />
      <icon type="cross" slot="unCheckedChildren" />
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
