---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

基本的走马灯效果。

## en-US

Basic carousel effect.

```` html
<template>
  <div>
    <ant-carousel>
      <div style="height: 160px; background: #364d79; display: flex; align-items: center; justify-content: center; color: #fff;">
        <h3>Slide 1</h3>
      </div>
      <div style="height: 160px; background: #364d79; display: flex; align-items: center; justify-content: center; color: #fff;">
        <h3>Slide 2</h3>
      </div>
      <div style="height: 160px; background: #364d79; display: flex; align-items: center; justify-content: center; color: #fff;">
        <h3>Slide 3</h3>
      </div>
      <div style="height: 160px; background: #364d79; display: flex; align-items: center; justify-content: center; color: #fff;">
        <h3>Slide 4</h3>
      </div>
    </ant-carousel>
  </div>
</template>

<script>
import AntCarousel from '@/carousel'

export default {
  components: {
    AntCarousel
  }
}
</script>
````
