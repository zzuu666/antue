<template>
  <ul :class="treeClasses" role="tree">
    <tree-node
      v-for="node in treeData"
      :key="node.key"
      :title="node.title"
      :node-key="node.key"
      :children="node.children || []"
      :disabled="node.disabled || false"
      :selectable="node.selectable !== false"
      :checkable="checkable"
      :checked-keys="currentCheckedKeys"
      :selected-keys="currentSelectedKeys"
      :expanded-keys="currentExpandedKeys"
      :prefix-cls="prefixCls"
      @select="handleSelect"
      @check="handleCheck"
      @expand="handleExpand"
    ></tree-node>
  </ul>
</template>

<script>
  import TreeNode from './tree-node'

  const getAllKeys = (nodes) => {
    let keys = []
    nodes.forEach(node => {
      keys.push(node.key)
      if (node.children && node.children.length) {
        keys = keys.concat(getAllKeys(node.children))
      }
    })
    return keys
  }

  export default {
    name: 'atu-tree',
    props: {
      treeData: {
        type: Array,
        default: () => []
      },
      checkable: {
        type: Boolean,
        default: false
      },
      defaultExpandAll: {
        type: Boolean,
        default: false
      },
      checkedKeys: {
        type: Array,
        default: () => []
      },
      selectedKeys: {
        type: Array,
        default: () => []
      },
      expandedKeys: {
        type: Array,
        default: undefined
      },
      autoExpandParent: {
        type: Boolean,
        default: true
      },
      prefixCls: {
        type: String,
        default: 'ant-tree'
      }
    },
    data () {
      let expandedKeys = this.expandedKeys || []
      if (this.defaultExpandAll) {
        expandedKeys = getAllKeys(this.treeData)
      }
      return {
        currentCheckedKeys: this.checkedKeys || [],
        currentSelectedKeys: this.selectedKeys || [],
        currentExpandedKeys: expandedKeys
      }
    },
    computed: {
      treeClasses () {
        return [
          this.prefixCls,
          {
            [`${this.prefixCls}-checkable`]: this.checkable
          }
        ]
      }
    },
    watch: {
      checkedKeys (val) {
        this.currentCheckedKeys = val || []
      },
      selectedKeys (val) {
        this.currentSelectedKeys = val || []
      },
      expandedKeys (val) {
        if (val !== undefined) {
          this.currentExpandedKeys = val
        }
      }
    },
    methods: {
      handleSelect (key, selected) {
        const keys = [].concat(this.currentSelectedKeys)
        const idx = keys.indexOf(key)
        if (selected && idx === -1) {
          keys.push(key)
        } else if (!selected && idx > -1) {
          keys.splice(idx, 1)
        }
        this.currentSelectedKeys = keys
        this.$emit('select', keys, { node: key, selected: selected })
      },
      handleCheck (key, checked) {
        const keys = [].concat(this.currentCheckedKeys)
        const idx = keys.indexOf(key)
        if (checked && idx === -1) {
          keys.push(key)
        } else if (!checked && idx > -1) {
          keys.splice(idx, 1)
        }
        this.currentCheckedKeys = keys
        this.$emit('check', keys, { node: key, checked: checked })
      },
      handleExpand (key, expanded) {
        const keys = [].concat(this.currentExpandedKeys)
        const idx = keys.indexOf(key)
        if (expanded && idx === -1) {
          keys.push(key)
        } else if (!expanded && idx > -1) {
          keys.splice(idx, 1)
        }
        this.currentExpandedKeys = keys
        this.$emit('expand', keys, { node: key, expanded: expanded })
      }
    },
    components: {
      TreeNode
    }
  }
</script>
