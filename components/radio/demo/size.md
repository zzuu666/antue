---
order: 5
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

大中小三种组合，可以和表单输入框进行对应配合。

## en-US

There are three sizes available: large, medium, and small. It can coordinate with input box.

```` html
<template>
  <div>
    <div>
      <radio-group v-model="checkedValue" @change="handleChange" size="large">
        <radio prefixCls="ant-radio-button" value="a">Hangzhou</radio>
        <radio prefixCls="ant-radio-button" value="b">Shanghai</radio>
        <radio prefixCls="ant-radio-button" value="c">Beijing</radio>
        <radio prefixCls="ant-radio-button" value="d">Chengdu</radio>
      </radio-group>
    </div>
    <div style="margin-top: 16px">
      <radio-group v-model="checkedValue" @change="handleChange">
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
````
