<template>
  <div role="tablist" :class="`${prefixCls}-bar`">
    <tabs-nav></tabs-nav>
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
    }
  },
  components: {
    TabsNav
  }
}
</script>
