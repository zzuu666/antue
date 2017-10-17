---
order: 1
title:
  zh-CN: 多彩标签
  en-US: Colorful Tag
---

## zh-CN

我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

> 预设色彩在 `antd@2.7.0` 之后支持。

## en-US

After `antd@2.7.0`, We preset a series of colorful tag style for different situation usage.
And you can always set it to a hex color string for custom color.

> Preset colors are supported after `antd@2.7.0`.

```` html
<template>
  <div>
    <div class="gap-top">
      <atu-tag
        v-for="item in color"
        v-text="item"
        :key="item"
        :color="item"></atu-tag>
    </div>
    <div class="gap-top">
      <atu-tag
        v-for="item in custom"
        v-text="item"
        :key="item"
        :color="item"></atu-tag>
    </div>
  </div>
</template>

<script>
import AtuTag from '@/tag'
export default {
  components: {
    AtuTag
  },
  data () {
    return {
      color: [
        'pink',
        'red',
        'orange',
        'green',
        'cyan',
        'blue',
        'purple'
      ],
      custom: [
        '#f50',
        '#2db7f5',
        '#87d068',
        '#108ee9'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.gap-top {
  margin-top: 16px;
}
</style>
````
