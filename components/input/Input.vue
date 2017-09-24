<template>
  <input
    :class="[
      prefixCls,
      styleSize ? `${prefixCls}-${styleSize}` : ``,
      disabled ? `${prefixCls}-disabled` : ``
    ]"
    :disabled="disabled"
    :value="value"
    @keypress="handleKeyDown"
    @input="updateValue($event.target.value)"
    @blur="handleBlur"
    @focus="handleFocus"
    @click="handleClick"
    @change="handleChange"
  />
</template>

<script>
  export default {
    props: {
      size: String,
      disabled: {
        type: Boolean,
        default: false
      },
      className: String,
      prefixCls: {
        type: String,
        default: 'ant-input'
      },
      autosize: [Boolean, Object],
      value: null
    },
    computed: {
      styleSize () {
        if (this.size) {
          switch (this.size) {
            case 'small': return 'sm'
            case 'large': return 'lg'
            case 'default': return ''
            default: return ''
          }
        }
        return ''
      }
    },
    methods: {
      handleKeyDown (e) {
        if (e.keyCode === 13) {
          this.$emit('onPressEnter', e)
        }
        this.$emit('onKeyDown', e)
      },
      updateValue (value) {
        this.$emit('input', value)
      },
      handleBlur (e) {
        this.$emit('blur', e)
      },
      handleFocus (e) {
        this.$emit('focus', e)
      },
      handleClick (e) {
        this.$emit('click', e)
      },
      handleChange (e) {
        this.$emit('change', e)
      }
    }
  }
</script>

<style>

</style>
