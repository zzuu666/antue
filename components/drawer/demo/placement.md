---
order: 1
title:
  zh-CN: 自定义位置
  en-US: Placement
---

## zh-CN

自定义位置，点击触发按钮抽屉从相应的位置滑出。

## en-US

The Drawer can appear from any edge of the screen.

```` html
<template>
  <div>
    <button @click="open('top')">Top</button>
    <button @click="open('right')">Right</button>
    <button @click="open('bottom')">Bottom</button>
    <button @click="open('left')">Left</button>
    <ant-drawer
      title="Drawer"
      :visible="visible"
      :placement="placement"
      @close="visible = false"
    >
      <p>Some contents...</p>
    </ant-drawer>
  </div>
</template>

<script>
import AntDrawer from '@/drawer'

export default {
  components: {
    AntDrawer
  },
  data () {
    return {
      visible: false,
      placement: 'right'
    }
  },
  methods: {
    open (placement) {
      this.placement = placement
      this.visible = true
    }
  }
}
</script>
````
