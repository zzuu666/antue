<template>
  <div>
    <atu-checke-tag v-model="tag1">Tag 1</atu-checke-tag>
    <atu-checke-tag v-model="tag2">Tag 2</atu-checke-tag>
    <atu-checke-tag v-model="tag3">Tag 3</atu-checke-tag>
  </div>
</template>

<script>
import AtuTag from '@/tag'

const AtuCheckeTag = AtuTag.CheckableTag

export default {
  components: {
    AtuCheckeTag
  },
  data () {
    return {
      tag1: true,
      tag2: true,
      tag3: true
    }
  }
}
</script>
