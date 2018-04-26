<template>
  <div :class="`${prefixCls}-input-wrap`">
    <input
      :class="[
        `${prefixCls}-input`,
        invalid ? `${prefixCls}-input-invalid` : ''
      ]"
      :placeholder="placeholder">
    <a :class="`${prefixCls}-clear-btn`" />
  </div>
</template>

<script>
export default {
  props: {
    prefixCls: String,
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
