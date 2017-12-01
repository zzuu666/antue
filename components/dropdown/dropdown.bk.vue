<template>
  <div>
    <slot></slot>
    <atu-transition type="slide" motion="up">
      <div
        :class="classes"
        ref="overlay"
        v-show="visible">  
        <slot name="overlay"></slot>
      </div>
    </atu-transition>
  </div>
</template>

<script>
import AtuTransition from '../transition'
import AtuButton from '../button'
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
    trigger: {
      type: String,
      default: 'hover',
      validator (value) {
        return oneOf(value, ['hover', 'click'])
      }
    }
  },
  data () {
    return {
      timer: null
    }
  },
  mixins: [Popper],
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        prefixCls
      ].concat(this.placementCls)
    }
  },
  components: {
    AtuTransition,
    AtuButton
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
    const dropdown = this.$slots.default[0].elm

    if (this.trigger === 'click') {
      dropdown.addEventListener('click', this.toggle)
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
