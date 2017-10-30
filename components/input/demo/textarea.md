---
order: 5
title:
    zh-CN: 文本域
    en-US: TextArea
---

## zh-CN

用于多行输入。

## en-US

For multi-line input.

```` html
<template>
  <div>
    <ant-textarea rows="4" v-model="inputData"></ant-textarea>
  </div>
</template>
<script>
  import AntInput from '@/input'
  export default {
    data () {
      return {
        inputData: ''
      }
    },
    components: {
      AntTextarea: AntInput.TextArea
    }
  }
</script>
````
