<template>
  <div>
    <ant-tree-select
      style="width: 300px"
      :tree-data="treeData"
      placeholder="请选择"
      v-model="value"
    ></ant-tree-select>
  </div>
</template>

<script>
  import AntTreeSelect from '@/tree-select'

  export default {
    components: {
      AntTreeSelect
    },
    data () {
      return {
        value: undefined,
        treeData: [
          {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
              {
                title: 'Child Node1',
                value: '0-0-0',
                key: '0-0-0'
              }
            ]
          },
          {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
            children: [
              {
                title: 'Child Node2',
                value: '0-1-0',
                key: '0-1-0'
              },
              {
                title: 'Child Node3',
                value: '0-1-1',
                key: '0-1-1'
              }
            ]
          }
        ]
      }
    }
  }
</script>
