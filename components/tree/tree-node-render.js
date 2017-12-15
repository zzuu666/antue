export default {
  name: 'TreeNodeRender',
  functional: true,
  props: {
    render: Function,
    data: Object,
    node: Array
  },
  render: (createElement, ctx) => {
    const params = {
      root: ctx.props.node[0],
      node: ctx.props.node[1],
      data: ctx.props.data
    }
    return ctx.props.render(createElement, params)
  }
}
