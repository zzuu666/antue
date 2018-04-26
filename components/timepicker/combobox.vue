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
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    showHour: {
      type: Boolean,
      default: true
    }
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
    const getHourSelect = hour => {
      if (!this.showHour) {
        return null
      }
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
          prefixCls={ this.prefixCls }
          options={ options }
          selectedIndex={ selectedIndex }
          onSelected={ this.handleSelected }
          type="hour" />
      )
    }

    return (
      <div class={ `${this.prefixCls}-combobox` }>
        { getHourSelect() }
      </div>
    )
  }
}
</script>
