<template>
  <li
    role="menuitem"
    :aria-selected="selected"
    :aria-disabled="disabled"
    :class="classes"
    :style="style"
    @click="handleClick"
    @keydown.enter="handleKeyDown">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'menuItem',
  inject: ['menuRoot'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    index: [String, Number]
  },
  computed: {
    classes () {
      const prefixCls = this.menuRoot.prefixCls
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-disabled`]: this.disabled,
          [`${prefixCls}-item-selected`]: this.selected
        }
      ]
    },
    style () {
      const res = {}
      if (this.mode === 'inline' && this.level > 0) {
        res['padding-left'] = this.level * this.inlineIndent + 'px'
      }
      return res
    },
    // From parent
    multiple () {
      return this.$parent.multiple
    },
    mode () {
      return this.$parent.mode
    },
    selected () {
      return this.$parent.selected.indexOf(this.index) > -1
    },
    level () {
      return this.$parent.level + 1
    },
    path () {
      return this.$parent.path.slice().concat(this.index)
    },
    inlineIndent () {
      return this.$parent.inlineIndent
    }
  },
  methods: {
    handleClick (e) {
      const info = {
        e,
        vm: this,
        path: this.path,
        index: this.index
      }
      this.$parent.handleClickItem(info)
      this.multiple ? this.selected ? this.$parent.handleDeSelect(info) : this.$parent.handleSelect(info)
        : !this.selected && this.$parent.handleSelect(info)
    },
    handleKeyDown (e) {
      this.handleClick(e)
    }
  }
}
</script>
