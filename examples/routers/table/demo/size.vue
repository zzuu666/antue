<template>
  <div>
    <h4>默认尺寸</h4>
    <ant-table :columns="columns" :dataSource="dataSource" :pagination="false"></ant-table>
    <h4 style="margin-top: 20px;">中等尺寸</h4>
    <ant-table :columns="columns" :dataSource="dataSource" size="middle" :pagination="false"></ant-table>
    <h4 style="margin-top: 20px;">紧凑尺寸</h4>
    <ant-table :columns="columns" :dataSource="dataSource" size="small" :pagination="false"></ant-table>
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
