<template>
  <span :class="[`${prefixCls}`, {
      [`${prefixCls}-not-a-wrapper`]: independent || !!status,
      [`${prefixCls}-status`]: !!status
    }]">
    <span v-if="!!status" :class="[
      `${prefixCls}-status-dot`,
      `${prefixCls}-status-${status}`]"></span>
    <slot></slot>
    <ant-transition type="fade">
      <sup v-if="!status && showBadge" :class="['ant-scroll-number',{
      [`${prefixCls}-dot`]: !!dot, 
      [`${prefixCls}-count`]: !dot
    }]" :style="badgeStyle">{{displayCount}}</sup>
    </ant-transition>
  </span>
</template>
<script>
import AntTransition from '@/transition'
import { oneOf } from '../_util/proptype'

export default {
  name: 'Badge',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-badge'
    },
    count: {
      type: Number,
      default: 0,
      validator: function (value) {
        return value > -1
      }
    },
    showZero: {
      type: Boolean,
      default: false
    },
    independent: {
      type: Boolean,
      default: false
    },
    badgeStyle: {
      type: Object,
      default: function () {
        return {}
      }
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    dot: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      validator: function (value) {
        return oneOf(value, ['success', 'processing', 'default', 'error', 'warning'])
      }
    }
  },
  computed: {
    showBadge () {
      return this.count || this.showZero || this.dot
    },
    displayCount () {
      if (!this.dot) return this.count <= this.overflowCount ? this.count : `${this.overflowCount}+`
      return ''
    }
  },
  components: {
    AntTransition
  }
}
</script>
<style lang="less" scoped>
.ant-badge {
  text-align: end;
}
.ant-badge:not(.ant-badge-status) {
  margin-right: 20px;
}
</style>
