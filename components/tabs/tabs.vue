<script>
import { oneOf } from '../_util/proptype'
import Soda from '../_util/soda'
import store from './store'
import TabsBar from './tabs-bar'
import TabsContent from './tabs-content'

export default {
  name: 'tabs',
  data () {
    return {
      panes: [],
      soda: {}
    }
  },
  model: {
    prop: 'active',
    event: 'change'
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
  watch: {
    active (v) {
      this.soda.active = v
    }
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
          [`${prefixCls}-card`]: this.type === 'card' || this.type === 'editable-card',
          [`${prefixCls}-no-animation`]: !this.animated
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
    }
  },
  methods: {
    getPanes (value) {
      const oldPanesLenght = this.panes.length
      const panes = this.$refs.content.$children
      if (oldPanesLenght !== panes.length) {
        this.panes = panes
        console.log(6)
        this.$nextTick(() => {
          this.$soda && this.$soda.init()
        })
      }
      // this.$soda.commit('generateTabs', {
      //   panes: slots,
      //   active: this.active
      // })
    },
    handleEdit (action, index) {
      this.$emit('edit', action, index)
    }
  },
  mounted () {
    this.getPanes()
    this.$nextTick(() => {
      this.$soda = new Soda(this, store)
      this.soda.active = this.active
    })
  },
  render (h) {
    const bar = h('tabs-bar', {
      props: {
        active: this.active,
        hideAdd: this.hideAdd,
        size: this.size,
        position: this.position,
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
        active: this.active,
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
