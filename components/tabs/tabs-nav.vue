<template>
  <div :class="classes">
    <span
      unselectable="unselectable"
      :class="[
        `${prefixCls}-tab-prev`,
        {
          [`${prefixCls}-tab-btn-disabled`]: !prev,
          [`${prefixCls}-tab-arrow-show`]: showNextPrev
        }
      ]"
      @click="handlePrev">
      <span :class="`${prefixCls}-tab-prev-icon`"></span>
    </span>
    <span
      unselectable="unselectable"
      :class="[
        `${prefixCls}-tab-next`,
        {
          [`${prefixCls}-tab-btn-disabled`]: !next,
          [`${prefixCls}-tab-arrow-show`]: showNextPrev
        }
      ]"
      @click="handleNext">
      <span :class="`${prefixCls}-tab-next-icon`"></span>
    </span>

    <div :class="`${prefixCls}-nav-wrap`" ref="wrap">
      <div :class="`${prefixCls}-nav-scroll`">
        <div
          :class="[
            `${prefixCls}-nav`,
            this.animated ? `${prefixCls}-nav-animated` : `${prefixCls}-nav-no-animated`
          ]" ref="nav">
          <!--content-->
          <tabs-ink :activeNode="activeNode" :offset="inkOffset"></tabs-ink>
          <tabs-tab
            ref="tabs"
            v-for="tab in tabs"
            :key="tab.index"
            :index="tab.index"
            :icon="tab.icon"
            :tab="tab.tab"
            :disabled="tab.disabled"
            @change="handleChange"></tabs-tab>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabsInk from './tabs-ink'
import TabsTab from './tabs-tab'

export default {
  name: 'tabsNav',
  data () {
    return {
      next: false,
      prev: false,
      activeNode: null,
      inkWidth: 0,
      inkOffset: 0
    }
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    animated: {
      type: Boolean,
      default: true
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
    TabsInk,
    TabsTab
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-nav-container`,
        {
          [`${prefixCls}-nav-container-scrolling`]: this.showNextPrev
        }
      ]
    },
    showNextPrev () {
      return this.next || this.prev
    }
  },
  watch: {
    tabs () {
      this.getActiveNode()
    },
    active () {
      this.getActiveNode()
    }
  },
  methods: {
    handleChange (index) {
      this.$emit('change', index)
    },
    handlePrev () {

    },
    handleNext () {

    },
    getActiveNode () {
      this.$nextTick(() => {
        const index = this.tabs.findIndex(tab => tab.index === this.active)
        const gutter = this.size === 'small' ? 16 : 24
        this.activeNode = index > -1 ? this.$refs.tabs[index].$el : null
        this.inkWidth = this.activeNode ? this.activeNode.offsetWidth : 0
        this.inkOffset = this.activeNode
          ? this.$refs.tabs
            .filter((vm, i) => i < index)
            .map(vm => vm.$el.offsetWidth)
            .reduce((sum, value) => sum + value + gutter, 0)
          : 0
      })
    }
  }
}
</script>
