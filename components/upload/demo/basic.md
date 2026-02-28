---
order: 0
title:
  zh-CN: 点击上传
  en-US: Click to Upload
---

## zh-CN

经典款式，用户点击按钮弹出文件选择框。

## en-US

Classic mode. File selection dialog pops up when upload button is clicked.

```` html
<template>
  <div>
    <ant-upload
      action="/upload"
      @change="handleChange"
    >
      <button class="ant-btn">
        <span>Click to Upload</span>
      </button>
    </ant-upload>
  </div>
</template>

<script>
import AntUpload from '@/upload'

export default {
  components: {
    AntUpload
  },
  methods: {
    handleChange (info) {
      console.log('upload change:', info)
    }
  }
}
</script>
````
