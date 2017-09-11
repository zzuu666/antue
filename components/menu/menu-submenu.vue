<template>
  <li
    :class="[
      `${prefixCls}-submenu`,
      `${prefixCls}-submenu-${mode}`,
      disabled ? `${prefixCls}-submenu-disabled` : ``,
      open ? `${prefixCls}-submenu-open` : ``,
      open ? `${prefixCls}-submenu-active` : ``
    ]"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave">
    <span :class="`${prefixCls}-submenu-title`" :style="style" v-if="$slots.title">
      <slot name="title"></slot>
    </span>
    <transition :name="animitionName" v-if="$slots.default">
      <ul
        :class="[
          prefixCls,
          `${prefixCls}-sub`,
          `${prefixCls}-${subMode}`
        ]"
        v-show="open">
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  data () {
    return {
      prefixCls: 'ant-menu'
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    index: [String, Number]
  },
  computed: {
    mode () {
      return this.$parent.mode
    },
    subMode () {
      return this.$parent.mode === 'horizontal' ? 'vertical' : this.$parent.mode
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
    open () {
      return this.$parent.open.indexOf(this.index) > -1
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
    },
    animitionName () {
      return this.mode === 'horizontal' ? 'slide-up' : ''
    }
  },
  methods: {
    handleMouseenter () {
      if (this.mode === 'inline') return
      this.timer && clearTimeout(this.timer)
      this.$parent.handleOpenChange(this.index, true)
    },
    handleMouseleave () {
      if (this.mode === 'inline') return
      this.timer = setTimeout(() => {
        this.$parent.handleOpenChange(this.index, false)
      }, 100)
    },
    handleClick () {
      if (this.mode === 'horizontal') return
      this.$parent.handleOpenChange(this.index)
    }
  }
}
</script>


