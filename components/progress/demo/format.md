---
order: 6
title:
  zh-CN: 自定义文字格式
  en-US: Custom text format
---

## zh-CN

`format` 属性指定格式。

## en-US

You can custom text format by setting `format`.

```` html
<template>
  <div>
    <ant-progress type="circle" :percent="75" :format="percent => `${percent} Days`"/>
    <ant-progress type="circle" :percent="100" :format="() => 'Done'"/>
  </div>
</template>

<script>
  import AntProgress from '@/progress'

  export default {
    components: {
      AntProgress
    }
  }
</script>

<style>
div.ant-progress-circle,
div.ant-progress-line {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>

````
