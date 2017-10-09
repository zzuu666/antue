<template>
  <span
    :class="classes"
    @click="toggle"
    @mouseup="handleMouseUp"
    @keydown="handleKeyDown"
    :tabindex="number">
     <span :class="`${prefixCls}-inner`">
       <slot name="on" v-if="checked">
         {{on}}
       </slot>
       <slot name="off" v-else>
         {{off}}
       </slot>
     </span>
  </span>
</template>

<script>
import { oneOf } from '../_util/proptype'
import { noop } from '../_util/util'

export default {
  name: 'switch',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-switch'
    },
    checked: {
      type: Boolean,
      required: true
    },
    on: String,
    disabled: {
      type: Boolean,
      default: false
    },
    number: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: 'default',
      validator (value) {
        return oneOf(value, ['default', 'small', 'large'])
      }
    },
    off: String
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        prefixCls,
        {
          [`${prefixCls}-checked`]: this.checked,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-small`]: this.size === 'small'
        }
      ]
    }
  },
  methods: {
    handleKeyDown (e) {
      const keyCode = e.keyCode
      keyCode === 37 ? this.setChecked(false)
        : keyCode === 39 ? this.setChecked(true)
          : keyCode === 32 || keyCode === 13 ? this.toggle()
            : noop()
    },
    handleMouseUp (e) {
      e.currentTarget.blur()
    },
    toggle () {
      const checked = !this.checked
      this.setChecked(checked)
    },
    setChecked (checked) {
      if (this.disabled) return
      ;(checked !== this.checked) && this.$emit('change', checked)
    }
  }
}
</script>
