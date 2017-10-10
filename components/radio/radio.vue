<template>
  <label :class="classes" @click="handleClick">
    <span :class="spanClasses">
      <input :value="value" type="radio" :class="`${this.prefixCls}-input`">
      <span :class="`${this.prefixCls}-inner`"></span>
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
      value: null,
      check: null
    },
    model: {
      prop: 'check',
      event: 'change'
    },
    data () {
      return {
        radioValue: null,
        checkedValue: this.checked,
        parent: null
      }
    },
    computed: {
      classes () {
        return [
          `${this.prefixCls}-wrapper`,
          this.checkedValue ? `${this.prefixCls}-wrapper-checked` : '',
          this.disabled ? `${this.prefixCls}-wrapper-disabled` : ''
        ]
      },
      spanClasses () {
        return [
          this.prefixCls,
          this.checkedValue ? `${this.prefixCls}-checked` : '',
          this.disabled ? `${this.prefixCls}-disabled` : ''
        ]
      },
      isRadioGroup () {
        this.parent = this.$parent
        while (this.parent) {
          if (this.parent.$options.componentName !== 'RadioGroup') {
            this.parent = this.parent.$parent
          } else {
            return true
          }
        }
        return false
      }
    },
    methods: {
      handleClick () {
        if (this.isRadioGroup) {
          this.parent.change(this.value)
        } else {
          this.checkedValue = true
          this.$emit('change', this.value)
        }
      },
      checkchange () {
        this.checkedValue = true
      }
    },
    watch: {
      check () {
        if (this.check === this.value) {
          this.checkedValue = true
        } else {
          this.checkedValue = false
        }
      }
    }
  }
</script>

<style>

</style>
