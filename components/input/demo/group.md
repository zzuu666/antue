---
order: 3
title:
    zh-CN: 输入框组合
    en-US: Input Group
---

## zh-CN

输入框的组合展现。

注意：使用 `compact` 模式时，不需要通过 `Col` 来控制宽度。

## en-US

Input.Group example

Note: You don't need `Col` to control the width in the `compact` mode.

```` html
<template>
  <div class="ant-input-base">
    <ant-input-group>
      <a-col :span="4">
        <ant-input value="0571"></ant-input>
      </a-col>
      <a-col :span="8">
        <ant-input value="26888888"></ant-input>
      </a-col>
    </ant-input-group>
    <ant-input-group style="margin-top: 10px" compact>
      <ant-input style="width: 20%" value="0571"></ant-input>
      <ant-input style="width: 30%" value="26888888"></ant-input>
    </ant-input-group>
  </div>
</template>

<script>
  import AntInput from '@/input'
  import ACol from '@/col'
  export default {
    components: {
      AntInput,
      AntInputGroup: AntInput.Group,
      ACol
    }
  }
</script>
````
