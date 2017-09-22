<template>
  <ul
    :class="[
      prefixCls,
      `${prefixCls}-root`,
      `${prefixCls}-${theme}`,
      `${prefixCls}-${mode}`
    ]">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      prefixCls: 'ant-menu',
      level: 0,
      path: [],
      selected: [],
      open: []
    }
  },
  methods: {
    handleClickItem (e, index, path) {
      this.mode !== 'inline' && (this.open = [])
      this.$emit('click', e, index, path)
    },
    handleSelect (e, index) {
      if (!this.selectable) return
      this.selected = this.multiple ? this.selected.concat([index]) : [index]
      this.$emit('select', e, index, this.selected)
    },
    handleOpenChange (index, isIncrease) {
      let changed = false
      const increaseOpen = () => {
        const pos = this.open.indexOf(index)
        pos < 0 && this.open.push(index) && (changed = true)
      }
      const deleteOpen = () => {
        const pos = this.open.indexOf(index)
        pos > -1 && this.open.splice(pos, 1) && (changed = true)
      }
      isIncrease ? increaseOpen() : deleteOpen()
      changed && this.$emit('open-change', this.open)
    }
  },
  created () {
    function mergeDefaultAndSetting (def, setting) {
      const arr = setting.length ? setting.slice()
        : def.length ? def.slice() : []
      return arr
    }
    this.selected = mergeDefaultAndSetting(this.defaultSelectedKeys, this.selectedKeys)
    this.open = mergeDefaultAndSetting(this.defaultOpenKeys, this.openKeys)
  },
  props: {
    theme: {
      type: String,
      default: 'light'
    },
    mode: {
      type: String,
      default: 'vertical'
    },
    selectedKeys: {
      type: Array,
      default () {
        return []
      }
    },
    defaultSelectedKeys: {
      type: Array,
      default () {
        return []
      }
    },
    openKeys: {
      type: Array,
      default () {
        return []
      }
    },
    defaultOpenKeys: {
      type: Array,
      default () {
        return []
      }
    },
    inlineIndent: {
      type: Number,
      default: 24
    },
    multiple: {
      type: Boolean,
      default: false
    },
    inlineCollapsed: Boolean,
    selectable: {
      type: Boolean,
      default: true
    }
  }
}
</script>

