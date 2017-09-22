<template>
  <div class="footer-item">
    <atu-icon :type="icon" class="footer-item-icon" />
    <div>
      <p class="footer-item-title atu-color-black" v-text="title"></p>
      <div class="footer-item-link">
        <p v-for="a in as" :key="a.name">
          <a v-text="a.name" :href="a.href"></a>
          <span v-if="a.desc"> - {{a.desc}}</span>
        </p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import AtuIcon from '@/icon'

export default {
  props: {
    icon: String,
    title: String,
    as: Array
  },
  components: {
    AtuIcon
  }
}
</script>

<style lang="less" scoped>
.footer-item {
  position: relative;
  padding-left: 48px;
  &-icon {
    position: absolute;
    left: 12px;
    top: 0;
    font-size: 16px;
  }
  &-link {
    margin-top: 8px;
    p {
      position: relative;
      padding: 4px;
    }
  }
}
</style>
