<template>
  <div class="btn-ghost">
    <atu-button ghost type="primary">Primary</atu-button>
    <atu-button ghost>Default</atu-button>
    <atu-button ghost type="dashed">Dashed</atu-button>
    <atu-button ghost type="danger">Danger</atu-button>
  </div>
</template>

<script>
import AtuButton from '@/button'
export default {
  components: {
    AtuButton
  }
}
</script>

<style lang="less" scoped>
.btn-ghost {
  background: #bec8c8;
}
</style>

