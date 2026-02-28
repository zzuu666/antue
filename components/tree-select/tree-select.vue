<template>
  <div :class="wrapClasses" v-clickoutside="handleClose">
    <div :class="selectorClasses" @click="toggleDropdown" ref="selector">
      <div v-if="multiple || treeCheckable" :class="`${prefixCls}-selection__rendered`">
        <template v-if="selectedLabels.length">
          <span
            v-for="item in selectedLabels"
            :key="item.value"
            :class="`${prefixCls}-selection__choice`"
          >
            <span :class="`${prefixCls}-selection__choice__content`">{{ item.title }}</span>
            <span :class="`${prefixCls}-selection__choice__remove`" @click.stop="removeSelected(item.value)">
              <icon type="cross"></icon>
            </span>
          </span>
        </template>
        <span v-if="!selectedLabels.length" :class="`${prefixCls}-selection__placeholder`">{{ placeholder }}</span>
      </div>
      <div v-else :class="`${prefixCls}-selection__rendered`">
        <span v-if="selectedLabel" :class="`${prefixCls}-selection-selected-value`">{{ selectedLabel }}</span>
        <span v-else :class="`${prefixCls}-selection__placeholder`">{{ placeholder }}</span>
      </div>
      <span v-if="allowClear && hasValue" :class="`${prefixCls}-selection__clear`" @click.stop="handleClear">
        <icon type="cross-circle"></icon>
      </span>
      <span :class="`${prefixCls}-arrow`">
        <icon type="down"></icon>
      </span>
    </div>
    <transition name="ant-select-dropdown-slide-up">
      <div v-show="visible" :class="dropdownClasses" :style="dropdownStyle">
        <div v-if="showSearch" :class="`${prefixCls}-dropdown-search`">
          <div :class="`${prefixCls}-search ${prefixCls}-search--dropdown`">
            <input
              ref="searchInput"
              :value="searchText"
              :class="`${prefixCls}-search__field`"
              placeholder="请输入搜索内容"
              @input="handleSearchInput"
            >
          </div>
        </div>
        <div :class="`${prefixCls}-tree-dropdown`">
          <ul :class="`${prefixCls}-tree-list`">
            <tree-node
              v-for="node in filteredTreeData"
              :key="node.key || node.value"
              :node="node"
              :prefix-cls="prefixCls"
              :multiple="multiple || treeCheckable"
              :checkable="treeCheckable"
              :selected-values="selectedArray"
              :default-expand-all="treeDefaultExpandAll"
              :search-text="searchText"
              @select="handleSelect"
            />
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Icon from '../icon'
  import TreeNode from './tree-node'
  import { oneOf } from '../_util/proptype'

  const clickoutside = {
    bind (el, binding) {
      el._clickOutside = (e) => {
        if (!el.contains(e.target)) {
          binding.value()
        }
      }
      document.addEventListener('click', el._clickOutside)
    },
    unbind (el) {
      document.removeEventListener('click', el._clickOutside)
    }
  }

  function flattenTree (nodes) {
    let result = []
    nodes.forEach(node => {
      result.push({ title: node.title, value: node.value, key: node.key || node.value })
      if (node.children && node.children.length) {
        result = result.concat(flattenTree(node.children))
      }
    })
    return result
  }

  function filterTree (nodes, text) {
    if (!text) return nodes
    const lower = text.toLowerCase()
    return nodes.reduce((acc, node) => {
      const match = node.title && node.title.toLowerCase().indexOf(lower) > -1
      const filteredChildren = node.children ? filterTree(node.children, text) : []
      if (match || filteredChildren.length) {
        acc.push(Object.assign({}, node, { children: filteredChildren }))
      }
      return acc
    }, [])
  }

  export default {
    name: 'atu-tree-select',
    directives: { clickoutside },
    props: {
      treeData: {
        type: Array,
        default: () => []
      },
      value: {
        type: [String, Array],
        default: undefined
      },
      multiple: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      allowClear: {
        type: Boolean,
        default: false
      },
      showSearch: {
        type: Boolean,
        default: false
      },
      treeCheckable: {
        type: Boolean,
        default: false
      },
      treeDefaultExpandAll: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'default',
        validator (value) {
          return oneOf(value, ['large', 'default', 'small'])
        }
      },
      prefixCls: {
        type: String,
        default: 'ant-select'
      }
    },
    data () {
      return {
        visible: false,
        searchText: '',
        selectedValue: this.multiple || this.treeCheckable
          ? (this.value || [])
          : this.value
      }
    },
    computed: {
      isMultiple () {
        return this.multiple || this.treeCheckable
      },
      selectedArray () {
        if (this.isMultiple) {
          return Array.isArray(this.selectedValue) ? this.selectedValue : []
        }
        return this.selectedValue !== undefined && this.selectedValue !== null
          ? [this.selectedValue]
          : []
      },
      wrapClasses () {
        return [
          this.prefixCls,
          `${this.prefixCls}-tree`,
          {
            [`${this.prefixCls}-open`]: this.visible,
            [`${this.prefixCls}-disabled`]: this.disabled,
            [`${this.prefixCls}-enabled`]: !this.disabled,
            [`${this.prefixCls}-lg`]: this.size === 'large',
            [`${this.prefixCls}-sm`]: this.size === 'small'
          }
        ]
      },
      selectorClasses () {
        return [
          `${this.prefixCls}-selection`,
          this.isMultiple ? `${this.prefixCls}-selection--multiple` : `${this.prefixCls}-selection--single`
        ]
      },
      dropdownClasses () {
        return [
          `${this.prefixCls}-dropdown`,
          `${this.prefixCls}-dropdown--below`,
          `${this.prefixCls}-tree-dropdown`
        ]
      },
      dropdownStyle () {
        return { width: '100%' }
      },
      flatNodes () {
        return flattenTree(this.treeData)
      },
      filteredTreeData () {
        return filterTree(this.treeData, this.searchText)
      },
      selectedLabel () {
        if (this.isMultiple) return ''
        const node = this.flatNodes.find(n => n.value === this.selectedValue)
        return node ? node.title : ''
      },
      selectedLabels () {
        if (!this.isMultiple || !Array.isArray(this.selectedValue)) return []
        return this.selectedValue.map(val => {
          const node = this.flatNodes.find(n => n.value === val)
          return node || { title: String(val), value: val }
        })
      },
      hasValue () {
        if (this.isMultiple) return this.selectedValue && this.selectedValue.length > 0
        return this.selectedValue !== undefined && this.selectedValue !== null && this.selectedValue !== ''
      }
    },
    watch: {
      value (val) {
        this.selectedValue = val
      }
    },
    methods: {
      toggleDropdown () {
        if (this.disabled) return
        this.visible = !this.visible
        if (this.visible && this.showSearch) {
          this.$nextTick(() => {
            this.$refs.searchInput && this.$refs.searchInput.focus()
          })
        }
      },
      handleClose () {
        this.visible = false
        this.searchText = ''
      },
      handleSelect (node) {
        if (node.disabled) return
        if (this.isMultiple) {
          const arr = [].concat(this.selectedValue || [])
          const idx = arr.indexOf(node.value)
          if (idx > -1) {
            arr.splice(idx, 1)
          } else {
            arr.push(node.value)
          }
          this.selectedValue = arr
          this.$emit('input', arr)
          this.$emit('change', arr)
          this.$emit('select', node.value, node)
        } else {
          this.selectedValue = node.value
          this.$emit('input', node.value)
          this.$emit('change', node.value)
          this.$emit('select', node.value, node)
          this.visible = false
          this.searchText = ''
        }
      },
      removeSelected (value) {
        if (this.disabled) return
        const arr = this.selectedValue.filter(v => v !== value)
        this.selectedValue = arr
        this.$emit('input', arr)
        this.$emit('change', arr)
      },
      handleClear () {
        if (this.isMultiple) {
          this.selectedValue = []
          this.$emit('input', [])
          this.$emit('change', [])
        } else {
          this.selectedValue = undefined
          this.$emit('input', undefined)
          this.$emit('change', undefined)
        }
      },
      handleSearchInput (e) {
        this.searchText = e.target.value
      }
    },
    components: {
      Icon,
      TreeNode
    }
  }
</script>
