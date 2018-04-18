<template>
  <li
    :aria-expanded="isOpen"
    aria-haspopup="true"
    :class="[
      `${prefixCls}-submenu`,
      `${prefixCls}-submenu-${mode}`,
      disabled ? `${prefixCls}-submenu-disabled` : ``,
      isOpen ? `${prefixCls}-submenu-open` : ``
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <div
      :class="`${prefixCls}-submenu-title`"
      @click="handleClick"
      :style="style"
      v-if="$slots.title || title">
      <slot name="title">{{title}}</slot>
    </div>
    <atu-transition :type="animition.type" :motion="animition.motion" v-if="$slots.default">
      <ul
        :class="[
          prefixCls,
          `${prefixCls}-sub`,
          `${prefixCls}-${subMode}`
        ]"
        v-show="isOpen">
        <slot></slot>
      </ul>
    </atu-transition>
  </li>
</template>

<script>
import { switchcase } from '../_util/switchcase'
import AtuTransition from '../transition'

export default {
  name: 'menuSubmenu',
  inject: ['menuRoot'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    index: [String, Number],
    title: String
  },
  data () {
    return {
      timer: null,
      prefixCls: this.menuRoot.prefixCls
    }
  },
  computed: {
    animition () {
      return switchcase({
        'horizontal': {
          type: 'slide',
          motion: 'up'
        },
        'vertical': {
          type: 'zoom',
          motion: 'big'
        },
        'inline': {
          type: 'collapse'
        }
      })('')(this.mode)
    },
    path () {
      return this.$parent.path.slice().concat(this.index)
    },
    style () {
      const res = {}
      if (this.mode === 'inline' && this.level > 0) {
        res['padding-left'] = this.level * this.inlineIndent + 'px'
      }
      return res
    },
    // From parent
    mode () {
      return this.$parent.mode
    },
    multiple () {
      return this.$parent.multiple
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
    isOpen () {
      return this.$parent.open.indexOf(this.index) > -1
    },
    open () {
      return this.$parent.open
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
  },
  components: {
    AtuTransition
  },
  methods: {
    handleClick () {
      if (this.mode !== 'inline') return
      this.$parent.handleOpenChange(this.index, !this.isOpen)
    },
    handleMouseEnter (e) {
      if (this.mode === 'inline') return
      this.timer && clearTimeout(this.timer)
      this.$parent.handleOpenChange(this.index, true)
    },
    handleMouseLeave (e) {
      if (this.mode === 'inline') return
      this.timer = setTimeout(() => {
        this.$parent.handleOpenChange(this.index, false)
      }, 100)
    }
  }
}
</script>
