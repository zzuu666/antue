---
order: 3
title:
  zh-CN: 排序
  en-US: Sorter
---

## zh-CN

对某一列数据进行排序，通过指定列的 `sorter` 函数即可启动排序按钮。

## en-US

Sort a column by specifying a `sorter` function.

```` html
<template>
  <div>
    <ant-table
      :columns="columns"
      :dataSource="dataSource"
      @change="handleChange"
    ></ant-table>
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
          { title: '年龄', dataIndex: 'age', key: 'age', sorter: (a, b) => a.age - b.age },
          { title: '住址', dataIndex: 'address', key: 'address' }
        ],
        dataSource: [
          { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
          { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园2号' },
          { key: '3', name: '李大嘴', age: 28, address: '西湖区湖底公园3号' },
          { key: '4', name: '王小明', age: 35, address: '西湖区湖底公园4号' }
        ]
      }
    },
    methods: {
      handleChange (pagination, filters, sorter) {
        console.log('排序变化', sorter)
      }
    }
  }
</script>
````
