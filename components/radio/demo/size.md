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
        <radio-button value="a">Hangzhou</radio-button>
        <radio-button value="b">Shanghai</radio-button>
        <radio-button value="c">Beijing</radio-button>
        <radio-button value="d">Chengdu</radio-button>
      </radio-group>
    </div>
    <div style="margin-top: 16px">
      <radio-group v-model="checkedValue" @change="handleChange">
        <radio-button value="a">Hangzhou</radio-button>
        <radio-button value="b">Shanghai</radio-button>
        <radio-button value="c">Beijing</radio-button>
        <radio-button value="d">Chengdu</radio-button>
      </radio-group>
    </div>
    <div style="margin-top: 16px">
      <radio-group v-model="checkedValue" @change="handleChange" size="small">
        <radio-button value="a">Hangzhou</radio-button>
        <radio-button value="b">Shanghai</radio-button>
        <radio-button value="c">Beijing</radio-button>
        <radio-button value="d">Chengdu</radio-button>
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
      RadioGroup: Radio.Group,
      RadioButton: Radio.Button
    }
  }
</script>
````
