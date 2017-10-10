<template>
  <div
    role="tab"
    :aria-disabled="disabled"
    :aria-selected="active"
    :class="classes">
  </div>
</template>


<script>
export default {
  name: 'tabsTab',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-tab`,
        {
          [`${prefixCls}-tab-disabled`]: this.disabled,
          [`${prefixCls}-tab-active`]: this.active
        }
      ]
    },
    active () {
      return false
    }
  }
}
</script>
