---
order: 0
title:
    zh-CN: 基本使用
    en-US: Basic usage
---

## zh-CN

基本使用。

## en-US

Basic usage example.

```` html
<template>
  <ant-input placeholder="Basic usage" v-model="value"></ant-input>
</template>
<script>
  import AntInput from '@/input'
  export default {
    data () {
      return {
        value: ''
      }
    },
    components: {
      AntInput
    }
  }
</script>
````
