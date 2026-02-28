<template>
  <li :class="nodeClasses">
    <span :class="`${prefixCls}-tree-switcher`" @click="toggleExpand">
      <icon v-if="hasChildren" :type="expanded ? 'caret-down' : 'caret-right'"></icon>
    </span>
    <span v-if="checkable" :class="checkboxClasses" @click="handleSelect">
      <span :class="`${prefixCls}-tree-checkbox-inner`"></span>
    </span>
    <span :class="titleClasses" @click="handleSelect">
      {{ node.title }}
    </span>
    <ul v-if="hasChildren && expanded" :class="`${prefixCls}-tree-child-list`">
      <tree-node
        v-for="child in node.children"
        :key="child.key || child.value"
        :node="child"
        :prefix-cls="prefixCls"
        :multiple="multiple"
        :checkable="checkable"
        :selected-values="selectedValues"
        :default-expand-all="defaultExpandAll"
        :search-text="searchText"
        @select="onChildSelect"
      />
    </ul>
  </li>
</template>

<script>
  import Icon from '../icon'

  export default {
    name: 'tree-node',
    props: {
      node: {
        type: Object,
        required: true
      },
      prefixCls: {
        type: String,
        default: 'ant-select'
      },
      multiple: {
        type: Boolean,
        default: false
      },
      checkable: {
        type: Boolean,
        default: false
      },
      selectedValues: {
        type: Array,
        default: () => []
      },
      defaultExpandAll: {
        type: Boolean,
        default: false
      },
      searchText: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        expanded: this.defaultExpandAll
      }
    },
    computed: {
      hasChildren () {
        return this.node.children && this.node.children.length > 0
      },
      isSelected () {
        return this.selectedValues.indexOf(this.node.value) > -1
      },
      nodeClasses () {
        return [
          `${this.prefixCls}-tree-node`,
          {
            [`${this.prefixCls}-tree-node-selected`]: this.isSelected,
            [`${this.prefixCls}-tree-node-disabled`]: this.node.disabled,
            [`${this.prefixCls}-tree-node-expanded`]: this.expanded
          }
        ]
      },
      titleClasses () {
        return [
          `${this.prefixCls}-tree-node-title`,
          {
            [`${this.prefixCls}-tree-node-title-selected`]: this.isSelected,
            [`${this.prefixCls}-tree-node-title-disabled`]: this.node.disabled
          }
        ]
      },
      checkboxClasses () {
        return [
          `${this.prefixCls}-tree-checkbox`,
          {
            [`${this.prefixCls}-tree-checkbox-checked`]: this.isSelected,
            [`${this.prefixCls}-tree-checkbox-disabled`]: this.node.disabled
          }
        ]
      }
    },
    methods: {
      toggleExpand () {
        this.expanded = !this.expanded
      },
      handleSelect () {
        if (this.node.disabled) return
        this.$emit('select', this.node)
      },
      onChildSelect (node) {
        this.$emit('select', node)
      }
    },
    components: {
      Icon
    }
  }
</script>
