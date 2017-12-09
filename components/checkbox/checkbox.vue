<template>
  <label :class="prefixCls + '-wrapper'">
    <span :class="classes"><input type="checkbox" :class="prefixCls + '-input'"><span
      :class="prefixCls + '-inner'"/></span>
    <span v-if="$slots.default !== undefined"><slot></slot></span>
  </label>
</template>

<script>
  export default {
    name: 'checkbox',
    props: {
      autoFocus: {
        type: Boolean,
        default: false
      },
      checked: {
        type: Boolean,
        default: false
      },
      defaultChecked: {
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
    computed: {
      classes () {
        const prefixCls = this.prefixCls
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-checked`]: !!this.checked,
            [`${prefixCls}-disabled`]: !!this.disabled,
            [`${prefixCls}-indeterminate`]: !!this.indeterminate
          }
        ]
      }
    }
  }
</script>
