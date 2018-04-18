<template>
  <div>
    <atu-popover title="Title">
      <atu-button>Hover me</atu-button>
      <div slot="content">
        <p>content</p>
        <p>content</p>
      </div>
    </atu-popover>
    <atu-popover title="Title" trigger="focus">
      <atu-button>Focus me</atu-button>
      <div slot="content">
        <p>content</p>
        <p>content</p>
      </div>
    </atu-popover>
    <atu-popover title="Title" trigger="click">
      <atu-button>Click me</atu-button>
      <div slot="content">
        <p>content</p>
        <p>content</p>
      </div>
    </atu-popover>
  </div>
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
