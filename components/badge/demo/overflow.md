---
order: 2
title:
  zh-CN: 封顶数字
  en-US: Overflow Count
---

## zh-CN

超过 `overflowCount` 的会显示为 `${overflowCount}+`，默认的 `overflowCount` 为 `99`。

## en-US

`${overflowCount}+` is displayed when count is larger than `overflowCount`. The default value of `overflowCount` is `99`.

```` html
<template>
  <div class="badge-container">
    <ant-badge :count="99">
      <a href="#" class="head-example"></a>
    </ant-badge>
    <ant-badge :count="100">
      <a href="#" class="head-example"></a>
    </ant-badge>
    <ant-badge :count="99" :overflow-count="10">
      <a href="#" class="head-example"></a>
    </ant-badge>
    <ant-badge :count="1000" :overflow-count="999">
      <a href="#" class="head-example"></a>
    </ant-badge>
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
<style lang="less" scoped>
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
}
</style>

````
