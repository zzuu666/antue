
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
    hideDisabledOptions: Boolean,
    hourOptions: Array,
    minuteOptions: Array,
    placeholder: String,
    secondOptions: Array,
    showHour: Boolean,
    showMinute: Boolean,
    showSecond: Boolean,
    use12Hours: Boolean,
    value: null
  },
  components: {
    PickerHeader,
    PickerCombobox
  },
  computed: {
    isAM () {
      const value = this.value
      return value && value.hour() >= 0 && value.hour() < 12
    }
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
    const disabledHours = () => {
      const disabledOptions = this.disabledHours()
      const result =
        this.use12Hours && Array.isArray(disabledOptions)
          ? this.isAM
            ? disabledOptions.filter(h => h < 12).map(h => (h === 0 ? 12 : h))
            : disabledOptions.map(h => (h === 12 ? 12 : h - 12))
          : disabledOptions
      return result
    }
    const disabledHourOptions = disabledHours()
    const disabledMinuteOptions = this.disabledMinutes(this.value ? this.value.hour() : null)
    const disabledSecondOptions = this.disabledSeconds(this.value ? this.value.hour() : null,
      this.value ? this.value.minute() : null)
    const hourOptions = generateOptions(24, disabledHourOptions, this.hideDisabledOptions)
    const minuteOptions = generateOptions(60, disabledMinuteOptions, this.hideDisabledOptions)
    const secondOptions = generateOptions(60, disabledSecondOptions, this.hideDisabledOptions)

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
          disabledHours={ this.disabledHours }
          disabledMinutes={ this.disabledMinutes }
          disabledSeconds={ this.disabledSeconds }
          format={ this.format }
          isAM={ this.isAM }
          isShow= { this.isShow }
          hideDisabledOptions={ this.hideDisabledOptions }
          hourOptions={ hourOptions }
          minuteOptions={ minuteOptions }
          secondOptions={ secondOptions }
          showHour={ this.showHour }
          showMinute={ this.showMinute }
          showSecond={ this.showSecond }
          onChange={ this.handleChange }
          use12Hours={ this.use12Hours }
          value={ this.value } />
        { addon() }
      </div>
    )
  }
}
</script>
