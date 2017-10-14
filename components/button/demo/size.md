---
order: 2
title:
  zh-CN: 按钮尺寸
  en-US: Size
---

## zh-CN

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

## en-US

Ant Design supports a default button size as well as a large and small size.

If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.

```` html
<template>
  <div>
    <atu-button type="primary" size="small">Primary</atu-button>
    <atu-button type="primary">Primary</atu-button>
    <atu-button type="primary" size="large">Primary</atu-button>
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