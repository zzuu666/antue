<template>
  <div class="radio-base-container">
    <div>
      <radio-group v-model="checkedValue1" @change="handleChange">
        <radio prefixCls="ant-radio-button" value="a">Hangzhou</radio>
        <radio prefixCls="ant-radio-button" value="b">Shanghai</radio>
        <radio prefixCls="ant-radio-button" value="c">Beijing</radio>
        <radio prefixCls="ant-radio-button" value="d">Chengdu</radio>
      </radio-group>
    </div>
    <div style="margin-top: 16px">
      <radio-group v-model="checkedValue2" @change="handleChange">
        <radio prefixCls="ant-radio-button" value="a">Hangzhou</radio>
        <radio prefixCls="ant-radio-button" disabled value="b">Shanghai</radio>
        <radio prefixCls="ant-radio-button" value="c">Beijing</radio>
        <radio prefixCls="ant-radio-button" value="d">Chengdu</radio>
      </radio-group>
    </div>
    <div style="margin-top: 16px">
      <radio-group v-model="checkedValue3" disabled @change="handleChange">
        <radio prefixCls="ant-radio-button" value="a">Hangzhou</radio>
        <radio prefixCls="ant-radio-button" value="b">Shanghai</radio>
        <radio prefixCls="ant-radio-button" value="c">Beijing</radio>
        <radio prefixCls="ant-radio-button" value="d">Chengdu</radio>
      </radio-group>
    </div>
  </div>
</template>

<script>
  import Radio from '@/radio'
  export default {
    data () {
      return {
        checkedValue1: 'a',
        checkedValue2: 'a',
        checkedValue3: 'a'
      }
    },
    methods: {
      handleChange (val) {
        console.log(val)
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
