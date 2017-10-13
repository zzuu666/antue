---
order: 4
title:
  zh-CN: 附加内容
  en-US: Extra content
---

## zh-CN

可以在页签右边添加附加操作。

## en-US

You can add extra actions to the right of Tabs.


```` html
<template>
  <atu-tabs v-model="active">
    <atu-button slot="extra">Extra Button</atu-button>
    <atu-pane tab="Tab 1" :index="1">Tab 1</atu-pane>
    <atu-pane tab="Tab 2" :index="2">Tab 2</atu-pane>
    <atu-pane tab="Tab 3" :index="3">Tab 3</atu-pane>
  </atu-tabs>
</template>

<script>
import AtuButton from '@/button'
import AtuTabs from '@/tabs'
const AtuPane = AtuTabs.Pane

export default {
  data () {
    return {
      active: 1
    }
  },
  components: {
    AtuTabs,
    AtuPane,
    AtuButton
  }
}
</script>

````
