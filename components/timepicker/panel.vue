
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
    prefixCls: String,
    defaultOpenValue: Object,
    disabledHours: Function,
    disabledMinutes: Function,
    disabledSeconds: Function,
    isShow: Boolean,
    format: String,
    hourOptions: Array,
    minuteOptions: Array,
    placeholder: String,
    secondOptions: Array,
    showHour: Boolean,
    showMinute: Boolean,
    showSecond: Boolean,
    use12Hours: Boolean,
    isAM: Boolean,
    value: null
  },
  components: {
    PickerHeader,
    PickerCombobox
  },
  methods: {
    handleChange (value) {
      this.$emit('change', value)
    },
    handleHeaderClick (e) {
      this.$emit('clear', e)
    }
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
          clearText={ this.clearText }
          format={ this.format }
          onClear={ this.handleHeaderClick }
          placeholder={ this.placeholder }
          value={ this.value } />
        <PickerCombobox
          prefixCls={ this.prefixCls }
          defaultOpenValue={ this.defaultOpenValue }
          isShow= { this.isShow }
          hourOptions={ hourOptions }
          minuteOptions={ minuteOptions }
          secondOptions={ secondOptions }
          showHour={ this.showHour }
          showMinute={ this.showMinute }
          showSecond={ this.showSecond }
          onChange={ this.handleChange }
          value={ this.value } />
        { addon() }
      </div>
    )
  }
}
</script>
