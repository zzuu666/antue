---
order: 5
title:
  zh-CN: 迷你型
  en-US: Mini tab
---

## zh-CN

用在弹出框等较狭窄的容器内。

## en-US

Small size can be used in Modal.

```` html
<template>
  <atu-tabs size="small" v-model="active">
    <atu-pane tab="Tab 1" :index="1">Tab 1</atu-pane>
    <atu-pane tab="Tab 2" :index="2">Tab 2</atu-pane>
    <atu-pane tab="Tab 3" :index="3">Tab 3</atu-pane>
  </atu-tabs>
</template>

<script>
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
    AtuPane
  }
}
</script>

````
