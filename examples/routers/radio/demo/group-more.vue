<template>
  <div class="radio-base-container">
    <radio-group v-model="checkedValue">
      <radio value="1" :style="radioStyle">Option A</radio>
      <radio value="2" :style="radioStyle">Option B</radio>
      <radio value="3" :style="radioStyle">Option C</radio>
      <radio value="4" :style="radioStyle">
        More...
        <atu-input v-if="this.checkedValue === '4'" style="width: 100px; margin-left: 10px; display: inline-block"></atu-input>
      </Radio>
    </radio-group>
  </div>
</template>

<script>
  import Radio from '@/radio'
  import AtuInput from '@/input'
  export default {
    data () {
      return {
        checkedValue: '1',
        radioStyle: {
          display: 'block',
          height: '30px',
          lineHeight: '30px'
        }
      }
    },
    components: {
      Radio,
      RadioGroup: Radio.Group,
      AtuInput
    }
  }
</script>

<style>
  .radio-base-container {
    text-align: left;
    padding: 10px 20px;
  }
</style>
