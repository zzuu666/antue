<template>
  <component
    :is="isButton ? 'atu-button' : 'span'"
    :type="type"
    :disabled="disabled">
    <atu-icon v-if="isButton" type="down" />
    <slot v-else></slot>
    <atu-transition type="slide" :motion="motion">
      <div
        :class="classes"
        ref="overlay"
        v-show="visible">  
        <slot name="overlay"></slot>
      </div>
    </atu-transition>
  </component>
</template>

<script>
import AtuTransition from '../transition'
import AtuButton from '../button'
import AtuIcon from '../icon'
import Popper from '../_mixin/popper'
import { oneOf } from '../_util/proptype'

export default {
  name: 'dropdown',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-dropdown'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isButton: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: 'hover',
      validator (value) {
        return oneOf(value, ['hover', 'click'])
      }
    },
    type: {
      type: String,
      validator (value) {
        return oneOf(value, ['primary', 'dashed', 'danger', 'default'])
      }
    }
  },
  data () {
    return {
      timer: null,
      popperOffset: '0, 5px'
    }
  },
  mixins: [Popper],
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        prefixCls
      ].concat(this.placementCls)
    },
    motion () {
      return this.placement.indexOf('top') > -1 ? 'down' : 'up'
    }
  },
  components: {
    AtuTransition,
    AtuButton,
    AtuIcon
  },
  methods: {
    show () {
      clearTimeout(this.timer)
      this.visible = true
    },
    hide () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.visible = false
      }, 150)
    },
    toggle () {
      this.visible = !this.visible
    },
    /**
     * 点击其他空白位置需要关闭浮层
     * @param e
     */
    clickDocument (e) {
      if (!this.visible ||
        !this.$el ||
        !this.reference ||
        !this.popper ||
        this.$el.contains(e.target) ||
        this.reference.contains(e.target) ||
        this.popper.contains(e.target)) return
      this.hide()
    }
  },
  beforeMount () {
    this.$slots.overlay = this.$slots.overlay.map(vnode => {
      vnode.componentOptions.propsData = {
        prefixCls: `${this.prefixCls}-menu`,
        selectable: false
      }
      return vnode
    })
  },
  mounted () {
    const overlay = this.$refs.overlay
    const dropdown = this.isButton ? this.$el : this.$slots.default[0].elm

    if (this.trigger === 'click') {
      dropdown.addEventListener('click', this.toggle)
      document.addEventListener('click', this.clickDocument)
    } else {
      dropdown.addEventListener('mouseenter', this.show)
      dropdown.addEventListener('mouseleave', this.hide)
      overlay.addEventListener('mouseenter', this.show)
      overlay.addEventListener('mouseleave', this.hide)
    }
    overlay.addEventListener('click', this.hide)

    this.popper = overlay
    this.reference = dropdown
  }
}
</script>
