export default {
  name: 'render-cell',
  functional: true,
  props: {
    render: Function,
    row: Object,
    column: Object,
    index: Number
  },
  render: (h, ctx) => {
    const { render, row, column, index } = ctx.props
    const text = column.dataIndex ? row[column.dataIndex] : ''
    return render(h, text, row, index)
  }
}
