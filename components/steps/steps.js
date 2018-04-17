export default {
  name: 'steps',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-steps'
    },
    current: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    iconPrefix: {
      type: String,
      default: 'ant'
    },
    progressDot: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    status: {
      type: String,
      default: 'process'
    }
  },
  data () {
    return {
      lastStepOffsetWidth: 0
    }
  },
  methods: {
    calcStepOffsetWidth (dom) {
      const lastStepOffsetWidth = (dom.lastChild.offsetWidth || 0) + 1
      this.lastStepOffsetWidth = lastStepOffsetWidth
    },
    updateChildern () {
      // const lastIndex = this.$children.length - 1
      this.$children.forEach((component, index) => {
        // const itemWidth = (this.direction === 'vertical' || index === lastIndex) ? '' : `${100 / lastIndex}%`
        // const adjustMarginRight = (this.direction === 'vertical' || index === lastIndex) ? 0 : -Math.round(this.lastStepOffsetWidth / lastIndex + 1)
        // component.itemWidth = itemWidth
        // component.adjustMarginRight = adjustMarginRight
        // component.stepNumber = index + 1

        // if (this.status === 'error' && index === this.current - 1) {
        //   component.isNextError = true
        // } else {
        //   component.isNextError = false
        // }

        // if (index === this.current) {
        //   component.defaultStatus = this.status
        // } else if (index < this.current) {
        //   component.defaultStatus = 'finish'
        // } else {
        //   component.defaultStatus = 'wait'
        // }
      })
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      const adjustedlabelPlacement = this.progressDot ? 'vertical' : 'horizontal'
      return [
        prefixCls,
        `${prefixCls}-${this.direction}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-dot`]: this.progressDot,
          [`${prefixCls}-label-${adjustedlabelPlacement}`]: this.direction === 'horizontal'
        }
      ]
    }
  },
  mounted () {
    // this.calcStepOffsetWidth(this.$el)
    // this.updateChildern()
  },
  beforeUpdate () {
    console.log('steps before update')
  },
  render (h) {
    // const step = this.$slots.default.filter(vnode => vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'step')
    // const lastIndex = step.length - 1
    return (
      <div class={this.classes}>
        {
          this.$slots.default
        }
      </div>
    )
  }
}

// step.map((vnode, index) => {
//   const props = vnode.componentOptions.propsData
//   const itemWidth = (this.direction === 'vertical' || index === lastIndex) ? '' : `${100 / lastIndex}%`
//   const adjustMarginRight = (this.direction === 'vertical' || index === lastIndex) ? 0 : -Math.round(this.lastStepOffsetWidth / lastIndex + 1)
//   props.stepNumber = index + 1
//   props.itemWidth = itemWidth
//   props.adjustMarginRight = adjustMarginRight
//   if (this.status === 'error' && index === this.current - 1) {
//     vnode.data.staticClass += `${this.prefixCls}-next-error`
//   }

//   if (!props.status) {
//     if (index === this.current) {
//       props.status = this.status
//     } else if (index < this.current) {
//       props.status = 'finish'
//     } else {
//       props.status = 'wait'
//     }
//   }

//   return vnode
// })
