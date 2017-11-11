<template>
  <div class="code-show">
    <div class="code-show-example">
    <slot></slot>
    </div>
    <div class="code-show-content">
      <span class="code-show-content-title" v-text="title"></span>
      <p class="code-show-content-desc" v-text="desc"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String
  }
}
</script>

<style lang="less" scoped>
.code-show {
  position: relative;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  margin: 12px 0;

  &-example {
    position: relative;
    text-align: left;
    padding: 42px 20px 50px;
  }
  .menu-code &-example {
    text-align: left;
  }
  &-content {
    position: relative;
    border-top: 1px solid #dfdfdf;
    padding: 16px 12px;

    &-title {
      position: absolute;
      top: -11px;
      left: 10;
      padding: 2px 4px;
      background: #fff;
    }
  }
}

</style>
