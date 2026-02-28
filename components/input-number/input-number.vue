<template>
  <div :class="classes">
    <div :class="`${prefixCls}-handler-wrap`">
      <span
        unselectable="unselectable"
        :class="upHandlerClasses"
        @click="up">
        <span :class="`${prefixCls}-handler-up-inner`"></span>
      </span>
      <span
        unselectable="unselectable"
        :class="downHandlerClasses"
        @click="down">
        <span :class="`${prefixCls}-handler-down-inner`"></span>
      </span>
    </div>
    <div :class="`${prefixCls}-input-wrap`">
      <input
        ref="input"
        :class="`${prefixCls}-input`"
        :value="currentValue"
        :disabled="disabled"
        @input="handleInput"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus" />
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
  name: 'input-number',
  props: {
    value: {
      type: Number,
      default: undefined
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator (value) {
        return oneOf(value, ['large', 'default', 'small'])
      }
    },
    precision: {
      type: Number
    },
    prefixCls: {
      type: String,
      default: 'ant-input-number'
    }
  },
  data () {
    return {
      currentValue: this.value,
      focused: false
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      const size = this.size && SIZEMAP[this.size]
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-focused`]: this.focused,
          [`${prefixCls}-${size}`]: !!size
        }
      ]
    },
    upHandlerClasses () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-handler`,
        `${prefixCls}-handler-up`,
        {
          [`${prefixCls}-handler-up-disabled`]: this.currentValue !== undefined && this.currentValue >= this.max
        }
      ]
    },
    downHandlerClasses () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-handler`,
        `${prefixCls}-handler-down`,
        {
          [`${prefixCls}-handler-down-disabled`]: this.currentValue !== undefined && this.currentValue <= this.min
        }
      ]
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  methods: {
    toPrecision (num) {
      if (this.precision !== undefined) {
        return parseFloat(num.toFixed(this.precision))
      }
      return num
    },
    setValue (val) {
      if (val >= this.max) val = this.max
      if (val <= this.min) val = this.min
      val = this.toPrecision(val)
      this.currentValue = val
      this.$emit('input', val)
      this.$emit('change', val)
    },
    up () {
      if (this.disabled) return
      if (this.currentValue >= this.max) return
      const val = (this.currentValue || 0) + this.step
      this.setValue(val)
    },
    down () {
      if (this.disabled) return
      if (this.currentValue <= this.min) return
      const val = (this.currentValue || 0) - this.step
      this.setValue(val)
    },
    handleInput (e) {
      const val = e.target.value.trim()
      if (val === '' || val === '-') return
      const num = Number(val)
      if (!isNaN(num)) {
        this.setValue(num)
      }
    },
    handleChange (e) {
      const val = e.target.value.trim()
      const num = Number(val)
      if (val === '' || isNaN(num)) {
        this.currentValue = this.value
        return
      }
      this.setValue(num)
    },
    handleBlur () {
      this.focused = false
    },
    handleFocus () {
      this.focused = true
    }
  }
}
</script>
