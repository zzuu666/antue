<template>
  <ul
    aria-activedescendant
    role="menu"
    :class="classes">
    <slot></slot>
  </ul>
</template>

<script>
import { oneOf } from '../_util/proptype'
export default {
  name: 'menu',
  data () {
    return {
      level: 0,
      path: [],
      selected: [],
      open: []
    }
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-menu'
    },
    theme: {
      type: String,
      default: 'light',
      validator (value) {
        return oneOf(value, ['dark', 'light'])
      }
    },
    mode: {
      type: String,
      default: 'vertical',
      validator (value) {
        return oneOf(value, ['vertical', 'horizontal', 'inline'])
      }
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
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}`,
        `${prefixCls}-root`,
        `${prefixCls}-${this.theme}`,
        `${prefixCls}-${this.mode}`,
        {
          [`${prefixCls}-inline-collapsed`]: this.inlineCollapsed
        }
      ]
    }
  },
  methods: {
    handleClickItem (info) {
      this.mode !== 'inline' && (this.open = [])
      this.$emit('click', info)
    },
    handleSelect (info) {
      const { index } = info
      if (!this.selectable) return
      this.selected = this.multiple ? this.selected.concat([index]) : [index]
      info.selected = this.selected
      this.$emit('select', info)
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
    },
    handleDeSelect (info) {
      this.$emit('de-select', info)
    }
  },
  watch: {
    openKeys (value) {
      this.open = value.slice()
    },
    selectedKeys (value) {
      this.selected = value.slice()
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
  }
}
</script>

