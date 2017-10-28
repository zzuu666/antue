---
order: 6
title:
  zh-CN: 位置
  en-US: Position
---

## zh-CN

有四个位置，`tabPosition="left|right|top|bottom"`。

## en-US

Tab's position: left, right, top or bottom.

```` html
<template>
  <div>
    <atu-button-group>
      <atu-button @click="togglePosition('top')">Top</atu-button>
      <atu-button @click="togglePosition('bottom')">Bottom</atu-button>
      <atu-button @click="togglePosition('left')">Left</atu-button>
      <atu-button @click="togglePosition('right')">Right</atu-button>
    </atu-button-group>
    <atu-tabs :position="position" v-model="active">
      <atu-pane tab="Tab 1" :index="1">Tab 1</atu-pane>
      <atu-pane tab="Tab 2" :index="2">Tab 2</atu-pane>
      <atu-pane tab="Tab 3" :index="3">Tab 3</atu-pane>
    </atu-tabs>
  </div>
</template>

<script>
import AtuButton from '@/button'
import AtuTabs from '@/tabs'
const AtuPane = AtuTabs.Pane
const AtuButtonGroup = AtuButton.Group

export default {
  data () {
    return {
      active: 1,
      position: 'top'
    }
  },
  components: {
    AtuTabs,
    AtuPane,
    AtuButton,
    AtuButtonGroup
  },
  methods: {
    togglePosition (pos) {
      this.position = pos
    }
  }
}
</script>

````
