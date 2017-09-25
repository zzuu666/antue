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

````vue
<template>
  <div class="ant-input-addon">
    <ant-input v-model="inputData" placeholder="Enter your username" addonBefore="Http://" addonAfter=".com"></ant-input>
    <ant-input style="margin-top: 10px" v-model="inputData" placeholder="Enter your username" addonAfter="true">
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
        inputData: ''
      }
    },
    components: {
      AntInput,
      AntIcon
    }
  }
</script>

<style lang="less" scoped>
  .ant-input-addon {
    padding: 10px;
  }
</style>

````
