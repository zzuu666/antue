<script>
import AtuIcon from '../icon'

export default {
  name: 'tabsTab',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    index: {
      type: [String, Number]
    },
    tab: {
      type: [String, Object, Array]
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-tab`,
        {
          [`${prefixCls}-tab-disabled`]: this.disabled,
          [`${prefixCls}-tab-active`]: this.active
        }
      ]
    },
    active () {
      return this.index === this.$parent.active
    }
  },
  components: {
    AtuIcon
  },
  methods: {
    handleClick (e) {
      if (this.disabled) return
      !this.active && this.$emit('change', this.index)
      this.$emit('tabClick', {
        e,
        vm: this,
        index: this.index
      })
    }
  },
  render (h) {
    const icon = this.icon
      ? h('atu-icon', {
        props: {
          type: this.icon
        }
      }) : ''

    return h('div', {
      'class': this.classes,
      attr: {
        role: 'tab',
        'aria-disabled': this.disabled + '',
        'aria-selected': this.active + ''
      },
      on: {
        click: this.handleClick
      }
    }, [
      icon,
      this.tab
    ])
  }
}
</script>
