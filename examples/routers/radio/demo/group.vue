<template>
  <div class="radio-base-container">
    <radio-group v-model="checkedValue" @change="handleChange">
      <radio value="a">A</radio>
      <radio value="b">B</radio>
      <radio value="c">C</radio>
      <radio value="d">D</radio>
    </radio-group>
  </div>
</template>

<script>
  import Radio from '@/radio'
  export default {
    data () {
      return {
        checkedValue: 'a'
      }
    },
    methods: {
      handleChange (val) {
        console.log(val)
      }
    },
    components: {
      Radio,
      RadioGroup: Radio.Group
    }
  }
</script>

<style>
  .radio-base-container {
    text-align: left;
    padding: 10px 20px;
  }
</style>
