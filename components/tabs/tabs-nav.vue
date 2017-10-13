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
          ]"
          :style="style"
          ref="nav">
          <!--content-->
          <tabs-ink :activeNode="activeNode" :offset="inkOffset" :vertical="isVertical"></tabs-ink>
          <tabs-tab
            ref="tabs"
            v-for="tab in tabs"
            :key="tab.index"
            :index="tab.index"
            :icon="tab.icon"
            :tab="tab.tab"
            :closable="tab.closable"
            :type="type"
            :disabled="tab.disabled"
            @change="handleChange"
            @remove="handleRemove"
            @click="handleTabClick"></tabs-tab>
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
      inkOffset: 0,
      offset: 0
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
    style () {
      const target = Math.min(0, this.offset)
      return {
        transform: this.isVertical ? `translate3d(0,${target}px,0)` : `translate3d(${target}px,0,0)`
      }
    },
    showNextPrev () {
      return this.next || this.prev
    },
    isVertical () {
      const position = this.position
      return position === 'left' || position === 'right'
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
    handleRemove (index) {
      this.$emit('remove', index)
    },
    handleTabClick (info) {
      this.$emit('tab-click', info)
    },
    handlePrev (e) {
      if (!this.prev) return
      const warp = this.$refs.wrap
      const warpWH = this.getOffsetWH(warp)
      this.offset += warpWH
      this.$emit('prev-click', e)
    },
    handleNext (e) {
      if (!this.next) return
      const warp = this.$refs.wrap
      const warpWH = this.getOffsetWH(warp)
      this.offset -= warpWH
      this.$emit('next-click', e)
    },
    getActiveNode () {
      this.$nextTick(() => {
        const index = this.tabs.findIndex(tab => tab.index === this.active)
        const gutter = this.isVertical ? 16 : this.size === 'small' ? 0 : 24
        this.activeNode = index > -1 ? this.$refs.tabs[index].$el : null
        this.inkWidth = this.activeNode ? this.activeNode.offsetWidth : 0
        this.inkOffset = this.activeNode
          ? this.$refs.tabs
            .filter((vm, i) => i < index)
            .map(vm => this.getOffsetWH(vm.$el))
            .reduce((sum, value) => sum + value + gutter, 0)
          : 0
      })
    },
    getOffsetWH (node) {
      return this.isVertical
        ? node.offsetHeight
        : node.offsetWidth
    },
    getOffsetLT (node) {
      return this.isVertical
        ? node.getBoundingClientRect().top
        : node.getBoundingClientRect().left
    },
    setNextPrev () {
      const nav = this.$refs.nav
      const navWH = this.getOffsetWH(nav)
      const warp = this.$refs.wrap
      const warpWH = this.getOffsetWH(warp)
      const minOffset = warpWH - navWH
      if (minOffset >= 0) {
        this.next = false
        this.offset = 0
      } else if (minOffset < this.offset) {
        this.next = true
      } else {
        this.next = false
        this.offset = minOffset
      }
      this.prev = this.offset < 0
    }
  },
  mounted () {
    this.setNextPrev()
  },
  beforeUpdate () {
    this.getActiveNode()
    this.setNextPrev()
  }
}
</script>
