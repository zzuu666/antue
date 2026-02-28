---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

第一个对话框。

## en-US

Basic modal.

```` html
<template>
  <div>
    <atu-button type="primary" @click="showModal">Open Modal</atu-button>
    <ant-modal
      title="Basic Modal"
      :visible="visible"
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
