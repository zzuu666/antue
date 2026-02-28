---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

省市区级联。

## en-US

Simple cascading selection.

```` html
<template>
  <div>
    <ant-cascader
      v-model="value"
      :options="options"
      placeholder="请选择"
      @change="handleChange"
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
            {
              value: 'hangzhou',
              label: '杭州',
              children: [
                { value: 'xihu', label: '西湖' }
              ]
            }
          ]
        },
        {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                { value: 'zhonghuamen', label: '中华门' }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleChange (value) {
      console.log('selected:', value)
    }
  }
}
</script>
````
