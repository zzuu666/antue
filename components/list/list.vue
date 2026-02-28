<template>
  <div :class="classes">
    <div v-if="header || $slots.header" :class="`${prefixCls}-header`">
      <slot name="header">{{ header }}</slot>
    </div>
    <div v-if="loading" :class="`${prefixCls}-spin`">
      <slot name="loading">Loading...</slot>
    </div>
    <div :class="`${prefixCls}-items`">
      <slot></slot>
    </div>
    <div v-if="footer || $slots.footer" :class="`${prefixCls}-footer`">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script>
import { oneOf } from '../_util/proptype'

export default {
  name: 'list',
  props: {
    dataSource: {
      type: Array,
      default () {
        return []
      }
    },
    bordered: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator (value) {
        return oneOf(value, ['default', 'small', 'large'])
      }
    },
    header: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    split: {
      type: Boolean,
      default: true
    },
    prefixCls: {
      type: String,
      default: 'ant-list'
    }
  },
  computed: {
    classes () {
      return [
        this.prefixCls,
        {
          [`${this.prefixCls}-bordered`]: this.bordered,
          [`${this.prefixCls}-split`]: this.split,
          [`${this.prefixCls}-loading`]: this.loading,
          [`${this.prefixCls}-sm`]: this.size === 'small',
          [`${this.prefixCls}-lg`]: this.size === 'large'
        }
      ]
    }
  }
}
</script>
