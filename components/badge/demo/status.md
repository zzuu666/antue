---
order: 6
title:
  zh-CN: 状态点
  en-US: Status
---

## zh-CN

用于表示状态的小圆点。

## en-US

Standalone badge with status.

```` html
<template>
  <div class="badge-container">
    <ant-badge status="success"></ant-badge>
    <ant-badge status="error"></ant-badge>
    <ant-badge status="default"></ant-badge>
    <ant-badge status="processing"></ant-badge>
    <ant-badge status="warning"></ant-badge>
    <ant-badge status="success"></ant-badge>
    <br/>
    <ant-badge status="success">Success</ant-badge>
    <br/>
    <ant-badge status="error">Error</ant-badge>
    <br/>
    <ant-badge status="default">Default</ant-badge>
    <br/>
    <ant-badge status="processing">Processing</ant-badge>
    <br/>
    <ant-badge status="warning">Warning</ant-badge>
    <br/>
    <ant-badge status="success">Success</ant-badge>
  </div>
</template>
<script>
import AntBadge from '@/badge'
export default {
  components: {
    AntBadge
  }
}
</script>

````
