<template>
  <div>
    <atu-tag>Tag 1</atu-tag>
    <atu-tag closable @afterClose="test">Tag 2</atu-tag>
  </div>
</template>

<script>
import AtuTag from '@/tag'
export default {
  components: {
    AtuTag
  },
  methods: {
    test () {
      console.log('666')
    }
  }
}
</script>

