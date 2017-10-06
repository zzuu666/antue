<template>
  <div class="radio-base-container">
    <radio :disabled="disabled" :checked="true">Disabled</radio>
    <br>
    <radio :disabled="disabled">Disabled</radio>
    <div style="margin-top: 20px">
      <atu-button type="primary">Toggle Disabled</atu-button>
    </div>
  </div>
</template>

<script>
  import Radio from '@/radio'
  import AtuButton from '@/button'
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
      AtuButton
    }
  }
</script>

<style>
  .radio-base-container {
    text-align: left;
    padding: 10px 20px;
  }
</style>
