---
order: 5
title:
  zh-CN: 禁止选项
  en-US: Disabled Time
---
## zh-CN

可以使用 `disabledHours` `disabledMinutes` `disabledSeconds` 组合禁止用户选择某个时间，配合 `hideDisabledOptions` 可以直接把不可选择的项隐藏。

## en-US

Make part of time unselectable by `disabledHours` `disabledMinutes` `disabledSeconds`, and we even can hide those unselectable options by `hideDisabledOptions`.

```` html
<template>
  <div>
    <time-picker
      class="disable-time-picker"
      v-model="time"
      placeholder="Just Disabled"
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"/>
    <time-picker
      class="disable-time-picker"
      v-model="time"
      placeholder="Hide Directly"
      hide-disabled-options
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"/>
  </div>
</template>

<script>
import TimePicker from '@/timepicker'

const range = (start, end) => {
  const result = []
  for (let i = start; i < end; i++) {
    result.push(i)
  }
  return result
}

export default {
  components: {
    TimePicker
  },
  data () {
    return {
      time: null
    }
  },
  methods: {
    disabledHours () {
      const hours = range(0, 60)
      hours.splice(20, 4)
      return hours
    },
    disabledMinutes (h) {
      if (h === 20) {
        return range(0, 31)
      } else if (h === 23) {
        return range(30, 60)
      }
      return []
    }
  }
}
</script>

<style lang="less" scoped>
.disable-time-picker {
  width: 120px;
}
</style>
````
