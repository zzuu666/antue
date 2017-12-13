<template>
  <label :class="prefixCls + '-wrapper'">
    <span :class="classes" @click="handleClick"><input type="checkbox" :class="prefixCls + '-input'"><span
      :class="prefixCls + '-inner'"/></span>
    <span v-if="$slots.default !== undefined"><slot></slot></span>
  </label>
</template>

<script>
  export default {
    name: 'checkbox',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      indeterminate: {
        type: Boolean,
        default: false
      },
      prefixCls: {
        type: String,
        default: 'ant-checkbox'
      }
    },
    data () {
      return {
        checkedValue: this.value
      }
    },
    computed: {
      classes () {
        const prefixCls = this.prefixCls
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-checked`]: this.checkedValue,
            [`${prefixCls}-disabled`]: this.disabled,
            [`${prefixCls}-indeterminate`]: this.indeterminate
          }
        ]
      }
    },
    watch: {
      value (val) {
        this.checkedValue = val
      }
    },
    methods: {
      handleClick () {
        if (!this.disabled) {
          this.checkedValue = !this.checkedValue
          this.$emit('input', this.checkedValue)
        }
      }
    }
  }
</script>
