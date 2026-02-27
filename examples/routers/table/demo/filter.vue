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
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            filters: [
              { text: '姓胡', value: '胡' },
              { text: '姓李', value: '李' }
            ],
            onFilter: (value, record) => record.name.indexOf(value) === 0
          },
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age
          },
          {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
            filters: [
              { text: '1号', value: '1号' },
              { text: '2号', value: '2号' }
            ],
            onFilter: (value, record) => record.address.indexOf(value) > -1
          }
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
        console.log('变化', pagination, filters, sorter)
      }
    }
  }
</script>
