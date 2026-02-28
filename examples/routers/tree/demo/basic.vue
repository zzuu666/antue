<template>
  <div>
    <ant-tree :tree-data="treeData" default-expand-all></ant-tree>
  </div>
</template>

<script>
  import AntTree from '@/tree'

  export default {
    components: {
      AntTree
    },
    data () {
      return {
        treeData: [
          {
            title: 'parent 1',
            key: '0-0',
            children: [
              {
                title: 'parent 1-0',
                key: '0-0-0',
                children: [
                  {
                    title: 'leaf',
                    key: '0-0-0-0'
                  },
                  {
                    title: 'leaf',
                    key: '0-0-0-1'
                  }
                ]
              },
              {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                  {
                    title: 'leaf',
                    key: '0-0-1-0'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>
