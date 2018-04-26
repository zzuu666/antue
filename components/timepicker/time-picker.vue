<script>
import Vue from 'vue'
import Popper from '../_mixin/popper'
import Panel from './panel'

export default {
  name: 'timepicker',
  mixins: [Popper],
  props: {
    prefixCls: {
      type: String,
      default: 'ant-time-picker'
    },
    size: {
      type: String
      // TODO
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
    const vm = this
    this.popperVM = new Vue({
      render () {
        return (
          <div
            class={ `${vm.prefixCls}-panel` }
            v-show={ vm.visible }
            ref="popper">
            <Panel />
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
