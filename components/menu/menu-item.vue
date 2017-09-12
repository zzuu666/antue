<template>
  <li
    :class="[
      prefixCls,
      disabled ? `${prefixCls}-disabled` : ``,
      selected ? `${prefixCls}-selected` : ``
    ]"
    :style="style"
    @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
export default {
  data () {
    return {
      prefixCls: 'ant-menu-item'
    }
  },
  computed: {
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
      return this.$parent.path.slice().push(this.index)
    },
    inlineIndent () {
      return this.$parent.inlineIndent
    },
    style () {
      let res = {}
      if (this.mode === 'inline' && this.level > 0) {
        res['padding-left'] = this.level * this.inlineIndent + 'px'
      }
      return res
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    index: [String, Number]
  },
  methods: {
    handleClick (e) {
      this.$parent.handleClickItem(e, this.index, this.path)
      this.$parent.handleSelect(e, this.index)
    }
  }
}
</script>

