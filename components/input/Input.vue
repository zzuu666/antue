<template>
  <span :class="addonBefore||addonAfter ? `${prefixCls}-group-wrapper`:''">
    <span :class="[
      addonBefore||addonAfter ? `${prefixCls}-wrapper`:'',
      addonBefore||addonAfter ? `${prefixCls}-group`:'',
      prefix || suffix ? `${prefixCls}-affix-wrapper`:''
    ]">
      <span v-if="addonBefore" :class="`${prefixCls}-group-addon`">
        <slot name="addonBefore">
          {{addonBefore}}
        </slot>
      </span>
      <span v-if="prefix" :class="`${prefixCls}-prefix`">
      <slot name="prefix">
          {{prefix}}
      </slot>
    </span>
      <input
      :class="[
        prefixCls,
        styleSize ? `${prefixCls}-${styleSize}` : ``,
        disabled ? `${prefixCls}-disabled` : ``
      ]"
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
      <span v-if="suffix" :class="`${prefixCls}-suffix`">
      <slot name="suffix">
        {{suffix}}
      </slot>
    </span>
      <span v-if="addonAfter" :class="`${prefixCls}-group-addon`">
        <slot name="addonAfter">
          {{addonAfter}}
        </slot>
      </span>
    </span>
  </span>
</template>

<script>
  export default {
    props: {
      size: String,
      disabled: {
        type: Boolean,
        default: false
      },
      prefixCls: {
        type: String,
        default: 'ant-input'
      },
      value: null,
      addonBefore: String,
      addonAfter: String,
      prefix: String,
      suffix: String,
      // input需要的一些属性
      type: {
        type: String
      },
      number: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      autocomplete: {
        type: String,
        default: 'off'
      },
      id: {
        type: String
      },
      readonly: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      name: {
        type: String
      }
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
