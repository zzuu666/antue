---
order: 2
title:
  zh-CN: 文案展现
  en-US: Show copywriting
---

## zh-CN

给评分组件加上文案展示。

## en-US

Add copywriting in rate components.

```` html
<template>
  <div>
    <span>
      <ant-rate @change="onChange" :value="value"></ant-rate>
      <span class="ant-rate-text">{{ value }} star</span>
    </span>
  </div>
</template>
<script>
import AntRate from '@/rate'
export default {
  components: {
    AntRate
  },
  data () {
    return {
      value: 3
    }
  },
  methods: {
    onChange (v) {
      this.value = v
    }
  }
}
</script>
````
