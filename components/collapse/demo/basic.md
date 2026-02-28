---
order: 0
title:
  zh-CN: 折叠面板
  en-US: Basic
---

## zh-CN

可以同时展开多个面板，这个例子默认展开了第一个。

## en-US

By default, any number of panels can be expanded at a time. The first panel is initialized to be active.

```` html
<template>
  <ant-collapse :defaultActiveKey="['1']">
    <ant-collapse-panel header="This is panel header 1" panelKey="1">
      <p>Content of panel 1</p>
    </ant-collapse-panel>
    <ant-collapse-panel header="This is panel header 2" panelKey="2">
      <p>Content of panel 2</p>
    </ant-collapse-panel>
    <ant-collapse-panel header="This is panel header 3" panelKey="3" disabled>
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
