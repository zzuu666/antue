---
order: 8
title:
    zh-CN: 前缀和后缀
    en-US: prefix and suffix
---

## zh-CN

在输入框上添加前缀或后缀图标。

## en-US

Add prefix or suffix icons inside input.

````vue
<template>
  <div class="ant-input-prefix">
    <ant-input v-model="inputData" placeholder="Enter your username" prefix="true">
      <ant-icon slot="prefix" type="user"></ant-icon>
      <!--<ant-icon slot="suffix" type="search"></ant-icon>-->
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
  .ant-input-prefix {
    padding: 10px;
  }
</style>
````
