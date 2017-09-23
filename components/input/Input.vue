<template>
  <input
    type="text"
    :class="[
      prefixCls,
      type ? `${prefixCls}-${type}` : ``,
      shape ? `${prefixCls}-${shape}` : ``,
      size ? `${prefixCls}-${size}` : ``,
      isLoading ? `${prefixCls}-loading` : ``,
      ghost ? `${prefixCls}-background-ghost` : ``,
      clicked ? `${prefixCls}-clicked` : ``,
    ]"
  />
</template>

<script>
  export default {
    data () {
      return {
        prefixCls: 'ant-input',
        clicked: false,
        timeout: null,
        delayTimeout: null,
        isLoading: false
      }
    }
  }
</script>

<style>

</style>
