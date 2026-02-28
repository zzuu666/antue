---
order: 1
title:
  zh-CN: 表单验证
  en-US: Validation
---

## zh-CN

在提交表单前进行数据校验。

## en-US

Validate form fields before submission.

```` html
<template>
  <div>
    <ant-form ref="form" :model="formData" :rules="rules" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
      <ant-form-item label="Name" prop="name">
        <ant-input v-model="formData.name" placeholder="Please input name" />
      </ant-form-item>
      <ant-form-item label="Email" prop="email">
        <ant-input v-model="formData.email" placeholder="Please input email" />
      </ant-form-item>
      <ant-form-item :wrapper-col="{ offset: 6, span: 14 }">
        <ant-button type="primary" @click="handleSubmit">Submit</ant-button>
        <ant-button @click="handleReset">Reset</ant-button>
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
        name: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input your name', trigger: 'blur' },
          { min: 2, max: 20, message: 'Length should be 2 to 20', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please input your email', trigger: 'blur' },
          { type: 'email', message: 'Please input a valid email', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(function (valid) {
        if (valid) {
          alert('Submit!')
        }
      })
    },
    handleReset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>
````
