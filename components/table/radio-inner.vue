<template>
  <label :class="`${prefixCls}-wrapper`" @click="handleClick">
    <span :class="classes">
      <input type="radio" :class="`${prefixCls}-input`" :disabled="disabled">
      <span :class="`${prefixCls}-inner`"></span>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'radio-inner',
    props: {
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      prefixCls: {
        type: String,
        default: 'ant-radio'
      }
    },
    computed: {
      classes () {
        return [
          this.prefixCls,
          {
            [`${this.prefixCls}-checked`]: this.checked,
            [`${this.prefixCls}-disabled`]: this.disabled
          }
        ]
      }
    },
    methods: {
      handleClick () {
        if (!this.disabled) {
          this.$emit('change')
        }
      }
    }
  }
</script>
