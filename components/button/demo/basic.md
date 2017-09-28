---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。


## en-US

There are `primary` button, `default` button, `dashed` button and `danger` button in antue.


```` html
<template>
  <div>
    <atu-button type="primary">Primary</atu-button>
    <atu-button>Default</atu-button>
    <atu-button type="dashed">Dashed</atu-button>
    <atu-button type="danger">Danger</atu-button>
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
