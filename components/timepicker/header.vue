<template>
  <div :class="`${prefixCls}-input-wrap`">
    <input
      :class="[
        `${prefixCls}-input`,
        invalid ? `${prefixCls}-input-invalid` : ''
      ]"
      :placeholder="placeholder">
    <a
      v-if="allowEmpty"
      :class="`${prefixCls}-clear-btn`"
      :title="clearText" />
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
    invalid: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Select Time'
    }
  }
}
</script>
