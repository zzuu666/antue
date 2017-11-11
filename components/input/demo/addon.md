---
order: 2
title:
    zh-CN: 前置/后置标签
    en-US: Pre / Post tab
---

## zh-CN

用于配置一些固定组合。

## en-US

Using pre & post tabs example.

```` html
<template>
  <div>
    <ant-input v-model="inputData1" placeholder="Enter your username" addonBefore="Http://" addonAfter=".com"></ant-input>
    <ant-input v-model="inputData2" placeholder="Enter your username" addonAfter="true" style="margin-top: 10px">
      <ant-icon slot="addonAfter" type="setting"></ant-icon>
    </ant-input>
  </div>
</template>

<script>
  import AntInput from '@/input'
  import AntIcon from '@/icon'
  export default {
    data () {
      return {
        inputData1: 'mysite',
        inputData2: 'mysite'
      }
    },
    components: {
      AntInput,
      AntIcon
    }
  }
</script>
````
