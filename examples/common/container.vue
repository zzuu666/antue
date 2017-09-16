<template>
  <div class="container">
    <h1 class="container-title" v-text="title"></h1>
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
  padding: 10px 20px;
  &-title {
    position: relative;
    padding: 8px 0;
  }
  p {
    position: relative;
    padding: 8px 0;
  }
  &-profile {
    
  }
}
</style>
