<template>
  <ul :class="prefixCls">
  </ul>
</template>

<script>
  import TreeNode from './tree-node.vue'

  export default {
    name: 'tree',
    components: { TreeNode },
    props: {
      prefixCls: {
        type: String,
        default: 'ant-tree'
      }
    },
    methods: {
      renderTreeNode (child, index, level = 0) {}
    }
  }
</script>
