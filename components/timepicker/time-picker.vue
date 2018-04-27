<script>
import Vue from 'vue'
import moment from 'moment'
import Popper from '../_mixin/popper'
import Panel from './panel'
import { oneOf } from '../_util/proptype'

export default {
  name: 'timepicker',
  mixins: [Popper],
  data () {
    return {
      showHour: true,
      showMinute: true,
      showSecond: true
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
    Panel
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
    }
  },
  render (h) {
    console.log(this.defaultOpenValue.hour())
    const vm = this
    this.popperVM = new Vue({
      render () {
        return (
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
              hideDisabledOptions={ vm.hideDisabledOptions }
              use12Hours={ vm.use12Hours }
              isShow={ vm.visible }>
              { vm.$slots.addon }
            </Panel>
          </div>
        )
      }
    }).$mount()

    return (
      <span
        ref="picker"
        class={this.classes}
        onClick={this.handleClick}>
        <input class={`${this.prefixCls}-input`} />
        <span class={`${this.prefixCls}-icon`} />
      </span>
    )
  }
}
</script>
