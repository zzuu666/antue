<template>
  <div
    role="pane"
    :aria-hidden="!active+''"
    :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pane',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    closable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: [String, Number],
      required: true
    },
    icon: {
      type: String
    },
    tab: {
      type: [String, Object]
    }
  },
  computed: {
    classes () {
      const prefixCls = `${this.prefixCls}-tabpane`
      return [
        prefixCls,
        this.active ? `${prefixCls}-active` : `${prefixCls}-inactive`
      ]
    },
    active () {
      return this.index === this.$parent.active
    }
  }
}
</script>
