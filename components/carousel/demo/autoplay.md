---
order: 1
title:
  zh-CN: 自动切换
  en-US: Scroll automatically
---

## zh-CN

定时切换下一张。

## en-US

Timing of auto play interval.

```` html
<template>
  <div>
    <ant-carousel autoplay>
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
