---
order: 4
title:
    zh-CN: 搜索框
    en-US: Search box
---

## zh-CN

带有搜索按钮的输入框，`2.5.0` 时新增。

## en-US

Example of creating a search box by grouping a standard input with a search button, added in `2.5.0`.

```` html
<template>
  <div>
    <ant-search style="width: 200px" v-model="inputData" placeholder="input search text" @search="handleSearch"></ant-search>
  </div>
</template>

<script>
  import AntInput from '@/input'

  export default {
    data () {
      return {
        inputData: null
      }
    },
    methods: {
      handleSearch (value) {
        console.log(value)
      }
    },
    components: {
      AntSearch: AntInput.Search
    }
  }
</script>
````
