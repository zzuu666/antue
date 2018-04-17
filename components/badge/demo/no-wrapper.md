---
order: 1
title:
  zh-CN: 独立使用
  en-US: Standalone
---

## zh-CN

不包裹任何元素即是独立使用，可自定样式展现。

> 在右上角的 badge 则限定为红色。

## en-US

Used in standalone when children is empty.

```` html
<template>
  <div class="badge-container">
    <ant-badge :count="25" independent></ant-badge>
    <ant-badge :count="4" independent :badge-style="whiteBadge"></ant-badge>
    <ant-badge :count="109" independent :badge-style="greenBadge"></ant-badge>
  </div>
</template>
<script>
import AntBadge from '@/badge'
export default {
  components: {
    AntBadge
  },
  data () {
    return {
      greenBadge: {
        backgroundColor: '#52c41a'
      },
      whiteBadge: {
        backgroundColor: '#fff',
        color: '#999',
        boxShadow: '0 0 0 1px #d9d9d9 inset'
      }
    }
  }
}
</script>

````
