<template>
  <li
    :class="`${perfixCls}-item-group`">
    <div
      :class="`${perfixCls}-item-group-title`"
      v-if="title"
      v-text="title"></div>
    <ul
      :class="`${perfixCls}-item-group-list`"
      v-if="$slots.default">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  data () {
    return {
      perfixCls: 'ant-menu'
    }
  },
  props: {
    title: String
  },
  computed: {
    mode () {
      return this.$parent.mode
    },
    level () {
      return this.$parent.level
    },
    inlineIndent () {
      return this.$parent.inlineIndent
    },
    path () {
      let path = this.$parent.path.slice()
      return path
    },
    selected () {
      return this.$parent.selected
    },
    handleClickItem () {
      return this.$parent.handleClickItem
    },
    handleSelect () {
      return this.$parent.handleSelect
    }
  }
}
</script>
