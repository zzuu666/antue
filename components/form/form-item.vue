<template>
  <div :class="classes">
    <label v-if="label || $slots.label" :class="labelClasses" :style="labelStyle">
      <slot name="label">{{ label }}</slot>
    </label>
    <div :class="wrapperClasses" :style="wrapperStyle">
      <div :class="`${prefixCls}-control`">
        <slot></slot>
        <div v-if="showMessage" :class="`${prefixCls}-explain`">{{ currentMessage }}</div>
        <div v-if="extra || $slots.extra" :class="`${prefixCls}-extra`">
          <slot name="extra">{{ extra }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ant-form-item',
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array
    },
    labelCol: {
      type: Object
    },
    wrapperCol: {
      type: Object
    },
    help: {
      type: String
    },
    extra: {
      type: String
    },
    validateStatus: {
      type: String,
      validator (value) {
        return ['success', 'warning', 'error', 'validating', ''].indexOf(value) > -1
      }
    },
    hasFeedback: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'ant-form-item'
    }
  },
  inject: {
    form: { default: null }
  },
  data () {
    return {
      validateState: '',
      validateMessage: '',
      initialValue: undefined
    }
  },
  computed: {
    classes () {
      return [
        this.prefixCls,
        {
          [`${this.prefixCls}-with-help`]: this.currentMessage,
          [`${this.prefixCls}-has-error`]: this.currentValidateStatus === 'error',
          [`${this.prefixCls}-has-success`]: this.currentValidateStatus === 'success',
          [`${this.prefixCls}-has-warning`]: this.currentValidateStatus === 'warning',
          [`${this.prefixCls}-is-validating`]: this.currentValidateStatus === 'validating',
          [`${this.prefixCls}-has-feedback`]: this.hasFeedback
        }
      ]
    },
    labelClasses () {
      const labelCol = this.labelCol || (this.form && this.form.labelCol) || {}
      const classes = [`${this.prefixCls}-label`]
      if (labelCol.span) {
        classes.push(`ant-col-${labelCol.span}`)
      }
      if (labelCol.offset) {
        classes.push(`ant-col-offset-${labelCol.offset}`)
      }
      if (this.isRequired) {
        classes.push(`${this.prefixCls}-required`)
      }
      return classes
    },
    wrapperClasses () {
      const wrapperCol = this.wrapperCol || (this.form && this.form.wrapperCol) || {}
      const classes = [`${this.prefixCls}-control-wrapper`]
      if (wrapperCol.span) {
        classes.push(`ant-col-${wrapperCol.span}`)
      }
      if (wrapperCol.offset) {
        classes.push(`ant-col-offset-${wrapperCol.offset}`)
      }
      return classes
    },
    labelStyle () {
      const labelCol = this.labelCol || (this.form && this.form.labelCol) || {}
      return labelCol.style || {}
    },
    wrapperStyle () {
      const wrapperCol = this.wrapperCol || (this.form && this.form.wrapperCol) || {}
      return wrapperCol.style || {}
    },
    fieldValue () {
      var model = this.form && this.form.model
      if (!model || !this.prop) { return }
      return model[this.prop]
    },
    fieldRules () {
      var formRules = this.form && this.form.rules
      var selfRules = this.rules
      var requiredRule = this.required
        ? [{ required: true }]
        : []
      var propRules = formRules ? formRules[this.prop] || [] : []
      return [].concat(selfRules || propRules || []).concat(requiredRule)
    },
    isRequired () {
      var rules = this.fieldRules
      var isRequired = false
      if (rules && rules.length) {
        rules.forEach(function (rule) {
          if (rule.required) {
            isRequired = true
          }
        })
      }
      return isRequired
    },
    currentValidateStatus () {
      return this.validateStatus || this.validateState
    },
    currentMessage () {
      return this.help || this.validateMessage
    },
    showMessage () {
      return this.currentMessage !== '' && this.currentMessage !== undefined
    }
  },
  methods: {
    getRules (trigger) {
      var rules = this.fieldRules
      if (!trigger || trigger === '') {
        return rules
      }
      return rules.filter(function (rule) {
        return !rule.trigger || rule.trigger === trigger
      })
    },
    validate (trigger, cb) {
      var rules = this.getRules(trigger)
      if ((!rules || rules.length === 0) && !this.required) {
        if (cb) {
          cb(null)
        }
        this.validateState = 'success'
        return
      }
      this.validateState = 'validating'
      var value = this.fieldValue
      var errors = []
      var total = rules.length

      if (total === 0) {
        this.validateState = 'success'
        this.validateMessage = ''
        if (cb) {
          cb(null)
        }
        return
      }

      var self = this
      var completed = 0

      rules.forEach(function (rule) {
        if (rule.validator) {
          rule.validator(rule, value, function (err) {
            if (err) {
              errors.push(err)
            }
            completed++
            if (completed === total) {
              self._finishValidation(errors, cb)
            }
          })
        } else {
          var error = self._validateRule(rule, value)
          if (error) {
            errors.push(error)
          }
          completed++
          if (completed === total) {
            self._finishValidation(errors, cb)
          }
        }
      })
    },
    _validateRule (rule, value) {
      if (rule.required) {
        if (value === undefined || value === null || value === '') {
          return rule.message || 'This field is required'
        }
      }
      if (value === undefined || value === null || value === '') {
        return null
      }
      if (rule.min !== undefined && typeof value === 'string' && value.length < rule.min) {
        return rule.message || 'Must be at least ' + rule.min + ' characters'
      }
      if (rule.max !== undefined && typeof value === 'string' && value.length > rule.max) {
        return rule.message || 'Must be at most ' + rule.max + ' characters'
      }
      if (rule.len !== undefined && typeof value === 'string' && value.length !== rule.len) {
        return rule.message || 'Must be exactly ' + rule.len + ' characters'
      }
      if (rule.pattern && !rule.pattern.test(value)) {
        return rule.message || 'Pattern mismatch'
      }
      if (rule.type) {
        if (rule.type === 'email') {
          var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRe.test(value)) {
            return rule.message || 'Invalid email address'
          }
        } else if (rule.type === 'url') {
          var urlRe = /^https?:\/\/.+/
          if (!urlRe.test(value)) {
            return rule.message || 'Invalid URL'
          }
        } else if (rule.type === 'number') {
          if (isNaN(Number(value))) {
            return rule.message || 'Must be a number'
          }
        }
      }
      return null
    },
    _finishValidation (errors, cb) {
      if (errors.length > 0) {
        this.validateState = 'error'
        this.validateMessage = errors[0]
      } else {
        this.validateState = 'success'
        this.validateMessage = ''
      }
      if (cb) {
        var field = {}
        if (this.prop) {
          field[this.prop] = errors
        }
        var msg = errors.length > 0 ? this.validateMessage : null
        var result = errors.length > 0 ? field : null
        cb(msg, result)
      }
    },
    resetField () {
      this.validateState = ''
      this.validateMessage = ''
      var model = this.form && this.form.model
      if (model && this.prop) {
        model[this.prop] = this.initialValue
      }
    },
    clearValidate () {
      this.validateState = ''
      this.validateMessage = ''
    },
    onFieldBlur () {
      this.validate('blur')
    },
    onFieldChange () {
      this.validate('change')
    }
  },
  created () {
    if (this.form) {
      this.form.addField(this)
    }
    if (this.prop) {
      var model = this.form && this.form.model
      if (model) {
        this.initialValue = model[this.prop]
      }
    }
  },
  beforeDestroy () {
    if (this.form) {
      this.form.removeField(this)
    }
  }
}
</script>
