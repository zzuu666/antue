<template>
  <form :class="classes" @submit.prevent>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'ant-form',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    },
    layout: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical', 'inline'].indexOf(value) > -1
      }
    },
    labelCol: {
      type: Object
    },
    wrapperCol: {
      type: Object
    },
    hideRequiredMark: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'ant-form'
    }
  },
  provide () {
    return {
      form: this
    }
  },
  data () {
    return {
      fields: []
    }
  },
  computed: {
    classes () {
      return [
        this.prefixCls,
        {
          [`${this.prefixCls}-horizontal`]: this.layout === 'horizontal',
          [`${this.prefixCls}-vertical`]: this.layout === 'vertical',
          [`${this.prefixCls}-inline`]: this.layout === 'inline',
          [`${this.prefixCls}-hide-required-mark`]: this.hideRequiredMark
        }
      ]
    }
  },
  methods: {
    addField (field) {
      if (field) {
        this.fields.push(field)
      }
    },
    removeField (field) {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1)
      }
    },
    validate (cb) {
      let valid = true
      let invalidFields = {}
      let count = 0
      const fields = this.fields
      if (fields.length === 0 && cb) {
        var noError = true
        cb(noError, {})
        return
      }
      fields.forEach((field) => {
        field.validate('', (message, fieldErrors) => {
          if (message) {
            valid = false
          }
          if (fieldErrors) {
            Object.assign(invalidFields, fieldErrors)
          }
          count++
          if (count === fields.length && typeof cb === 'function') {
            cb(valid, invalidFields)
          }
        })
      })
    },
    validateField (prop, callback) {
      const field = this.fields.filter(f => f.prop === prop)[0]
      if (!field) {
        throw new Error('Must call validateField with valid prop string!')
      }
      field.validate('', callback)
    },
    resetFields () {
      this.fields.forEach((field) => {
        field.resetField()
      })
    },
    clearValidate () {
      this.fields.forEach((field) => {
        field.clearValidate()
      })
    }
  }
}
</script>
