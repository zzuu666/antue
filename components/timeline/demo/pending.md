---
order: 2
title: 
  zh-CN: 最后一个
  en-US: Last node
---

## zh-CN

在最后位置添加一个幽灵节点，表示时间轴未完成，还在记录过程中。可以指定 `:pending="true"` 来只是显示最后一个节点或者 `pending="End"` 来显示字符或者使用 `slot="pending"` 来自定义内容。

## en-US

When the timeline is incomplete and ongoing, put a ghost node at last. set `:pending="true"` , `pending="End"` or `slot="pending"`.

```` html
<template>
  <atu-timeline>
    <atu-timeline-item>Create a services site 2015-09-01</atu-timeline-item>
    <atu-timeline-item>Solve initial network problems 2015-09-01</atu-timeline-item>
    <atu-timeline-item>Technical testing 2015-09-01</atu-timeline-item>
    <a href="#" slot="pending">See more</a>
  </atu-timeline>
</template>

<script>
import AtuTimeline from '@/timeline'
const AtuTimelineItem = AtuTimeline.Item

export default {
  components: {
    AtuTimeline,
    AtuTimelineItem
  }
}
</script>
````
