---
order: 2
title:
  zh-CN: 简洁风格
  en-US: Borderless
---

## zh-CN

一套没有边框的简洁样式。

## en-US

A borderless style of Collapse.

```` html
<template>
  <ant-collapse :defaultActiveKey="['1']" :bordered="false">
    <ant-collapse-panel header="This is panel header 1" panelKey="1">
      <p>Content of panel 1</p>
    </ant-collapse-panel>
    <ant-collapse-panel header="This is panel header 2" panelKey="2">
      <p>Content of panel 2</p>
    </ant-collapse-panel>
    <ant-collapse-panel header="This is panel header 3" panelKey="3">
      <p>Content of panel 3</p>
    </ant-collapse-panel>
  </ant-collapse>
</template>

<script>
import AntCollapse from '@/collapse'

const AntCollapsePanel = AntCollapse.Panel

export default {
  components: {
    AntCollapse,
    AntCollapsePanel
  }
}
</script>
````
