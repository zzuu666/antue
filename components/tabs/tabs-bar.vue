<template>
  <div role="tablist" :class="`${prefixCls}-bar`">
    <tabs-nav
      :active="active"
      :size="size"
      :tabs="tabs"
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
