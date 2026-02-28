---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

基本滑动条。

## en-US

Basic slider.

```` html
<template>
  <div>
    <ant-slider :value="30" @change="onChange"></ant-slider>
  </div>
</template>

<script>
import AntSlider from '@/slider'

export default {
  components: {
    AntSlider
  },
  methods: {
    onChange (value) {
      console.log('changed:', value)
    }
  }
}
</script>
````
