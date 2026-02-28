<template>
  <li :class="nodeClasses">
    <span :class="switcherClasses" @click="handleExpand">
      <icon v-if="hasChildren" :type="expanded ? 'caret-down' : 'caret-right'"></icon>
      <span v-else :class="`${prefixCls}-switcher-noop`"></span>
    </span>
    <span v-if="checkable" :class="checkboxClasses" @click="handleCheck">
      <span :class="`${prefixCls}-checkbox-inner`"></span>
    </span>
    <span :class="titleClasses" @click="handleSelect">
      {{ title }}
    </span>
    <ul v-if="hasChildren && expanded" :class="`${prefixCls}-child-tree`" role="group">
      <tree-node
        v-for="child in children"
        :key="child.key"
        :title="child.title"
        :node-key="child.key"
        :children="child.children || []"
        :disabled="child.disabled || false"
        :selectable="child.selectable !== false"
        :checkable="checkable"
        :checked-keys="checkedKeys"
        :selected-keys="selectedKeys"
        :expanded-keys="expandedKeys"
        :prefix-cls="prefixCls"
        @select="bubbleSelect"
        @check="bubbleCheck"
        @expand="bubbleExpand"
      ></tree-node>
    </ul>
  </li>
</template>

<script>
  import Icon from '../icon'

  export default {
    name: 'tree-node',
    props: {
      title: {
        type: String,
        default: ''
      },
      nodeKey: {
        type: String,
        default: ''
      },
      children: {
        type: Array,
        default: () => []
      },
      disabled: {
        type: Boolean,
        default: false
      },
      selectable: {
        type: Boolean,
        default: true
      },
      checkable: {
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
        default: () => []
      },
      prefixCls: {
        type: String,
        default: 'ant-tree'
      }
    },
    computed: {
      hasChildren () {
        return this.children && this.children.length > 0
      },
      expanded () {
        return this.expandedKeys.indexOf(this.nodeKey) > -1
      },
      checked () {
        return this.checkedKeys.indexOf(this.nodeKey) > -1
      },
      selected () {
        return this.selectedKeys.indexOf(this.nodeKey) > -1
      },
      nodeClasses () {
        return [
          `${this.prefixCls}-treenode-switcher-${this.expanded ? 'open' : 'close'}`,
          {
            [`${this.prefixCls}-treenode-disabled`]: this.disabled
          }
        ]
      },
      switcherClasses () {
        return [
          `${this.prefixCls}-switcher`,
          this.hasChildren
            ? `${this.prefixCls}-switcher_${this.expanded ? 'open' : 'close'}`
            : `${this.prefixCls}-switcher-noop`
        ]
      },
      checkboxClasses () {
        return [
          `${this.prefixCls}-checkbox`,
          {
            [`${this.prefixCls}-checkbox-checked`]: this.checked,
            [`${this.prefixCls}-checkbox-disabled`]: this.disabled
          }
        ]
      },
      titleClasses () {
        return [
          `${this.prefixCls}-node-content-wrapper`,
          {
            [`${this.prefixCls}-node-selected`]: this.selected
          }
        ]
      }
    },
    methods: {
      handleExpand () {
        if (!this.hasChildren) return
        this.$emit('expand', this.nodeKey, !this.expanded)
      },
      handleCheck () {
        if (this.disabled) return
        this.$emit('check', this.nodeKey, !this.checked)
      },
      handleSelect () {
        if (this.disabled || !this.selectable) return
        this.$emit('select', this.nodeKey, !this.selected)
      },
      bubbleSelect (key, selected) {
        this.$emit('select', key, selected)
      },
      bubbleCheck (key, checked) {
        this.$emit('check', key, checked)
      },
      bubbleExpand (key, expanded) {
        this.$emit('expand', key, expanded)
      }
    },
    components: {
      Icon
    }
  }
</script>
