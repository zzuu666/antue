---
order: 2
title:
  zh-CN: 图标
  en-US: Icon
---

## zh-CN

有图标的标签。

## en-US

The Tab with Icon.


```` html
<template>
  <atu-tabs v-model="active">
    <atu-pane tab="Tab 1" icon="apple" :index="1">Tab 1</atu-pane>
    <atu-pane :tab="tabRender" :index="2">Tab 2</atu-pane>
    <atu-pane :index="3">
      <span slot="tab">
        <atu-icon type="apple" /> Tab 3
      </span>
      Tab 3
    </atu-pane>
  </atu-tabs>
</template>

<script>
import AtuIcon from '@/icon'
import AtuTabs from '@/tabs'
const AtuPane = AtuTabs.Pane

export default {
  data () {
    const h = this.$createElement
    return {
      active: 1,
      tabRender: h('span', {}, [
        h('atu-icon', {
          props: {
            type: 'apple'
          }
        }),
        'Tab 2'
      ])
    }
  },
  components: {
    AtuTabs,
    AtuPane,
    AtuIcon
  }
}
</script>

````
