---
order: 2
title:
  zh-CN: 表单布局
  en-US: Layout
---

## zh-CN

表单有三种布局：水平、垂直、行内。

## en-US

There are three layout modes for form: horizontal, vertical, and inline.

```` html
<template>
  <div>
    <ant-form :layout="layout">
      <ant-form-item label="Field A">
        <ant-input placeholder="input A" />
      </ant-form-item>
      <ant-form-item label="Field B">
        <ant-input placeholder="input B" />
      </ant-form-item>
      <ant-form-item>
        <ant-button type="primary">Submit</ant-button>
      </ant-form-item>
    </ant-form>
    <br />
    <ant-button @click="layout = 'horizontal'">Horizontal</ant-button>
    <ant-button @click="layout = 'vertical'">Vertical</ant-button>
    <ant-button @click="layout = 'inline'">Inline</ant-button>
  </div>
</template>

<script>
import AntForm from '@/form'
import AntInput from '@/input'
import AntButton from '@/button'

const AntFormItem = AntForm.Item

export default {
  components: {
    AntForm,
    AntFormItem,
    AntInput,
    AntButton
  },
  data () {
    return {
      layout: 'horizontal'
    }
  }
}
</script>
````
