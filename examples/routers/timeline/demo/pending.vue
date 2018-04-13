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
