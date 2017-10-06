<template>
  <div class="container">
    <div class="markdown">
      <slot name="before"></slot>
    </div>
    <slot name="code"></slot>
    <div class="markdown">
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    profile: String
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  padding: 0px 40px 120px 40px;
  &-title {
    position: relative;
    padding: 8px 0;
  }
  p {
    position: relative;
    padding: 8px 0;
  }
}
</style>
