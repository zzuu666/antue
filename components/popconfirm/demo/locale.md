---
order: 1
title:
  zh-CN: 国际化
  en-US: Locale text
---

## zh-CN

使用 `okText` 和 `cancelText` 自定义按钮文字。

## en-US

Set `okText` and `cancelText` props to customise the button's labels.

```` html
<template>
  <atu-popconfirm title="Are you sure delete this task?" okText="确认" cancelText="取消">
    <a>Delete</a>
  </atu-popconfirm>
</template>

<script>
import AtuPopconfirm from '@/popconfirm'

export default {
  components: {
    AtuPopconfirm
  }
}
</script>

````
