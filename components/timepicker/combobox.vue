<script>
import PickerSelect from './select'

const formatOption = (option, disabledOptions) => {
  const value = option < 10 ? `0${option}` : `${option}`
  const disabled = disabledOptions && disabledOptions.indexOf(option) >= 0

  return {
    value,
    disabled
  }
}

export default {
  props: {
    prefixCls: String,
    defaultOpenValue: Object,
    disabledHours: Function,
    disabledMinutes: Function,
    disabledSeconds: Function,
    isShow: Boolean,
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    showHour: Boolean,
    showMinute: Boolean,
    showSecond: Boolean,
    use12Hours: Boolean,
    isAM: Boolean,
    value: null
  },
  components: {
    PickerSelect
  },
  methods: {
    handleSelected (type, itemValue) {
      const value = (this.value || this.defaultOpenValue).clone()
      if (type === 'hour') {
        if (this.use12Hours) {
          if (this.props.isAM) {
            value.hour(+itemValue % 12)
          } else {
            value.hour((+itemValue % 12) + 12)
          }
        } else {
          value.hour(+itemValue)
        }
      } else if (type === 'minute') {
        value.minute(+itemValue)
      } else if (type === 'ampm') {
        const ampm = itemValue.toUpperCase()
        if (this.use12Hours) {
          if (ampm === 'PM' && value.hour() < 12) {
            value.hour((value.hour() % 12) + 12)
          }

          if (ampm === 'AM') {
            if (value.hour() >= 12) {
              value.hour(value.hour() - 12)
            }
          }
        }
      } else {
        value.second(+itemValue)
      }
      this.$emit('change', value)
    }
  },
  render () {
    const value = this.value || this.defaultOpenValue

    const getHourSelect = hour => {
      // if (!this.showHour) {
      //   return null
      // }
      const disabledOptions = []
      const hourOptionsAdj = this.use12Hours
        ? [12].concat(this.hourOptions.filter(h => h < 12 && h > 0))
        : this.hourOptions
      const hourAdj = this.use12Hours
        ? (hour % 12) || 12
        : hour
      const options = hourOptionsAdj.map(el => formatOption(el, disabledOptions))
      const selectedIndex = hourOptionsAdj.indexOf(hourAdj)

      return (
        <PickerSelect
          isShow={ this.isShow }
          prefixCls={ this.prefixCls }
          options={ options }
          selectedIndex={ selectedIndex }
          onSelected={ this.handleSelected }
          type="hour" />
      )
    }

    const getMinuteSelect = minute => {
      // if (!this.showMinute) {
      //   return null
      // }
      // const disabledOptions = this.disabledSeconds(value.hour(), value.minute())
      const disabledOptions = []
      const options = this.minuteOptions.map(option => formatOption(option, disabledOptions))
      const selectedIndex = this.minuteOptions.indexOf(minute)

      return (
        <PickerSelect
          isShow={ this.isShow }
          prefixCls={ this.prefixCls }
          options={ options }
          selectedIndex={ selectedIndex }
          type="minute"
          onSelected={ this.handleSelected }
        />
      )
    }

    const getSecondSelect = second => {
      // if (!this.showSecond) {
      //   return null;
      // }
      // const disabledOptions = this.disabledSeconds(value.hour(), value.minute());
      const disabledOptions = []
      const options = this.secondOptions.map(option => formatOption(option, disabledOptions))
      const selectedIndex = this.secondOptions.indexOf(second)

      return (
        <PickerSelect
          isShow={ this.isShow }
          prefixCls={ this.prefixCls }
          options={ options }
          selectedIndex={ selectedIndex }
          type="second"
          onSelected={ this.handleSelected }
        />
      )
    }

    return (
      <div class={ `${this.prefixCls}-combobox` }>
        { getHourSelect(value.hour()) }
        { getMinuteSelect(value.minute()) }
        { getSecondSelect(value.second()) }
      </div>
    )
  }
}
</script>
