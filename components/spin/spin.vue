<template>
  <div :class="classes">
    <span v-if="showSpin" :class="`${prefixCls}-dot`">
      <i v-for="i in 4" :key="i"></i>
    </span>
    <span v-if="tip && showSpin" :class="`${prefixCls}-text`">{{ tip }}</span>
    <div v-if="$slots.default" :class="containerClasses">
      <div v-if="showSpin" :class="`${prefixCls}-blur`"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { oneOf } from '../_util/proptype'

const SIZEMAP = {
  'small': 'sm',
  'large': 'lg'
}

export default {
  name: 'spin',
  props: {
    size: {
      type: String,
      default: 'default',
      validator (value) {
        return oneOf(value, ['small', 'default', 'large'])
      }
    },
    spinning: {
      type: Boolean,
      default: true
    },
    tip: {
      type: String,
      default: ''
    },
    prefixCls: {
      type: String,
      default: 'ant-spin'
    }
  },
  computed: {
    showSpin () {
      return this.spinning
    },
    classes () {
      const prefixCls = this.prefixCls
      const size = this.size && SIZEMAP[this.size]
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-spinning`]: this.showSpin,
          [`${prefixCls}-${size}`]: !!size,
          [`${prefixCls}-show-text`]: !!this.tip,
          [`${prefixCls}-nested-loading`]: !!this.$slots.default
        }
      ]
    },
    containerClasses () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-container`,
        {
          [`${prefixCls}-blur`]: this.showSpin
        }
      ]
    }
  }
}
</script>
