---
order: 1
title:
  zh-CN: 插槽
  en-US: Slot
---

## zh-CN

可以使用slot来自定义文字，但不应该有复杂的内容。

## en-US

Use slot to custom text, but should't include complex content.

```` html
<template>
  <atu-tooltip title="prompt text">
    <span>Tooltip will show when mouse enter.</span>
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
