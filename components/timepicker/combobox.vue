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
    value: `null`
  },
  components: {
    PickerSelect
  },
  methods: {
    handleSelected (type, value) {
      // TODO
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
