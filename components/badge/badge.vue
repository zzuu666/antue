<template>
  <span :class="wrapperCls">
    <span v-if="!!status" :class="statusCls"></span>
    <slot></slot>
    <ant-transition type="fade">
      <sup v-if="showBadge" :class="scrollNumberCls" :style="badgeStyle">{{displayCount}}</sup>
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
        validator (value) {
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
        default () {
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
        validator (value) {
          return oneOf(value, ['success', 'processing', 'default', 'error', 'warning'])
        }
      }
    },
    computed: {
      wrapperCls () {
        return [
          `${this.prefixCls}`,
          {
            [`${this.prefixCls}-not-a-wrapper`]: this.independent || !!this.status,
            [`${this.prefixCls}-status`]: !!this.status
          }
        ]
      },
      statusCls () {
        return [
          `${this.prefixCls}-status-dot`,
          `${this.prefixCls}-status-${this.status}`
        ]
      },
      scrollNumberCls () {
        return [
          'ant-scroll-number',
          {
            [`${this.prefixCls}-dot`]: !!this.dot,
            [`${this.prefixCls}-count`]: !this.dot
          }
        ]
      },
      showBadge () {
        return !status && (this.count || this.showZero || this.dot)
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
