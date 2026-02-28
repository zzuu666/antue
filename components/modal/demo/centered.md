---
order: 2
title:
  zh-CN: 垂直居中
  en-US: Centered
---

## zh-CN

使用 `centered` 可以让 Modal 垂直居中。

## en-US

You can use `centered` prop to make Modal centered.

```` html
<template>
  <div>
    <atu-button type="primary" @click="showModal">Open Centered Modal</atu-button>
    <ant-modal
      title="Centered Modal"
      :visible="visible"
      centered
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </ant-modal>
  </div>
</template>

<script>
import AntModal from '@/modal'
import AtuButton from '@/button'

export default {
  components: {
    AntModal,
    AtuButton
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk () {
      this.visible = false
    },
    handleCancel () {
      this.visible = false
    }
  }
}
</script>
````
