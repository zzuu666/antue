---
order: 4
title: 
  zh-CN: 自定义时间轴点
  en-US: Custom
---

## zh-CN

可以设置为图标或其他自定义元素。

## en-US 

Set a node as an icon or other custom element.

```` html
<template>
  <atu-timeline>
    <atu-timeline-item>Create a services site 2015-09-01</atu-timeline-item>
    <atu-timeline-item>Solve initial network problems 2015-09-01</atu-timeline-item>
    <atu-timeline-item color="red">
      <atu-icon type="clock-circle-o" style="font-size: 16px;" slot="dot" />
      Technical testing 2015-09-01
    </atu-timeline-item>
    <atu-timeline-item>Network problems being solved 2015-09-01</atu-timeline-item>
  </atu-timeline>
</template>

<script>
import AtuIcon from '@/icon'
import AtuTimeline from '@/timeline'
const AtuTimelineItem = AtuTimeline.Item

export default {
  components: {
    AtuIcon,
    AtuTimeline,
    AtuTimelineItem
  }
}
</script>
````
