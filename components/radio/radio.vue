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
        this.checkedValue = true
        if (this.isRadioGroup) {
          this.parent.change(this.value)
        } else {
          this.$emit('change', this.value)
        }
      },
      checkChange (value) {
        // console.log(value)
        this.checkedValue = value
      }
    },
    watch: {
      check () {
        this.checkedValue = this.check === this.value
      }
    }
  }
</script>
