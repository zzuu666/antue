import TooltipMixin from '../_mixin/tooltip'

export default {
  name: 'popover',
  mixins: [TooltipMixin],
  props: {
    prefixCls: {
      type: String,
      default: 'ant-popover'
    },
    content: {
      type: String
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
          'class': ['ant-popover-inner']
        }, [
          h('div', {
            'class': ['ant-popover-title']
          }, data.$slots.title || data.title),
          h('div', {
            'class': ['ant-popover-inner-content']
          }, data.$slots.content || data.content)
        ])
      }
    }
  }
}
