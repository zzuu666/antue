<template>
  <li
    :class="`${perfixCls}-item-group`">
    <div
      :class="`${perfixCls}-item-group-title`"
      :style="style"
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
    style () {
      let res = {}
      if (this.mode === 'inline' && this.level > 1) {
        res['padding-left'] = this.level * this.inlineIndent + 8 + 'px'
      }
      return res
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
