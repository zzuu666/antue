<template>
  <span
    :class="classes"
    @click="toggle"
    @mouseup="handleMouseUp"
    @keydown="handleKeyDown"
    :tabindex="number">
     <span :class="`${prefixCls}-inner`">
       <slot name="checkedChildren" v-if="isChecked">
         {{checkedChildren}}
       </slot>
       <slot name="unCheckedChildren" v-else>
         {{unCheckedChildren}}
       </slot>
     </span>
  </span>
</template>

<script>
import { oneOf } from '../_util/proptype'
import { noop } from '../_util/util'

export default {
  name: 'switch',
  data () {
    return {
      isChecked: false
    }
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-switch'
    },
    checked: {
      type: Boolean,
      default: undefined
    },
    checkedChildren: String,
    defaultChecked: {
      type: Boolean,
      default: false
    },
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
    unCheckedChildren: String
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        prefixCls,
        {
          [`${prefixCls}-checked`]: this.isChecked,
          [`${prefixCls}-disabled`]: this.disabled
        }
      ]
    }
  },
  watch: {
    checked (value) {
      this.setChecked(value)
    }
  },
  methods: {
    handleKeyDown (e) {
      const keyCode = e.keyCode
      this.toggle()
      keyCode === 37 ? this.setChecked(false)
        : keyCode === 39 ? this.setChecked(true)
          : keyCode === 32 || keyCode === 13 ? this.toggle()
            : noop()
    },
    handleMouseUp (e) {
      e.currentTarget.blur()
    },
    toggle (e) {
      const checked = !this.isChecked
      this.setChecked(checked)
      this.$emit('click', e, checked)
    },
    setChecked (checked) {
      if (this.disabled) return
      const old = this.isChecked
      this.isChecked = checked
      ;(old !== this.isChecked) && this.$emit('change', checked)
    }
  },
  created () {
    this.isChecked = typeof this.checked !== 'undefined' ? this.checked : this.defaultChecked
  }
}
</script>

