<template>
  <label :class="classes" @click="handleClick">
    <span :class="spanClasses">
      <input :value="value" :class="`${this.prefixCls}-input`">
      <span class="ant-radio-inner"></span>
    </span>
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
  export default {
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
      },
      value: null
    },
    data () {
      return {
        radioValue: null
      }
    },
    computed: {
      classes () {
        return [
          `${this.prefixCls}-wrapper`,
          this.checked ? `${this.prefixCls}-wrapper-checked` : '',
          this.disabled ? `${this.prefixCls}-wrapper-disabled` : ''
        ]
      },
      spanClasses () {
        return [
          this.prefixCls,
          this.checked ? `${this.prefixCls}-checked` : '',
          this.disabled ? `${this.prefixCls}-disabled` : ''
        ]
      }
    },
    methods: {
      handleClick () {
        this.checked = true
        this.$emit('input', this.value)
      }
    }
  }
</script>

<style>

</style>
