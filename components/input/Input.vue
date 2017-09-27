<template>
  <span :class="showAddonBefore || showAddonAfter ? `${prefixCls}-group-wrapper`:''">
    <span :class="addonWrapper">
      <span v-if="showAddonBefore" :class="`${prefixCls}-group-addon`">
        <slot name="addonBefore">
          {{addonBefore}}
        </slot>
      </span>
      <span v-if="showPrefix" :class="`${prefixCls}-prefix`">
        <slot name="prefix">
          {{prefix}}
        </slot>
      </span>
      <input
        :class="inputClass"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :readonly="readonly"
        :name="name"
        :number="number"
        :autofocus="autofocus"
        :disabled="disabled"
        :id="id"
        :autocomplete="autocomplete"
        @keypress="handleKeyDown"
        @input="updateValue($event.target.value)"
        @blur="handleBlur"
        @focus="handleFocus"
        @click="handleClick"
        @change="handleChange"
      />
      <span v-if="showSuffix" :class="`${prefixCls}-suffix`">
        <slot name="suffix">
          {{suffix}}
        </slot>
      </span>
      <span v-if="showAddonAfter" :class="`${prefixCls}-group-addon`">
        <slot name="addonAfter">
          {{addonAfter}}
        </slot>
      </span>
    </span>
  </span>
</template>

<script>
  export default {
    name: 'input',
    props: {
      addonAfter: String,
      addonBefore: String,
      autocomplete: {
        type: String,
        default: 'off'
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      id: {
        type: String
      },
      name: {
        type: String
      },
      number: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      prefix: String,
      prefixCls: {
        type: String,
        default: 'ant-input'
      },
      readonly: {
        type: Boolean,
        default: false
      },
      size: String,
      suffix: String,
      type: {
        type: String
      },
      value: null
    },
    computed: {
      addonWrapper () {
        return [
          this.showAddonAfter || this.showAddonBefore ? `${this.prefixCls}-wrapper` : '',
          this.showAddonAfter || this.showAddonBefore ? `${this.prefixCls}-group` : '',
          this.showSuffix || this.showPrefix ? `${this.prefixCls}-affix-wrapper` : ''
        ]
      },
      inputClass () {
        return [
          this.prefixCls,
          this.styleSize ? `${this.prefixCls}-${this.styleSize}` : ``,
          this.disabled ? `${this.prefixCls}-disabled` : ``
        ]
      },
      showAddonAfter () {
        return this.addonAfter || this.$slots.addonAfter !== undefined
      },
      showAddonBefore () {
        return this.addonBefore || this.$slots.addonBefore !== undefined
      },
      showPrefix () {
        return this.prefix || this.$slots.prefix !== undefined
      },
      showSuffix () {
        return this.suffix || this.$slots.suffix !== undefined
      },
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
