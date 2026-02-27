<template>
  <span :class="`${prefixCls}-filter-icon-wrapper`">
    <span
      :class="filterIconClass"
      @click.stop="toggleDropdown"
    >
      <icon type="filter"></icon>
    </span>
    <div v-if="visible" :class="`${prefixCls}-filter-dropdown`">
      <ul :class="`${prefixCls}-filter-dropdown-menu`">
        <li
          v-for="filter in filters"
          :key="filter.value"
          :class="getItemClass(filter)"
          @click="handleSelect(filter)"
        >
          <checkbox
            :value="isSelected(filter)"
            :prefixCls="'ant-checkbox'"
          ></checkbox>
          <span>{{ filter.text }}</span>
        </li>
      </ul>
      <div :class="`${prefixCls}-filter-dropdown-btns`">
        <a :class="`${prefixCls}-filter-dropdown-link confirm`" @click="handleConfirm">确定</a>
        <a :class="`${prefixCls}-filter-dropdown-link reset`" @click="handleReset">重置</a>
      </div>
    </div>
  </span>
</template>

<script>
  import Checkbox from '../checkbox/checkbox'
  import Icon from '../icon'

  export default {
    name: 'filter-dropdown',
    props: {
      filters: {
        type: Array,
        default: () => []
      },
      prefixCls: {
        type: String,
        default: 'ant-table'
      },
      selectedKeys: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        visible: false,
        checkedKeys: [].concat(this.selectedKeys)
      }
    },
    computed: {
      filterIconClass () {
        return [
          `${this.prefixCls}-filter-icon`,
          {
            [`${this.prefixCls}-filter-icon-active`]: this.selectedKeys && this.selectedKeys.length > 0
          }
        ]
      }
    },
    watch: {
      selectedKeys (val) {
        this.checkedKeys = [].concat(val)
      }
    },
    methods: {
      toggleDropdown () {
        this.visible = !this.visible
      },
      isSelected (filter) {
        return this.checkedKeys.indexOf(filter.value) > -1
      },
      getItemClass (filter) {
        return [
          `${this.prefixCls}-filter-dropdown-menu-item`,
          {
            [`${this.prefixCls}-filter-dropdown-menu-item-selected`]: this.isSelected(filter)
          }
        ]
      },
      handleSelect (filter) {
        const idx = this.checkedKeys.indexOf(filter.value)
        if (idx > -1) {
          this.checkedKeys.splice(idx, 1)
        } else {
          this.checkedKeys.push(filter.value)
        }
      },
      handleConfirm () {
        this.$emit('confirm', [].concat(this.checkedKeys))
        this.visible = false
      },
      handleReset () {
        this.checkedKeys = []
        this.$emit('reset')
        this.visible = false
      }
    },
    mounted () {
      this._handleDocumentClick = (e) => {
        if (!this.$el.contains(e.target)) {
          this.visible = false
        }
      }
      document.addEventListener('click', this._handleDocumentClick)
    },
    beforeDestroy () {
      document.removeEventListener('click', this._handleDocumentClick)
    },
    components: {
      Checkbox,
      Icon
    }
  }
</script>
