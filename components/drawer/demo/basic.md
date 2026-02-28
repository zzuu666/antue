---
order: 0
title:
  zh-CN: 基础抽屉
  en-US: Basic
---

## zh-CN

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。

## en-US

Basic drawer, click trigger button to slide the drawer out from the right side, click the mask to close.

```` html
<template>
  <div>
    <button @click="visible = true">Open</button>
    <ant-drawer
      title="Basic Drawer"
      :visible="visible"
      @close="visible = false"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
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
      visible: false
    }
  }
}
</script>
````
