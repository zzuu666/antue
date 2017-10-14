<template>
  <div class="radio-base-container">
    <div>
      <radio-group v-model="checkedValue" @change="handleChange" size="large">
        <radio prefixCls="ant-radio-button" value="a">Hangzhou</radio>
        <radio prefixCls="ant-radio-button" value="b">Shanghai</radio>
        <radio prefixCls="ant-radio-button" value="c">Beijing</radio>
        <radio prefixCls="ant-radio-button" value="d">Chengdu</radio>
      </radio-group>
    </div>
    <div style="margin-top: 16px">
      <radio-group v-model="checkedValue" @change="handleChange" size="default">
        <radio prefixCls="ant-radio-button" value="a">Hangzhou</radio>
        <radio prefixCls="ant-radio-button" value="b">Shanghai</radio>
        <radio prefixCls="ant-radio-button" value="c">Beijing</radio>
        <radio prefixCls="ant-radio-button" value="d">Chengdu</radio>
      </radio-group>
    </div>
    <div style="margin-top: 16px">
      <radio-group v-model="checkedValue" @change="handleChange" size="small">
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
