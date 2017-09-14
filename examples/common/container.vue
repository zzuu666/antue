<template>
  <div class="container">
    <h2 v-text="title"></h2>
    <p v-text="profile"></p>
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
}
</style>
