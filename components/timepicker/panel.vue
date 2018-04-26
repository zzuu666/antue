
<script>
import PickerHeader from './header'
import PickerCombobox from './combobox'

const generateOptions = (length, disabledOptions, hideDisabledOptions, step = 1) => {
  const arr = []
  for (let value = 0; value < length; value += step) {
    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
      arr.push(value)
    }
  }
  return arr
}

export default {
  props: {
    prefixCls: {
      type: String,
      default: 'ant-time-picker-panel'
    }
  },
  components: {
    PickerHeader,
    PickerCombobox
  },
  render () {
    const hourOptions = generateOptions(24)
    const minuteOptions = generateOptions(60)
    const secondOptions = generateOptions(60)

    return (
      <div class={ `${this.prefixCls}-inner` }>
        <PickerHeader prefixCls={this.prefixCls} />
        <PickerCombobox
          prefixCls={this.prefixCls}
          hourOptions={ hourOptions }
          minuteOptions={ minuteOptions }
          secondOptions={ secondOptions } />
      </div>
    )
  }
}
</script>
