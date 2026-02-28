---
order: 1
title:
  zh-CN: 自定义过滤
  en-US: Custom filter
---

## zh-CN

自定义过滤，根据输入值过滤已有数据。

## en-US

Custom filter with existing data source.

```` html
<template>
  <div>
    <ant-auto-complete
      :dataSource="dataSource"
      placeholder="input here"
      style="width: 200px"
    />
  </div>
</template>

<script>
import AntAutoComplete from '@/auto-complete'

export default {
  components: {
    AntAutoComplete
  },
  data () {
    return {
      dataSource: ['Burns Bay Road', 'Downing Street', 'Wall Street']
    }
  }
}
</script>
````
