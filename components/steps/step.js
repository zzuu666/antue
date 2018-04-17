import AtuIcon from '../icon'

export default {
  name: 'step',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-steps'
    },
    description: String,
    title: String,
    icon: String,
    status: String
  },
  data () {
    return {
      adjustMarginRigh: 0,
      defaultStatus: '',
      itemWidth: '',
      stepNumber: undefined,
      isNextError: false
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-item`,
        `${prefixCls}-status-${this.currentStatus}`,
        {
          [`${prefixCls}-custom`]: !!this.$slots.icon,
          [`${prefixCls}-next-error`]: this.isNextError
        }
      ]
    },
    iconClasses () {
      const prefixCls = this.prefixCls
      const iconPrefix = this.iconPrefix
      return [
        `${prefixCls}-icon`,
        `${iconPrefix}icon`,
        {
          [`${iconPrefix}icon-${this.icon}`]: this.icon,
          [`${iconPrefix}icon-check`]: !this.icon && this.currentStatus === 'finish',
          [`${iconPrefix}icon-cross`]: !this.icon && this.currentStatus === 'error'
        }
      ]
    },
    progressDot () {
      return this.$parent.progressDot
    },
    iconPrefix () {
      return this.$parent.iconPrefix
    },
    parentStatus () {
      return this.$parent.status
    },
    currentStatus () {
      return this.status || this.defaultStatus
    }
  },
  components: {
    AtuIcon
  },
  mounted () {
    this.calcItemWidth()
  },
  methods: {
    calcItemWidth () {
      const parentNode = this.$el.parentNode
      const brotherChildNodes = parentNode.childNodes
      const lastStepOffsetWidth = (parentNode.lastChild.offsetWidth || 0) + 1
      const validChildNodes = Array.prototype.slice.call(brotherChildNodes).filter(node => node.nodeType === 1)
      const lastIndex = validChildNodes.length - 1
      const isLastChild = validChildNodes[lastIndex] === this.$el
      const direction = this.$parent.direction
      const index = validChildNodes.indexOf(this.$el)
      this.stepNumber = index + 1
      this.itemWidth = (direction === 'vertical' || isLastChild) ? '' : `${100 / lastIndex}%`
      this.adjustMarginRight = (direction === 'vertical' || isLastChild) ? 0 : -Math.round(lastStepOffsetWidth / lastIndex + 1)
      this.isNextError = (this.parentStatus === 'error' && index === this.$parent.current - 1)
      this.defaultStatus = index === this.$parent.current ? this.parentStatus : index < this.$parent.current ? 'finish' : 'wait'
    }
  },
  render (h) {
    const prefixCls = this.prefixCls

    const renderIcon = () => {
      const iconDot = <span class={`${prefixCls}-icon-dot`}></span>
      if (this.progressDot) {
        return <span class={`${prefixCls}-icon`}>{iconDot}</span>
      } else if (this.$slots.icon) {
        return <span class={`${prefixCls}-icon`}>{this.$slots.icon}</span>
      } else if (this.icon || this.currentStatus === 'finish' || this.currentStatus === 'error') {
        return <span class={this.iconClasses} />
      } else {
        return <span class={`${prefixCls}-icon`}>{this.stepNumber}</span>
      }
    }

    return (
      <div class={this.classes} style={{ width: this.itemWidth, marginRight: `${this.adjustMarginRight}px` }}>
        <div class={`${prefixCls}-tail`} style={{ paddingRight: `${-this.adjustMarginRight}px` }}><i /></div>
        <div class={`${prefixCls}-step`}>
          <div class={`${prefixCls}-head`}>
            <div class={`${prefixCls}-head-inner`}>{renderIcon()}</div>
          </div>
          <div class={`${prefixCls}-main`}>
            <div class={`${prefixCls}-title`}>
              {this.$slots.title || this.title}
            </div>
            {this.description ? <div class={`${prefixCls}-description`}>{this.description}</div> : ''}
          </div>
        </div>
      </div>
    )
  }
}
