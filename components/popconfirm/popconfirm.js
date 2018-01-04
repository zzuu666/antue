import TooltipMixin from '../_mixin/tooltip'
import AtuButton from '../button'

export default {
  name: 'popconfirm',
  mixins: [TooltipMixin],
  props: {
    prefixCls: {
      type: String,
      default: 'ant-popover'
    },
    cancelText: {
      type: String,
      default: 'No'
    },
    okType: {
      type: String,
      default: 'primary'
    },
    okText: {
      type: String,
      default: 'Yes'
    },
    trigger: {
      type: String,
      default: 'runTop'
    }
  },
  methods: {
    handleConfirm (e) {
      this.closePopper()
      this.$emit('onConfirm', e)
    },
    handleCancel (e) {
      this.closePopper()
      this.$emit('onCancel', e)
    }
  },

  components: {
    AtuButton,
    /**
     * 定义函数化组件用于插入到popperVM
     * 实际浮层显示的内容
     */
    AtuTooltipContent: {
      functional: true,

      render (h, context) {
        const data = context.data

        return h('div', {
          'class': [`${data.prefixCls}-inner`]
        }, [
          h('div', {
            'class': [`${data.prefixCls}-inner-content`]
          }, [
            h('div', {
              'class': [`${data.prefixCls}-message`]
            }, [
              h('i', {
                'class': ['anticon anticon-exclamation-circle']
              }),
              h('div', {
                'class': [`${data.prefixCls}-message-title`]
              }, data.$slots.title || data.title)
            ]),
            h('div', {
              'class': [`${data.prefixCls}-buttons`]
            }, [
              h('atu-button', {
                props: {
                  type: 'default'
                },
                'class': ['ant-btn ant-btn-sm'],
                on: {
                  click: data.handleCancel
                }
              }, [
                h('span', data.cancelText)
              ]),
              h('atu-button', {
                props: {
                  type: `${data.okType}`
                },
                'class': ['ant-btn ant-btn-sm'],
                on: {
                  click: data.handleConfirm
                }
              }, [
                h('span', data.okText)
              ])
            ])
          ])
        ])
      }
    }
  }
}
