---
order: 3
title:
  zh-CN: 按钮样式
  en-US: radio style
---

## zh-CN

按钮样式的单选组合。

## en-US

The combination of radio button style.

```` html
<template>
  <div>
    <div>
      <radio-group v-model="checkedValue1" @change="handleChange">
        <radio-button value="a">Hangzhou</radio-button>
        <radio-button value="b">Shanghai</radio-button>
        <radio-button value="c">Beijing</radio-button>
        <radio-button value="d">Chengdu</radio-button>
      </radio-group>
    </div>
    <div style="margin-top: 16px">
      <radio-group v-model="checkedValue2" @change="handleChange">
        <radio-button value="a">Hangzhou</radio-button>
        <radio-button disabled value="b">Shanghai</radio-button>
        <radio-button value="c">Beijing</radio-button>
        <radio-button value="d">Chengdu</radio-button>
      </radio-group>
    </div>
    <div style="margin-top: 16px">
      <radio-group v-model="checkedValue3" disabled @change="handleChange">
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
      RadioGroup: Radio.Group,
      RadioButton: Radio.Button
    }
  }
</script>
````
