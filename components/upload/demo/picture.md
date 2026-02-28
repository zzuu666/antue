---
order: 1
title:
  zh-CN: 图片列表样式
  en-US: Picture List Style
---

## zh-CN

上传文件为图片，可展示本地缩略图。

## en-US

If uploaded file is a picture, the thumbnail can be shown.

```` html
<template>
  <div>
    <ant-upload
      action="/upload"
      listType="picture"
      :fileList="fileList"
      @change="handleChange"
    >
      <button class="ant-btn">
        <span>Upload</span>
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
  data () {
    return {
      fileList: [
        { uid: '1', name: 'image.png', status: 'done', url: 'https://via.placeholder.com/48' }
      ]
    }
  },
  methods: {
    handleChange (info) {
      console.log('upload change:', info)
    }
  }
}
</script>
````
