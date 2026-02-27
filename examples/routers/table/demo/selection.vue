<template>
  <div>
    <ant-table
      :columns="columns"
      :dataSource="dataSource"
      :rowSelection="rowSelection"
    ></ant-table>
    <p style="margin-top: 8px;">已选择: {{ selectedRowKeys.join(', ') || '无' }}</p>
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
        selectedRowKeys: [],
        columns: [
          { title: '姓名', dataIndex: 'name', key: 'name' },
          { title: '年龄', dataIndex: 'age', key: 'age' },
          { title: '住址', dataIndex: 'address', key: 'address' }
        ],
        dataSource: [
          { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
          { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园2号' },
          { key: '3', name: '李大嘴', age: 28, address: '西湖区湖底公园3号' }
        ]
      }
    },
    computed: {
      rowSelection () {
        return {
          selectedRowKeys: this.selectedRowKeys,
          onChange: (selectedRowKeys) => {
            this.selectedRowKeys = selectedRowKeys
          }
        }
      }
    }
  }
</script>
