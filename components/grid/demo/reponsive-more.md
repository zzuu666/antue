---
order: 8
title:
  zh-CN: 其他属性的响应式
  en-US: More responsive
---

## zh-CN

`span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `xs` `sm` `md` `lg` `xl` 属性中来使用。

其中 `xs={6}` 相当于 `:xs={ span: 6 }`。

## en-US

`Span` `pull` `push` `offset` `order` property can be embedded into `xs` `sm` `md` `lg` `xl` properties to use,
where `xs = {6}` is equivalent to `xs = { span: 6 }`.

```` html
<template>
  <div id="components-grid-demo-rep-more">
    <a-row>
      <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">col</a-col>
      <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">col</a-col>
      <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">col</a-col>
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
