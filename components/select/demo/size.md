---
order: 3
title:
  zh-CN: 三种大小
  en-US: Sizes
---

## zh-CN

三种大小的选择框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px`，默认高度为 `32px`。

## en-US

The height of input field for the select defaults to 32px. If `size` is set to `large`, the height will be 40px, and if set to `small`, 24px.

```` html
<template>
  <div>
    <ant-select
      v-model="value"
      :options="options"
      size="large"
      placeholder="Large"
      style="width: 200px"
    />
    <ant-select
      v-model="value"
      :options="options"
      placeholder="Default"
      style="width: 200px"
    />
    <ant-select
      v-model="value"
      :options="options"
      size="small"
      placeholder="Small"
      style="width: 200px"
    />
  </div>
</template>

<script>
import AntSelect from '@/select'

export default {
  components: {
    AntSelect
  },
  data () {
    return {
      value: undefined,
      options: [
        { label: 'Jack', value: 'jack' },
        { label: 'Lucy', value: 'lucy' },
        { label: 'Tom', value: 'tom' }
      ]
    }
  }
}
</script>
````
