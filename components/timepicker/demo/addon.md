---
order: 6
title:
  zh-CN: 附加内容
  en-US: Addon
---

## zh-CN

在 TimePicker 选择框底部显示自定义的内容。

## en-US

Render addon contents to timepicker panel's bottom.

```` html
<template>
  <time-picker
    :open="open"
    v-model="time"
    @open-change="handleOpenChange">
    <atu-button size="small" type="primary" @click="handleCloseClick">
      Ok
    </atu-button>
  </time-picker>
</template>

<script>
import TimePicker from '@/timepicker'
import AtuButton from '@/button'

export default {
  components: {
    TimePicker,
    AtuButton
  },
  data () {
    return {
      time: null,
      open: false
    }
  },
  methods: {
    handleOpenChange (v) {
      this.open = v
    },
    handleCloseClick () {
      this.open = false
    }
  }
}
</script>

````
