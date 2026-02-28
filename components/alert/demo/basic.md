---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法，适用于简短的警告提示。共有四种样式 `success`、`info`、`warning`、`error`。

## en-US

The simplest usage for short messages. There are 4 types: `success`, `info`, `warning`, `error`.

```` html
<template>
  <div>
    <ant-alert type="success" message="Success Text" />
    <ant-alert type="info" message="Info Text" />
    <ant-alert type="warning" message="Warning Text" />
    <ant-alert type="error" message="Error Text" />
  </div>
</template>

<script>
import AntAlert from '@/alert'

export default {
  components: {
    AntAlert
  }
}
</script>
````
