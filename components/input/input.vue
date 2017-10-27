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
    render (h) {
      const basicInput = h('input', {
        attrs: {
          type: this.type,
          value: this.value,
          placeholder: this.placeholder,
          readonly: this.readonly,
          name: this.name,
          number: this.number,
          autofocus: this.autofocus,
          disabled: this.disabled,
          id: this.id,
          autocomplete: this.autocomplete
        },
        'class': this.inputClass,
        on: {
          blur: this.handleBlur,
          change: this.handleChange,
          click: this.handleClick,
          focus: this.handleFocus,
          input: this.updateValue,
          keypress: this.handleKeyDown
        }
      })

      const renderLabeledInput = (children) => {
        if ((!this.showAddonBefore && !this.showAddonAfter)) {
          return children
        }

        const wrapperClassName = `${this.prefixCls}-group`
        const addonClassName = `${wrapperClassName}-addon`
        const addonBefore = h('span', {'class': addonClassName}, [this.$slots.addonBefore || this.addonBefore])
        const addonAfter = h('span', {'class': addonClassName}, [this.$slots.addonAfter || this.addonAfter])

        const className = [`${this.prefixCls}-wrapper`, {
          [wrapperClassName]: (addonBefore || addonAfter)
        }]

        if (this.showAddonBefore || this.showAddonAfter) {
          return h('span', {'class': `${this.prefixCls}-group-wrapper`}, [
            h('span', {'class': className}, [
              this.showAddonBefore ? addonBefore : null,
              children,
              this.showAddonAfter ? addonAfter : null
            ])
          ])
        }
        return h('span', {'class': className}, [
          children
        ])
      }

      const renderLabeledIcon = (children) => {
        if (!(this.showSuffix || this.showPrefix)) {
          return children
        }
        const prefix = h('span', {'class': `${this.prefixCls}-prefix`}, [this.$slots.prefix || this.prefix])
        const suffix = h('span', {'class': `${this.prefixCls}-suffix`}, [this.$slots.suffix || this.suffix])
        return h('span', {'class': [`${this.prefixCls}-affix-wrapper`]}, [
          this.showPrefix ? prefix : null,
          children,
          this.showSuffix ? suffix : null
        ])
      }

      const renderInput = () => {
        return renderLabeledIcon(basicInput)
      }

      return renderLabeledInput(renderInput())
    },
    methods: {
      handleKeyDown (e) {
        if (e.keyCode === 13) {
          this.$emit('press-enter', e)
        }
        this.$emit('keydown', e)
      },
      updateValue (e) {
        this.$emit('input', e.target.value)
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
