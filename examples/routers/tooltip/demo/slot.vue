<template>
  <atu-tooltip>
    <span>Tooltip will show when mouse enter.</span>
    <span slot="title">prompt <em>text</em></span>
  </atu-tooltip>
</template>

<script>
import AtuTooltip from '@/tooltip'

export default {
  components: {
    AtuTooltip
  }
}
</script>
