---
order: 8
title:
  zh-CN: 受控
  en-US: Controlled
---

## zh-CN

受控制的页码。可以通过controlled参数让分页组件的变化只受父组件控制。

## en-US

Controlled page number. Can use `controlled` params to make the page's change only effect by father component.

```` html
<template>
  <div>
    <ant-page :total="500" :current="page" controlled @change-page="handleChange"></ant-page>
  </div>
</template>

<script>
  import AntPage from '@/pagination'

  export default {
    data () {
      return {
        page: 1
      }
    },
    methods: {
      handleChange (i) {
        this.page = i
      }
    },
    components: {
      AntPage
    }
  }
</script>
````
