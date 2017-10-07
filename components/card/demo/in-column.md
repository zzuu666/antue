---
order: 4
title:
  zh-CN: 栅格卡片
  en-US: Card in column
---

## zh-CN

在系统概览页面常常和栅格进行配合。

## en-US

Cards usually cooperate with grid column layout in overview page.

````vue
<template>
  <div style="background: #ececec; padding: 30px">
    <a-row :gutter="12">
      <a-col :span="8">
        <ant-card :title="title" :bordered="false">Card content</ant-card>
      </a-col>
      <a-col :span="8">
        <ant-card :title="title" :bordered="false">Card content</ant-card>
      </a-col>
      <a-col :span="8">
        <ant-card :title="title" :bordered="false">Card content</ant-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import AntCard from '@/card'
  import ARow from '@/row'
  import ACol from '@/col'
  export default {
    components: {
      AntCard,
      ARow,
      ACol
    }
  }
</script>
````
