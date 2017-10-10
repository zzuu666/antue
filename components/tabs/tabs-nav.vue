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
          <tabs-ink></tabs-ink>
          <tabs-tab></tabs-tab>
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
      prev: false
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
  methods: {
    handlePrev () {

    },
    handleNext () {

    }
  }
}
</script>
