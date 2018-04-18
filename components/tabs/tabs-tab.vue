<script>
import AtuIcon from '../icon'

export default {
  name: 'tabsTab',
  inject: ['tabsRoot'],
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    closable: {
      type: Boolean,
      default: true
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
    },
    type: {
      type: String
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
      return this.index === this.tabsRoot.active
    }
  },
  components: {
    AtuIcon
  },
  methods: {
    handleClick (e) {
      if (this.disabled) return
      !this.active && this.$emit('change', this.index)
      const info = {
        e,
        vm: this,
        index: this.index
      }
      this.tabsRoot.$emit('tab-click', info)
    },
    handleClose (e) {
      this.tabsRoot.$emit('edit', 'remove', this.index)
      e.stopPropagation()
    }
  },
  render (h) {
    const icon = this.icon
      ? h('atu-icon', {
        props: {
          type: this.icon
        }
      }) : null

    const close = this.type === 'editable-card' && this.closable
      ? h('atu-icon', {
        props: {
          type: 'close'
        },
        nativeOn: {
          click: this.handleClose
        }
      }) : null

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
      this.tab,
      close
    ])
  }
}
</script>
