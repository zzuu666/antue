<template>
  <atu-popover title="Title" content="test">
    <atu-button type="primary">Hover me</atu-button>
    <div slot="content">
      <p>content</p>
      <p>content</p>
    </div>
  </atu-popover>
</template>

<script>
import AtuPopover from '@/popover'
import AtuButton from '@/button'

export default {
  components: {
    AtuPopover,
    AtuButton
  }
}
</script>
