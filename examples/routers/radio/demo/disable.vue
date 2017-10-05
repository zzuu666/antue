<template>
  <div class="radio-base-container">
    <radio :disabled="disabled" :checked="true">Disabled</radio>
    <br>
    <radio :disabled="disabled">Disabled</radio>
    <div style="margin-top: 20px">
      <ant-button type="primary" @click="handleClick">Toggle Disabled</ant-button>
    </div>
  </div>
</template>

<script>
  import Radio from '@/radio'
  import AntButton from '@/Button'
  export default {
    data () {
      return {
        disabled: true
      }
    },
    methods: {
      handleClick () {
        this.disabled = !this.disabled
      }
    },
    components: {
      Radio,
      AntButton
    }
  }
</script>

<style>
  .radio-base-container {
    text-align: left;
    padding: 10px 20px;
  }
</style>
