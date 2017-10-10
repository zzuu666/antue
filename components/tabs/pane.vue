<template>
  <div
    role="pane"
    :aria-hidden="active"
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
    index: {
      type: [String, Number],
      required: true
    },
    tab: {
      type: String,
      required: true
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
      // TODO
      return false
    }
  }
}
</script>
