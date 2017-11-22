---
order: 1
title:
  zh-CN: 插槽
  en-US: Slot
---

## zh-CN

可以使用slot来自定义文字，但不应该有复杂的内容。

**在使用slot时，slot需要处于主体DOM之后**

## en-US

Use slot to custom text, but should't include complex content.

```` html
<template>
  <atu-tooltip>
    <span>Tooltip will show when mouse enter.</span>
    <span slot="title">prompt <em>text</em></span>
  </atu-tooltip>
</template>

<script>
import AtuTooltip from '@/tooltip'

export default {
  components: {
    AtuTooltip
  }
}
</script>
````
