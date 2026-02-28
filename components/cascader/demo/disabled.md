---
order: 1
title:
  zh-CN: 禁用选项
  en-US: Disabled option
---

## zh-CN

通过指定 options 里的 `disabled` 字段。

## en-US

Disable option by specifying the `disabled` field in `options`.

```` html
<template>
  <div>
    <ant-cascader
      v-model="value"
      :options="options"
      placeholder="请选择"
    />
  </div>
</template>

<script>
import AntCascader from '@/cascader'

export default {
  components: {
    AntCascader
  },
  data () {
    return {
      value: [],
      options: [
        {
          value: 'zhejiang',
          label: '浙江',
          children: [
            { value: 'hangzhou', label: '杭州' }
          ]
        },
        {
          value: 'jiangsu',
          label: '江苏',
          disabled: true,
          children: [
            { value: 'nanjing', label: '南京' }
          ]
        }
      ]
    }
  }
}
</script>
````
