---
order: 3
title:
  zh-CN: 不可用状态
  en-US: Disabled
---

## zh-CN

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

## en-US

To mark a button as disabled, add the `disabled` property to the `Button`.

```` html
<template>
  <div class="btn-ghost">
    <atu-button ghost type="primary">Primary</atu-button>
    <atu-button ghost>Default</atu-button>
    <atu-button ghost type="dashed">Dashed</atu-button>
    <atu-button ghost type="danger">Danger</atu-button>
  </div>
</template>

<script>
import AtuButton from '@/button'
export default {
  components: {
    AtuButton
  }
}
</script>

<style lang="less" scoped>
.btn-ghost {
  padding: 24px 0;
  background: #bec8c8;
}
</style>
````
