
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
    },
    allowEmpty: {
      type: Boolean,
      default: true
    },
    clearText: {
      type: String,
      default: 'clear'
    },
    defaultOpenValue: {
      type: Object
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledHours: {
      type: Function,
      default: () => []
    },
    disabledMinutes: {
      type: Function,
      default: (h) => []
    },
    disabledSeconds: {
      type: Function,
      default: (h, m) => []
    },
    hideDisabledOptions: {
      type: Boolean,
      default: false
    },
    isShow: Boolean,
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    use12Hours: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object
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

    const addon = () => {
      if (!this.$slots.default) {
        return null
      }
      return (
        <div class={ `${this.prefixCls}-addon` }>
          { this.$slots.default }
        </div>
      )
    }

    return (
      <div class={ `${this.prefixCls}-inner` }>
        <PickerHeader
          prefixCls={ this.prefixCls }
          allowEmpty={ this.allowEmpty }
          clearText={ this.clearText } />
        <PickerCombobox
          prefixCls={ this.prefixCls }
          defaultOpenValue={ this.defaultOpenValue }
          isShow= { this.isShow }
          hourOptions={ hourOptions }
          minuteOptions={ minuteOptions }
          secondOptions={ secondOptions } />
        { addon() }
      </div>
    )
  }
}
</script>
