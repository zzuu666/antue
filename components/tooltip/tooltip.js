import TooltipMixin from '../_mixin/tooltip'

export default {
  name: 'tooltip',
  mixins: [TooltipMixin],
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tooltip'
    }
  },
  components: {
    /**
     * 定义函数化组件用于插入到popperVM
     * 实际浮层显示的内容
     */
    AtuTooltipContent: {
      functional: true,

      render (h, context) {
        const data = context.data
        return h('div', {
          'class': ['ant-tooltip-inner']
        }, data.$slots.title || data.title)
      }
    }
  }
}
