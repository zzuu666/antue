---
order: 5
title:
  zh-CN: 布局
  en-US: Use with Grid
---

## zh-CN

Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。

## en-US

We can use Checkbox and Grid in Checkbox.Group, to implement complex layout.

````vue
<template>
  <div>
    <checkbox-group>
      <a-row>
        <a-col :span="8">
          <checkbox>A</checkbox>
        </a-col>
        <a-col :span="8">
          <checkbox>B</checkbox>
        </a-col>
        <a-col :span="8">
          <checkbox>C</checkbox>
        </a-col>
        <a-col :span="8">
          <checkbox>D</checkbox>
        </a-col>
        <a-col :span="8">
          <checkbox>E</checkbox>
        </a-col>
      </a-row>
    </checkbox-group>
  </div>
</template>

<script>
  import { Row as ARow, Col as ACol } from '@/grid'
  import { Checkbox, CheckboxGroup } from '@/checkbox'

  export default {
    components: {
      ARow,
      ACol,
      Checkbox,
      CheckboxGroup
    }
  }
</script>
````
