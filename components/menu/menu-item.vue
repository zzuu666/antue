<template>
  <li
    :class="[
      prefixCls,
      disabled ? `${prefixCls}-disabled` : ``,
      selected ? `${prefixCls}-selected` : ``
    ]"
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
    selected () {
      return this.$parent.selected.indexOf(this.index) > -1
    },
    path () {
      return this.$parent.path.slice().push(this.index)
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

