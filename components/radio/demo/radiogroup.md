---
order: 1
title:
  zh-CN: 单选组合
  en-US: Radio Group
---

## zh-CN

一组互斥的 Radio 配合使用。

## en-US

A group of radio components.

```` html
<template>
  <div>
    <radio-group v-model="checkedValue" @change="handleChange">
      <radio value="a">A</radio>
      <radio value="b">B</radio>
      <radio value="c">C</radio>
      <radio value="d">D</radio>
    </radio-group>
  </div>
</template>

<script>
  import Radio from '@/radio'
  export default {
    data () {
      return {
        checkedValue: 'a'
      }
    },
    methods: {
      handleChange (val) {
        console.log(val)
      }
    },
    components: {
      Radio,
      RadioGroup: Radio.Group
    }
  }
</script>
````
