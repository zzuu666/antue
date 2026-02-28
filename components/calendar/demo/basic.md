---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

一个通用的日历面板，支持年/月切换。

## en-US

A basic calendar component with year/month switch.

```` html
<template>
  <div>
    <ant-calendar
      @select="handleSelect"
      @panelChange="handlePanelChange"
    />
  </div>
</template>

<script>
import AntCalendar from '@/calendar'

export default {
  components: {
    AntCalendar
  },
  methods: {
    handleSelect (date) {
      console.log('selected:', date)
    },
    handlePanelChange (date, mode) {
      console.log('panel change:', date, mode)
    }
  }
}
</script>
````
