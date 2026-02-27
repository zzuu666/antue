<template>
  <div>
    <ant-table :columns="columns" :dataSource="dataSource"></ant-table>
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
          { title: '住址', dataIndex: 'address', key: 'address' },
          {
            title: '操作',
            key: 'action',
            render: (h, text, record) => {
              return h('span', [
                h('a', { attrs: { href: 'javascript:;' } }, '编辑'),
                h('span', { style: { margin: '0 8px', color: '#e9e9e9' } }, '|'),
                h('a', { attrs: { href: 'javascript:;' } }, '删除')
              ])
            }
          }
        ],
        dataSource: [
          { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
          { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园2号' },
          { key: '3', name: '李大嘴', age: 28, address: '西湖区湖底公园3号' }
        ]
      }
    }
  }
</script>
