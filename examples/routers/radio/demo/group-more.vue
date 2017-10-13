<template>
  <div class="radio-base-container">
    <radio-group v-model="checkedValue" @change="handleChange">
      <radio value="1" :style="radioStyle">Option A</radio>
      <radio value="2" :style="radioStyle">Option B</radio>
      <radio value="3" :style="radioStyle">Option C</radio>
      <radio value="4" :style="radioStyle">
        More...
        <input v-if="this.checkedValue === '4'" style="width: 100px; marginLeft: 10px"/>
      </Radio>
    </radio-group>
  </div>
</template>

<script>
  import Radio from '@/radio'
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
