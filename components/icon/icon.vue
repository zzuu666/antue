<template>
  <i
    :class="[
      'anticon',
      `anticon-${type}`,
      !!spin || type === 'loading' ? `anticon-spin` : ``
    ]"></i>
</template>

<script>
export default {
  props: {
    type: String,
    spin: {
      type: Boolean,
      default: false
    }
  }
}
</script>
