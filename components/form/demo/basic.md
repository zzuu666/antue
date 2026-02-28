---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic
---

## zh-CN

基本的表单数据域控件展示，包含布局、初始化、验证、提交。

## en-US

Basic form data entry components including layout, initial values, validation, and submission.

```` html
<template>
  <div>
    <ant-form :model="formData" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
      <ant-form-item label="Username">
        <ant-input v-model="formData.username" placeholder="Please input username" />
      </ant-form-item>
      <ant-form-item label="Password">
        <ant-input v-model="formData.password" type="password" placeholder="Please input password" />
      </ant-form-item>
      <ant-form-item :wrapper-col="{ offset: 6, span: 14 }">
        <ant-button type="primary">Submit</ant-button>
      </ant-form-item>
    </ant-form>
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
      formData: {
        username: '',
        password: ''
      }
    }
  }
}
</script>
````
