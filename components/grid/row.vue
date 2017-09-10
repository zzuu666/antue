<template>
  <div
    :style="style"
    :class="[
      type ? `${prefixCls}-${type}` : `${prefixCls}`,
      type && justify ? `${prefixCls}-${type}-${justify}` : ``,
      type && align ? `${prefixCls}-${type}-${align}` : ``
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      prefixCls: 'ant-row'
    }
  },
  computed: {
    style () {
      let ret = {}
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    }
  },
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      validator: function (value) {
        return value === 'flex'
      }
    },
    align: {
      type: String,
      default: 'top'
    },
    justify: {
      type: String,
      default: 'start'
    }
  }
}
</script>

<style lang="less">
@import "./style/index";
</style>


