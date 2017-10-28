import AtuRadio from './radio'

export default {
  functional: true,
  render (h, ctx) {
    ctx.props.prefixCls = ctx.props.prefixCls || 'ant-radio-button'
    return h(AtuRadio, ctx, ctx.children)
  }
}
