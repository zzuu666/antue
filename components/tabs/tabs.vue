<script>
import { oneOf } from '../_util/proptype'
import TabsBar from './tabs-bar'
import TabsContent from './tabs-content'

export default {
  name: 'tabs',
  data () {
    return {
      panes: []
    }
  },
  model: {
    prop: 'active',
    event: 'change'
  },
  provide () {
    return {
      tabsRoot: this
    }
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    active: {
      type: [String, Number]
    },
    animated: {
      type: Boolean,
      default: true
    },
    hideAdd: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return oneOf(value, ['top', 'right', 'bottom', 'left'])
      }
    },
    size: {
      type: String,
      default: 'default',
      validator (value) {
        return oneOf(value, ['default', 'small'])
      }
    },
    type: {
      type: String,
      default: 'line',
      validator (value) {
        return oneOf(value, ['card', 'editable-card', 'line'])
      }
    }
  },
  components: {
    TabsBar,
    TabsContent
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        prefixCls,
        `${prefixCls}-${this.position}`,
        `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-mini`]: this.size === 'small',
          [`${prefixCls}-vertical`]: this.position === 'left' || this.position === 'right',
          [`${prefixCls}-card`]: this.isCard,
          [`${prefixCls}-no-animation`]: !this.animated || this.isCard
        }
      ]
    },
    tabs () {
      return this.panes.map(vm => {
        const { closable, disabled, icon, index } = vm
        const tab = vm.$slots.tab ? vm.$slots.tab : vm.tab
        const isActive = this.active === index
        return {
          closable,
          disabled,
          icon,
          index,
          isActive,
          tab
        }
      })
    },
    activeIndex () {
      return this.panes.findIndex(vm => vm.index === this.active)
    },
    isCard () {
      return this.type === 'card' || this.type === 'editable-card'
    }
  },
  methods: {
    getPanes (value) {
      const oldPanesLenght = this.panes.length
      const panes = this.$refs.content.$children
      if (oldPanesLenght !== panes.length) {
        this.panes = panes
      }
    },
    handleEdit (action, index) {
      this.$emit('edit', action, index)
    }
  },
  mounted () {
    this.getPanes()
  },
  render (h) {
    const bar = h('tabs-bar', {
      props: {
        active: this.active,
        animated: this.animated,
        hideAdd: this.hideAdd,
        position: this.position,
        size: this.size,
        tabs: this.tabs,
        type: this.type
      },
      on: {
        edit: this.handleEdit
      }
    }, [
      this.$slots.extra
    ])

    const content = h('tabs-content', {
      ref: 'content',
      props: {
        animated: this.animated,
        activeIndex: this.activeIndex
      },
      on: {
        contentUpdate: this.getPanes
      }
    }, [
      this.$slots.default
    ])

    const children = this.position !== 'bottom' ? [bar, content] : [content, bar]
    return h('div', {
      'class': this.classes
    }, children)
  }
}
</script>
