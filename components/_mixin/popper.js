import PopperJS from 'popper.js'

/**
 * 实际使用的位置和popper.js的位置映射表
 */
const placementMap = {
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
  topLeft: 'top-start',
  topRight: 'top-end',
  bottomLeft: 'bottom-start',
  bottomRight: 'bottom-end',
  leftTop: 'left-start',
  leftBottom: 'left-end',
  rightTop: 'right-start',
  rightBottom: 'right-end'
}
const popperMap = {
  'top': 'top',
  'left': 'left',
  'right': 'right',
  'bottom': 'bottom',
  'top-start': 'topLeft',
  'top-end': 'topRight',
  'bottom-start': 'bottomLeft',
  'bottom-end': 'bottomRight',
  'left-start': 'leftTop',
  'left-end': 'leftBottom',
  'right-start': 'rightTop',
  'right-end': 'rightBottom'
}

export default {
  props: {
    placement: {
      type: String,
      default: 'bottom'
    }
  },
  data () {
    return {
      placementMap,
      popperMap,
      popper: null,
      reference: null,
      visible: false,
      visibleArrow: false,
      currentPalcement: '',
      popperModifiers: {}
    }
  },
  watch: {
    visible (val) {
      if (val) {
        this.updatePopper()
      } else {
        this.destroyPopper()
      }
    }
  },
  computed: {
    placementCls () {
      return [`${this.prefixCls}-placement-${this.popperMap[this.currentPalcement]}`]
    }
  },
  created () {
    this.currentPalcement = this.placementMap[this.placement]
  },
  methods: {
    createPopper () {
      if (Object.keys(this.placementMap).indexOf(this.placement) === -1) return
      this.popper = this.popper || this.$refs.popper
      const options = Object.create(null)
      if (!this.popper || !this.reference) return
      if (this.visibleArrow) this.appendArrow(this.popper)
      document.body.appendChild(this.popper)
      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy()
      }
      options.placement = this.currentPalcement
      const defaultModifiers = {
        computeStyle: {
          gpuAcceleration: false
        }
      }
      options.modifiers = Object.assign({}, defaultModifiers, this.popperModifiers)
      options.onCreate = () => {
        this.currentPalcement = this.popper.getAttribute('x-placement')
        this.resetTransformOrigin()
        this.$nextTick(this.updatePopper)
      }
      options.onUpdate = () => {
        this.currentPalcement = this.popper.getAttribute('x-placement')
      }
      this.popperJS = new PopperJS(this.reference, this.popper, options)
    },
    updatePopper () {
      if (this.popperJS) {
        this.popperJS.update()
      } else {
        this.createPopper()
      }
    },
    doDestroy () {
      if (this.visible || !this.popperJS) return
      this.popperJS.destroy()
      this.popperJS = null
    },
    destroyPopper () {
      if (this.popperJS) {
        this.resetTransformOrigin()
      }
    },
    resetTransformOrigin () {
      const tfPlacementMap = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' }
      const placement = this.currentPalcement.split('-')[0]
      const origin = tfPlacementMap[placement]
      this.popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1
        ? `center ${origin}`
        : `${origin} center`
    },
    appendArrow (element) {
      let hash
      if (this.appended) {
        return
      }

      this.appended = true

      Object.keys(element.attributes).some((item) => {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name
          return true
        }
        return false
      })

      const arrow = document.createElement('div')

      if (hash) {
        arrow.setAttribute(hash, '')
      }
      arrow.className = `${this.prefixCls}-arrow`
      element.querySelector(`.${this.prefixCls}-content`).appendChild(arrow)
    }
  },
  beforeDestroy () {
    this.doDestroy()
    if (this.popper && this.popper.parentNode === document.body) {
      document.body.removeChild(this.popper)
    }
  }
}
