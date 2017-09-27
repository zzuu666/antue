<template>
  <div>
    <atu-button type="primary" size="small">Primary</atu-button>
    <atu-button type="primary">Primary</atu-button>
    <atu-button type="primary" size="large">Primary</atu-button>
  </div>
</template>

<script>
import AtuButton from '@/button'
const BtnGroup = AtuButton.Group

export default {
  components: {
    AtuButton,
    BtnGroup
  }
}
</script>

