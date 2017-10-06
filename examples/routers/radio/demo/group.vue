<template>
  <div class="radio-base-container">
    <radio-group v-model="checkedValue">
      <radio value="123">123</radio>
      <radio value="456">456</radio>
      <radio value="789">789</radio>
    </radio-group>

    <p>选定的值为: {{checkedValue}}</p>
  </div>
</template>

<script>
  import Radio from '@/radio'
  export default {
    data () {
      return {
        checkedValue: '123'
      }
    },
    components: {
      Radio,
      RadioGroup: Radio.group
    }
  }
</script>

<style>
  .radio-base-container {
    text-align: left;
    padding: 10px 20px;
  }
</style>
