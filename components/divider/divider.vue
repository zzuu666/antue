<template>
  <div :class="classes">
    <span v-if="hasText && type !== 'vertical'" :class="`${prefixCls}-inner-text`"><slot></slot></span>
  </div>
</template>

<script>
import { oneOf } from '../_util/proptype'

export default {
  name: 'divider',
  props: {
    type: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return oneOf(value, ['horizontal', 'vertical'])
      }
    },
    dashed: {
      type: Boolean,
      default: false
    },
    orientation: {
      type: String,
      default: 'center',
      validator (value) {
        return oneOf(value, ['left', 'right', 'center'])
      }
    },
    prefixCls: {
      type: String,
      default: 'ant-divider'
    }
  },
  computed: {
    hasText () {
      return !!this.$slots.default
    },
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-dashed`]: this.dashed,
          [`${prefixCls}-with-text`]: this.hasText && this.type !== 'vertical',
          [`${prefixCls}-with-text-${this.orientation}`]: this.hasText && this.type !== 'vertical'
        }
      ]
    }
  }
}
</script>
