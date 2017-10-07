---
order: 6
title:
  zh-CN: 网格型内嵌卡片
  en-US: Grid card
---

## zh-CN

一种常见的卡片内容区隔模式。

## en-US

Grid style card content.

````vue
<template>
  <div>
    <card title="Card Title" noHovering>
      <card-grid :style="gridStyle">Content</card-grid>
      <card-grid :style="gridStyle">Content</card-grid>
      <card-grid :style="gridStyle">Content</card-grid>
      <card-grid :style="gridStyle">Content</card-grid>
      <card-grid :style="gridStyle">Content</card-grid>
      <card-grid :style="gridStyle">Content</card-grid>
      <card-grid :style="gridStyle">Content</card-grid>
    </card>
  </div>
</template>

<script>
  import Card from '@/card'
  export default {
    data () {
      return {
        gridStyle: {
          width: '25%',
          textAlign: 'center'
        }
      }
    },
    components: {
      Card,
      CardGrid: Card.grid
    }
  }
</script>
````
