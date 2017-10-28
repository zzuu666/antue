<template>
  <span :class="classes">
    <slot></slot>
  </span>
</template>

<script>
  import { oneOf } from '../_util/proptype'

  export default {
    name: 'inputGroup',
    props: {
      compact: {
        type: Boolean,
        default: false
      },
      prefixCls: {
        type: String,
        default: 'ant-input-group'
      },
      size: {
        type: String,
        default: 'default',
        validator (value) {
          return oneOf(value, ['default', 'small', 'large'])
        }
      }
    },
    computed: {
      classes () {
        return [
          this.prefixCls,
          {
            [`${this.prefixCls}-lg`]: this.size === 'large',
            [`${this.prefixCls}-sm`]: this.size === 'small',
            [`${this.prefixCls}-compact`]: this.compact
          }
        ]
      }
    }
  }
</script>
