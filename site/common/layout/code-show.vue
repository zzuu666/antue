<template>
  <div class="code-show">
    <div class="code-show-example">
      <slot></slot>
    </div>
    <div class="code-show-content">
      <span class="code-show-content-title" v-text="title"></span>
      <p class="code-show-content-desc" v-html="desc"></p>
      <atu-icon @click.native="showCode" class="code-show-content-icon" :type="isShow ? 'up' : 'down'" />
    </div>
     <div v-show="isShow" class="code-show-code">
        <slot name="code"></slot>
      </div>
  </div>
</template>

<script>
import AtuIcon from '@/icon'
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: {
    title: String,
    desc: String
  },
  components: {
    AtuIcon
  },
  methods: {
    showCode () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="less" scoped>
.code-show {
  position: relative;
  border: 1px solid #dfdfdf;
  border-radius: 4px;

  &-example {
    position: relative;
    text-align: center;
    padding: 32px 0;
  }
  &-content {
    position: relative;
    border-top: 1px solid #dfdfdf;
    padding: 16px 12px;

    &-title {
      position: absolute;
      top: -15px;
      left: 10;
      padding: 2px 4px;
      background: #fff;
    }

    &-icon {
      position: absolute;
      bottom: 16px;
      right: 16px;
      cursor: pointer;
    }
  }
   &-code {
    position: relative;
    overflow-x: auto;
    border-top: 1px dashed #dfdfdf;
    pre {
      background-color: #fff
    }
    .lang-html {
      background-color: #fff
    }
  }
}

</style>
