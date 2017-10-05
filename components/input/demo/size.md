---
order: 1
title: 
    zh-CN: 三种大小
    en-US: Three sizes of Input
---

## zh-CN

我们为 `Input` 输入框定义了三种尺寸（大、默认、小），高度分别为 `32px`、`28px` 和 `22px`。

注意： 在表单里面，我们只使用大尺寸的输入框。

## en-US

There are three sizes of an Input box: `large` (32px)、`default` (28px) and `small` (22px). 

Note: Inside of forms, only the large size is used.

````vue
<template>
  <div class="ant-input-size">
    <a-row :gutter="12">
      <a-col :span="12">
        <ant-input v-model="inputData1" placeholder="Large size" size="large"></ant-input>
      </a-col>
      <a-col :span="12">
        <ant-input v-model="inputData2" placeholder="Default size" size="default"></ant-input>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <ant-input v-model="inputData3" placeholder="Small size" size="small"></ant-input>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import AntInput from '@/input'
  import ARow from '@/row'
  import ACol from '@/col'

  export default {
    data () {
      return {
        inputData1: '',
        inputData2: '',
        inputData3: ''
      }
    },
    components: {
      ARow,
      ACol,
      AntInput
    }
  }
</script>

<style lang="less" scoped>
  .ant-input-size {
    padding: 10px;

    .ant-row {
      margin-top: 10px;
    }
  }
</style>

````
