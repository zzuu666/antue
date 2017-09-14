<template>
  <div class="container">
    <h2 class="container-title" v-text="title"></h2>
    <p class="container-profile" v-text="profile"></p>
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
  text-align: left;
  &-title {
    position: relative;
  }
}
</style>
