---
order: 3
title:
    zh-CN: Checkbox 组
    en-US: Checkbox Group
---

## zh-CN

方便的从数组生成 Checkbox 组。

## en-US

Generate a group of checkboxes from an array.

```` html
<template>
  <div>
    <checkbox-group v-model="value1" :options="options1"></checkbox-group>
    <span>{{ value1 }}</span>
    <br/>
    <checkbox-group v-model="value2" :options="options2"></checkbox-group>
    <span>{{ value2 }}</span>
    <br/>
    <checkbox-group v-model="value2" :options="options2" disabled></checkbox-group>
  </div>
</template>

<script>
  import { CheckboxGroup } from '@/checkbox'

  export default {
    components: {
      CheckboxGroup
    },
    data: () => ({
      options1: ['Apple', 'Pear', 'Orange'],
      value1: ['Apple'],
      options2: [
        { label: 'Apple', value: '1' },
        { label: 'Pear', value: '2' },
        { label: 'Orange', value: '3' }
      ],
      value2: ['2']
    })
  }
</script>
````
