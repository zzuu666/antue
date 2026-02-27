---
order: 1
title:
  zh-CN: 带边框
  en-US: Bordered
---

## zh-CN

添加表格边框线。

## en-US

Add border to table.

```` html
<template>
  <div>
    <ant-table :columns="columns" :dataSource="dataSource" bordered></ant-table>
  </div>
</template>

<script>
  import AntTable from '@/table'

  export default {
    components: {
      AntTable
    },
    data () {
      return {
        columns: [
          { title: '姓名', dataIndex: 'name', key: 'name' },
          { title: '年龄', dataIndex: 'age', key: 'age' },
          { title: '住址', dataIndex: 'address', key: 'address' }
        ],
        dataSource: [
          { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
          { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园2号' }
        ]
      }
    }
  }
</script>
````
