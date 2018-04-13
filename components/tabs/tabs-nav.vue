<script>
import TabsInk from './tabs-ink'
import TabsTab from './tabs-tab'
import debounce from 'lodash.debounce'

export default {
  name: 'tabsNav',
  data () {
    return {
      next: true,
      prev: true,
      shouldScroll: true,
      activeNode: null,
      inkSize: 0,
      inkOffset: 0,
      offset: 0
    }
  },
  inject: ['tabsRoot'],
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    animated: {
      type: Boolean
    },
    active: {
      type: [String, Number]
    },
    position: {
      type: String
    },
    size: {
      type: String
    },
    tabs: {
      type: Array
    },
    type: {
      type: String
    }
  },
  components: {
    TabsInk,
    TabsTab
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-nav-container`,
        {
          [`${prefixCls}-nav-container-scrolling`]: this.showNextPrev
        }
      ]
    },
    style () {
      const target = Math.min(0, this.offset)
      return {
        transform: this.isVertical ? `translate3d(0,${target}px,0)` : `translate3d(${target}px,0,0)`
      }
    },
    showNextPrev () {
      return this.next || this.prev
    },
    isVertical () {
      const position = this.position
      return position === 'left' || position === 'right'
    }
  },
  methods: {
    handleTabChange (index) {
      this.shouldScroll = true
      this.tabsRoot.$emit('change', index)
    },
    handlePrev (e) {
      if (!this.prev) return
      const warp = this.$refs.wrap
      const warpWH = this.getOffsetWH(warp)
      this.offset += warpWH
      this.tabsRoot.$emit('prev-click', e)
    },
    handleNext (e) {
      if (!this.next) return
      const warp = this.$refs.wrap
      const warpWH = this.getOffsetWH(warp)
      this.offset -= warpWH
      this.tabsRoot.$emit('next-click', e)
    },
    setInk () {
      const nav = this.$refs.nav
      const active = this.$refs.active && this.$refs.active.$el
      const containerOffset = this.getOffsetLT(nav)
      if (active) {
        const tabOffset = this.getOffsetLT(active)
        this.inkOffset = tabOffset - containerOffset
        this.inkSize = this.getOffsetWH(active)
      }
    },
    getOffsetWH (node) {
      return node
        ? this.isVertical
          ? node.offsetHeight
          : node.offsetWidth
        : 0
    },
    getOffsetLT (node) {
      return node
        ? this.isVertical
          ? node.getBoundingClientRect().top
          : node.getBoundingClientRect().left
        : 0
    },
    scrollToActive () {
      const active = this.$refs.active && this.$refs.active.$el
      const warp = this.$refs.wrap
      if (active) {
        const activeTabWH = this.getOffsetWH(active)
        const navWrapWH = this.getOffsetWH(warp)
        const activeOffset = this.getOffsetLT(active)
        const navOffset = this.getOffsetLT(warp)
        if (navOffset > activeOffset) {
          this.offset += (navOffset - activeOffset)
        } else if ((navOffset + navWrapWH) < (activeOffset + activeTabWH)) {
          this.offset -= (activeOffset + activeTabWH) - (navOffset + navWrapWH)
        }
        this.shouldScroll = false
      }
    },
    setNextPrev () {
      const nav = this.$refs.nav
      const navWH = this.getOffsetWH(nav)
      const warp = this.$refs.wrap
      const warpWH = this.getOffsetWH(warp)
      const minOffset = warpWH - navWH
      if (minOffset >= 0) {
        this.next = false
        this.offset = 0
      } else if (minOffset < this.offset) {
        this.next = true
      } else {
        this.next = false
        this.offset = minOffset
      }
      this.prev = this.offset < 0
    }
  },
  mounted () {
    const debouncedResize = debounce(() => {
      this.setNextPrev()
      this.scrollToActive()
    }, 200)
    this.resizeEvent = window.addEventListener('resize', debouncedResize)
  },
  beforeUpdate () {
    this.setNextPrev()
  },
  updated () {
    this.setInk()
    this.shouldScroll && this.scrollToActive()
  },
  render (h) {
    const prefixCls = this.prefixCls

    const prev = h('span', {
      attrs: {
        unselectable: 'unselectable'
      },
      'class': [
        `${prefixCls}-tab-prev`,
        {
          [`${prefixCls}-tab-btn-disabled`]: !this.prev,
          [`${prefixCls}-tab-arrow-show`]: this.showNextPrev
        }
      ],
      on: {
        click: this.handlePrev
      },
      ref: 'prev'
    }, [
      h('span', {
        'class': [
          `${prefixCls}-tab-prev-icon`
        ]
      })
    ])

    const next = h('span', {
      attrs: {
        unselectable: 'unselectable'
      },
      'class': [
        `${prefixCls}-tab-next`,
        {
          [`${prefixCls}-tab-btn-disabled`]: !this.next,
          [`${prefixCls}-tab-arrow-show`]: this.showNextPrev
        }
      ],
      on: {
        click: this.handleNext
      }
    }, [
      h('span', {
        'class': [
          `${prefixCls}-tab-next-icon`
        ]
      })
    ])

    const ink = h('tabs-ink', {
      props: {
        animated: this.animated,
        size: this.inkSize,
        offset: this.inkOffset,
        vertical: this.isVertical
      }
    })

    const tabs = this.tabs.map(item => h('tabs-tab', {
      props: {
        closable: item.closable,
        disabled: item.disabled,
        index: item.index,
        icon: item.icon,
        tab: item.tab,
        type: this.type
      },
      on: {
        change: this.handleTabChange
      },
      key: item.index,
      ref: item.index === this.tabsRoot.active ? 'active' : ''
    }))

    const nav = h('div', {
      'class': `${prefixCls}-nav-scroll`
    }, [
      h('div', {
        'class': [
          `${prefixCls}-nav`
        ],
        style: this.style,
        ref: 'nav'
      }, [
        ink,
        tabs
      ])
    ])

    const warp = h('div', {
      'class': `${prefixCls}-nav-wrap`,
      ref: 'wrap'
    }, [
      nav
    ])

    return h('div', {
      'class': this.classes
    }, [
      prev,
      next,
      warp
    ])
  }
}
</script>
