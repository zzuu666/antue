<template>
  <div role="tablist" :class="`${prefixCls}-bar`">
    <div v-if="$slots.default" :class="`${prefixCls}-extra-content`" style="float: right;">
      <slot></slot>
    </div>
    <tabs-nav
      :active="active"
      :size="size"
      :tabs="tabs"
      :position="position"
      @change="handleChange"></tabs-nav>
  </div>
</template>

<script>
import TabsNav from './tabs-nav'

export default {
  name: 'tabsBar',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    active: {
      type: [String, Number]
    },
    size: {
      type: String
    },
    tabs: {
      type: Array
    },
    position: {
      type: String
    }
  },
  components: {
    TabsNav
  },
  methods: {
    handleChange (index) {
      this.$emit('change', index)
    }
  }
}
</script>
