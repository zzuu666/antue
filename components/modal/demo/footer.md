---
order: 1
title:
  zh-CN: 自定义页脚
  en-US: Customized Footer
---

## zh-CN

不需要默认确定取消按钮时，可以把 `footer` 设为 `false`。

## en-US

A modal dialog with no footer. Set `footer` to `false` to hide the default footer.

```` html
<template>
  <div>
    <atu-button type="primary" @click="showModal">Open Modal without Footer</atu-button>
    <ant-modal
      title="Modal without Footer"
      :visible="visible"
      :footer="false"
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
    handleCancel () {
      this.visible = false
    }
  }
}
</script>
````
