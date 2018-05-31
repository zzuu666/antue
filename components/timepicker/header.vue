<template>
  <div :class="`${prefixCls}-input-wrap`">
    <input
      :class="[
        `${prefixCls}-input`,
        invalid ? `${prefixCls}-input-invalid` : ''
      ]"
      :placeholder="placeholder"
      :value="value && value.format(this.format) || ''">
    <a
      v-if="allowEmpty"
      :class="`${prefixCls}-clear-btn`"
      :title="clearText"
      @click="handleClearClick" />
  </div>
</template>

<script>
export default {
  props: {
    prefixCls: String,
    allowEmpty: {
      type: Boolean,
      default: true
    },
    clearText: {
      type: String,
      default: 'clear'
    },
    format: String,
    invalid: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    value: null
  },
  methods: {
    handleClearClick (e) {
      this.$emit('clear', e)
    }
  }
}
</script>
