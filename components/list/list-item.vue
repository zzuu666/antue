<template>
  <div :class="`${prefixCls}-item`">
    <div :class="`${prefixCls}-item-content`">
      <slot></slot>
    </div>
    <div v-if="extra || $slots.extra" :class="`${prefixCls}-item-extra`">
      <slot name="extra">{{ extra }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: {
    extra: {
      type: String,
      default: ''
    },
    prefixCls: {
      type: String,
      default: 'ant-list'
    }
  }
}
</script>
