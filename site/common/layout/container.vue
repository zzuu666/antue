<template>
  <div class="container markdown">
    <slot></slot>
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
