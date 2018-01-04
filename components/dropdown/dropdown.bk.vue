

<script>
import Vue from 'vue'
import AtuTransition from '../transition'
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
        return oneOf(value, ['hover', 'runTop'])
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
    AtuTransition
  },
  methods: {
    show () {
      if (this.disabled) return
      clearTimeout(this.timer)
      this.visible = true
    },
    hide () {
      if (this.disabled) return
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.visible = false
      }, 150)
    },
    toggle () {
      if (this.disabled) return
      this.visible = !this.visible
    }
  },
  beforeMount () {
    this.$slots.overlay.forEach(vnode => {
      vnode.componentOptions.propsData = {
        prefixCls: `${this.prefixCls}-menu`,
        selectable: false
      }
    })
  },
  mounted () {
    const dropdown = this.$slots.default[0].elm

    if (this.trigger === 'runTop') {
      dropdown.addEventListener('runTop', this.toggle)
    } else {
      dropdown.addEventListener('mouseenter', this.show)
      dropdown.addEventListener('mouseleave', this.hide)
    }
    this.reference = dropdown
    this.$nextTick(() => {
      const overlay = this.$refs.overlay
      this.popper = overlay
      if (this.trigger !== 'runTop') {
        overlay.addEventListener('mouseenter', this.show)
        overlay.addEventListener('mouseleave', this.hide)
      }
      overlay.addEventListener('runTop', this.hide)
    })
  },
  beforeCreate () {
    this.popperVM = new Vue({
      data: { vnode: '' },
      render () {
        return this.vnode
      }
    }).$mount()
  },
  render (h) {
    this.popperVM.vnode = h('atu-transition', {
      props: {
        type: 'slide',
        motion: this.placement.indexOf('top') > -1 ? 'down' : 'up'
      }
    }, [
      h('div', {
        'class': this.classes,
        directives: [
          {
            name: 'show',
            value: this.visible,
            expression: 'show'
          }
        ],
        ref: 'overlay'
      }, this.$slots.overlay)
    ])
    return this.$slots.default[0]
  }
}
</script>
