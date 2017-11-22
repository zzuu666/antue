<template>
  <li :class="classes">
    <div :class="`${prefixCls}-item-tail`"></div>
    <div
      :class="dotClasses"
      :style="{
        backgroundColor: /blue|red|green/.test(color) ? null : color
      }">
      <slot name="dot"></slot>
    </div>
    <div :class="`${prefixCls}-item-content`">
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: 'timeline-item',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-timeline'
    },
    color: {
      type: String,
      default: 'blue'
    },
    pending: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-last`]: !!this.last,
          [`${prefixCls}-item-pending`]: !!this.pending
        }
      ]
    },
    dotClasses () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-item-head`,
        `${prefixCls}-item-head-${this.color}`,
        {
          [`${prefixCls}-item-head-custom`]: !!this.$slots.dot
        }
      ]
    },
    last () {
      return this._uid === this.$parent.lastUid
    }
  }
}
</script>
