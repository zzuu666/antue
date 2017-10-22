<template>
  <div role="tablist" :class="`${prefixCls}-bar`">
    <div :class="`${prefixCls}-extra-content`" style="float: right;">
      <slot></slot>
      <atu-icon v-if="isShowPlus" type="plus" :class="`${prefixCls}-new-tab`" @click.native="handleCreate" />
    </div>
    <tabs-nav
      :active="active"
      :size="size"
      :tabs="tabs"
      :type="type"
      :position="position"></tabs-nav>
  </div>
</template>

<script>
import AtuIcon from '../icon'
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
    hideAdd: {
      type: Boolean
    },
    panes: {
      type: Array
    },
    position: {
      type: String
    },
    size: {
      type: String
    },
    tabs: {
      type: Array
    },
    type: {
      type: String
    }
  },
  components: {
    AtuIcon,
    TabsNav
  },
  computed: {
    isShowPlus () {
      return this.type === 'editable-card' && !this.hideAdd
    }
  },
  methods: {
    handleCreate () {
      this.$emit('edit', 'add')
    }
  }
}
</script>
