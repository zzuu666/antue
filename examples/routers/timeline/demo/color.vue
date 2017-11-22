<template>
  <atu-timeline>
    <atu-timeline-item color="green">Create a services site 2015-09-01</atu-timeline-item>
    <atu-timeline-item color="green">Create a services site 2015-09-01</atu-timeline-item>
    <atu-timeline-item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </atu-timeline-item>
    <atu-timeline-item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </atu-timeline-item>
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
