<template>
  <li
    :class="[
      `${prefixCls}-submenu`,
      `${prefixCls}-submenu-${mode}`,
      disabled ? `${prefixCls}-submenu-disabled` : ``,
      open ? `${prefixCls}-submenu-open` : ``
    ]"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave">
    <span
      :class="`${prefixCls}-submenu-title`"
      @click="handleClick"
      :style="style"
      v-if="$slots.title">
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
import { switchcaseF } from '../_util/swtichcase'

export default {
  data () {
    return {
      prefixCls: 'ant-menu',
      timer: null
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
      return this.$parent.level + 1
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
      return switchcaseF({
        'horizontal': 'slide-up',
        'vertical': 'zoom-big',
        'inline': ''
      })('')(this.mode)
    }
  },
  methods: {
    handleMouseenter (e) {
      if (this.mode === 'inline') return
      this.timer && clearTimeout(this.timer)
      this.$parent.handleOpenChange(this.index, true)
    },
    handleMouseleave (e) {
      if (this.mode === 'inline') return
      this.timer = setTimeout(() => {
        this.$parent.handleOpenChange(this.index, false)
      }, 100)
    },
    handleClick () {
      if (this.mode !== 'inline') return
      this.$parent.handleOpenChange(this.index, !this.open)
    }
  }
}
</script>


