<script>
import Vue from 'vue'
import moment from 'moment'
import Popper from '../_mixin/popper'
import Panel from './panel'
import { oneOf } from '../_util/proptype'
import Transition from '../transition'

export function generateShowHourMinuteSecond (format) {
  // Ref: http://momentjs.com/docs/#/parsing/string-format/
  return {
    showHour: (
      format.indexOf('H') > -1 ||
        format.indexOf('h') > -1 ||
        format.indexOf('k') > -1
    ),
    showMinute: format.indexOf('m') > -1,
    showSecond: format.indexOf('s') > -1
  }
}

export default {
  name: 'timepicker',
  mixins: [Popper],
  model: {
    event: 'change'
  },
  data () {
    return {
      showHour: true,
      showMinute: true,
      showSecond: true,
      popperModifiers: {
        inner: {
          enabled: true
        },
        offset: {
          offset: '2px'
        }
      }
    }
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-time-picker'
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
      type: Object,
      validator (value) {
        return moment.isMoment(value)
      },
      default: () => moment()
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
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    placement: {
      type: String,
      default: 'topLeft'
    },
    placeholder: {
      type: String,
      default: 'Select Time'
    },
    size: {
      type: String,
      default: 'default',
      validator (value) {
        return oneOf(value, ['large', 'default', 'small'])
      }
    },
    use12Hours: {
      type: Boolean,
      default: false
    },
    value: {
      validator (value) {
        return value === null || moment.isMoment(value)
      },
      required: true
    }
  },
  components: {
    Panel,
    Transition
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size
        }
      ]
    }
  },
  mounted () {
    this.popper = this.popperVM.$el
    this.reference = this.$refs.picker
    // console.log(this.popperVM)
  },
  methods: {
    handleClick () {
      this.visible = !this.visible
      this.$refs.input.blur()
    },
    handleChange (value) {
      this.$emit('change', value)
    },
    handleClear (e) {
      this.visible = false
      this.$emit('clear', e)
    }
  },
  render (h) {
    const { showHour, showMinute, showSecond } = generateShowHourMinuteSecond(this.format)

    const vm = this
    this.popperVM = new Vue({
      render () {
        return (
          <Transition type="slide" motion="up">
            <div
              class={ `${vm.prefixCls}-panel` }
              v-show={ vm.visible }
              ref="popper">
              <Panel
                allowEmpty={ vm.allowEmpty }
                clearText={ vm.clearText }
                defaultOpenValue={ vm.defaultOpenValue }
                disabledHours={ vm.disabledHours }
                disabledMinutes={ vm.disabledMinutes }
                disabledSeconds={ vm.disabledSeconds }
                format={ vm.format }
                hideDisabledOptions={ vm.hideDisabledOptions }
                prefixCls={ `${vm.prefixCls}-panel` }
                placeholder={ vm.placeholder }
                showHour={ showHour }
                showMinute={ showMinute }
                showSecond={ showSecond }
                use12Hours={ vm.use12Hours }
                isShow={ vm.visible }
                onChange={ vm.handleChange }
                onClear={ vm.handleClear }
                value={ vm.value }>
                { vm.$slots.addon }
              </Panel>
            </div>
          </Transition>
        )
      }
    }).$mount()

    return (
      <span
        ref="picker"
        class={ this.classes }
        onClick={ this.handleClick }>
        <input
          ref="input"
          class={ `${this.prefixCls}-input` }
          placeholder={ this.placeholder }
          value={ this.value && this.value.format(this.format) || '' } />
        <span class={ `${this.prefixCls}-icon` } />
      </span>
    )
  }
}
</script>
