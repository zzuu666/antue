<script>
import Icon from '../icon'

export default {
  name: 'ProgressInfo',
  components: {
    Icon
  },
  props: {
    percent: {
      type: Number,
      default: 0
    },
    format: {
      type: Function
    },
    progressStatus: {
      type: String
    },
    iconType: {
      type: String
    },
    prefixCls: {
      type: String
    }
  },
  render (h) {
    let text
    const textFormatter = this.format || (percentNumber => `${percentNumber}%`)
    if (this.progressStatus === 'exception') {
      text = this.format ? textFormatter(this.percent) : h(Icon, {props: {type: `cross${this.iconType}`}})
    } else if (this.progressStatus === 'success') {
      text = this.format ? textFormatter(this.percent) : h(Icon, {props: {type: `check${this.iconType}`}})
    } else {
      text = textFormatter(this.percent)
    }
    return h(
      'span',
      {
        'class': `${this.prefixCls}-text`
      },
      [text]
    )
  }
}
</script>
