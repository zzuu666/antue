---
order: 3
title:
  zh-CN: 可选择
  en-US: Checkable
---

## zh-CN

可通过 `CheckableTag` 实现类似 Checkbox 的效果，点击切换选中效果。

> 该组件为完全受控组件，不支持非受控用法。

## en-US

`CheckableTag` works like Checkbox, click it to toggle checked state.

> it is an absolute controlled component and has no uncontrolled mode.

```` html
<template>
  <div>
    <atu-checke-tag v-model="tag1">Tag 1</atu-checke-tag>
    <atu-checke-tag v-model="tag2">Tag 2</atu-checke-tag>
    <atu-checke-tag v-model="tag3">Tag 3</atu-checke-tag>
  </div>
</template>

<script>
import AtuTag from '@/tag'

const AtuCheckeTag = AtuTag.CheckableTag

export default {
  components: {
    AtuCheckeTag
  },
  data () {
    return {
      tag1: true,
      tag2: true,
      tag3: true
    }
  }
}
</script>

````
