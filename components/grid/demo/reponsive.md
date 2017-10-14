---
order: 7
title:
  zh-CN: 响应式布局
  en-US: Responsive
---

## zh-CN

参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设五个响应尺寸：`xs` `sm` `md` `lg` `xl`。

## en-US

Referring to the Bootstrap [responsive design] (http://getbootstrap.com/css/#grid-media-queries), here preset five dimensions: `xs` `sm` `md` `lg` `xl`.

```` html
<template>
  <div id="components-grid-demo-rep">
    <a-row>
      <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">col</a-col>
      <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">col</a-col>
      <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="4">col</a-col>
    </a-row>
  </div>
</template>

<script>
import ARow from '@/row'
import ACol from '@/col'

export default {
  components: {
    ARow,
    ACol
  }
}
</script>
````
