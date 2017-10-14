<template>
  <label :class="classes" @click="handleClick">
    <span :class="spanClasses">
      <input :value="value" type="radio" :class="`${this.prefixCls}-input`" :name="name">
      <span :class="`${this.prefixCls}-inner`"></span>
    </span>
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'radio',
    props: {
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
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
        parent: null,
        disabledValue: this.disabled
      }
    },
    computed: {
      classes () {
        return [
          `${this.prefixCls}-wrapper`,
          {
            [`${this.prefixCls}-wrapper-checked`]: this.checkedValue,
            [`${this.prefixCls}-wrapper-disabled`]: this.disabledValue
          }
        ]
      },
      spanClasses () {
        return [
          this.prefixCls,
          {
            [`${this.prefixCls}-checked`]: this.checkedValue,
            [`${this.prefixCls}-disabled`]: this.disabledValue
          }
        ]
      },
      isRadioGroup () {
        this.parent = this.$parent
        while (this.parent) {
          if (this.parent.$options.name !== 'radioGroup') {
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
        if (!this.disabledValue) {
          this.checkedValue = true
        }
        if (this.isRadioGroup && this.disabledValue !== true) {
          this.parent.change(this.value)
        } else if (!this.isRadioGroup && this.disabledValue !== true) {
          this.$emit('change', this.value)
        }
      },
      checkChange (value) {
        this.checkedValue = value
      }
    },
    watch: {
      check () {
        this.checkedValue = this.check === this.value
      },
      disabled () {
        this.disabledValue = this.disabled
      }
    }
  }
</script>
