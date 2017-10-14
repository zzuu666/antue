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
  <div>
    <p>
      <atu-button type="primary">Primary</atu-button>
      <atu-button disabled type="primary">Primary</atu-button>
    </p>
    <p>
      <atu-button>Default</atu-button>
      <atu-button disabled>Default</atu-button>
    </p>
    <p class="ghost">
      <atu-button type="danger">Danger</atu-button>
      <atu-button disabled type="danger">Danger</atu-button>
    </p>
    <p>
      <atu-button type="dashed">Dashed</atu-button>
      <atu-button disabled type="dashed">Dashed</atu-button>
    </p>
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
````
