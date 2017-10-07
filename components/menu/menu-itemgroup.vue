<template>
  <li
    :class="`${prefixCls}-item-group`">
    <div
      :class="`${prefixCls}-item-group-title`"
      v-if="title"
      v-text="title"></div>
    <ul
      :class="`${prefixCls}-item-group-list`"
      v-if="$slots.default">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'menuItemGroup',
  props: {
    title: String,
    prefixCls: {
      type: String,
      default: 'ant-menu'
    }
  },
  computed: {
    mode () {
      return this.$parent.mode
    },
    multiple () {
      return this.$parent.multiple
    },
    level () {
      return this.$parent.level
    },
    inlineIndent () {
      return this.$parent.inlineIndent
    },
    path () {
      return this.$parent.path.slice()
    },
    selected () {
      return this.$parent.selected
    },
    handleClickItem () {
      return this.$parent.handleClickItem
    },
    handleSelect () {
      return this.$parent.handleSelect
    },
    handleDeSelect () {
      return this.$parent.handleDeSelect
    },
    handleOpenChange () {
      return this.$parent.handleOpenChange
    }
  }
}
</script>
