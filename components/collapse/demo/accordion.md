---
order: 1
title:
  zh-CN: 手风琴
  en-US: Accordion
---

## zh-CN

手风琴，每次只打开一个 tab。

## en-US

In accordion mode, only one panel can be expanded at a time.

```` html
<template>
  <ant-collapse accordion>
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
