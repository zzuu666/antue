<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { oneOf } from '../_util/proptype'

const SIZEMAP = {
  'small': 'sm',
  'large': 'lg'
}

export default {
  name: 'buttonGroup',
  props: {
    size: {
      type: String,
      validator (value) {
        return oneOf(value, ['small', 'large'])
      }
    }
  },
  data () {
    return {
      prefixCls: 'ant-btn-group'
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      const size = this.size && SIZEMAP[this.size]
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${size}`]: !!size
        }
      ]
    }
  }
}
</script>