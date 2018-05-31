<template>
  <div :class="classes" :style='calcSiderStyle'>
    <div :class="`${prefixCls}-sider-children`">
      <slot v-if="!matchedResult || !collapsed" :collapsed="collapsed"></slot>
    </div>
    <span v-if="breakpoint && collapsedWidth===0 && matchedResult" :class="`${prefixCls}-sider-zero-width-trigger`" @click="toggle">
      <Icon type="bars"></Icon>
    </span>
    <div v-if="collapsible && trigger!=='null'&& collapsedWidth!==0" :class="`${prefixCls}-sider-trigger`" @click="toggle" :style="{width: `${calcWidth}`}">
      <Icon :type="collapsed!==reverseArrow?'right':'left'"></Icon>
    </div>
  </div>
</template>

<script>
import Icon from '@/icon'
import debounce from 'lodash.debounce'

const dimensionMap = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px'
}

function setMatchMedia () {
  if (typeof window !== 'undefined') {
    const matchMediaPolyfill = mediaQuery => {
      return {
        media: mediaQuery,
        matches: false,
        addListener () { },
        removeListener () { }
      }
    }
    window.matchMedia = window.matchMedia || matchMediaPolyfill
  }
}

setMatchMedia()

export default {
  props: {
    prefixCls: {
      type: String,
      default: 'ant-layout'
    },
    collapsible: {
      type: Boolean,
      default: false
    },
    defaultCollapsed: {
      type: Boolean,
      default: false
    },
    collapsedWidth: {
      type: Number,
      default: 64
    },
    reverseArrow: {
      type: Boolean,
      default: false
    },
    breakpoint: {
      type: String,
      validator (value) {
        return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(value)
      }
    },
    siderStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    trigger: String,
    width: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      collapsed: this.defaultCollapsed,
      matchedResult: false
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-sider`,
        {
          [`${prefixCls}-sider-collapsed`]: this.collapsed || this.matchedResult,
          [`${prefixCls}-sider-has-trigger`]: this.collapsible
        }
      ]
    },
    calcWidth () {
      return this.collapsed ? this.collapsedWidth + 'px' : `${this.width}px`
    },
    calcSiderStyle () {
      let w = this.collapsed ? this.collapsedWidth + 'px' : `${this.width}px`
      return Object.assign(this.siderStyle, { flex: `0 0 ${w}`, maxWidth: w, minWidth: w, width: w })
    }
  },
  watch: {
    matchedResult (newv, oldv) {
      this.toggle()
    }
  },
  components: {
    Icon
  },
  methods: {
    toggle () {
      if (this.collapsible) {
        this.collapsed = !this.collapsed
        this.$emit('on-collapse', this.collapsed, this.collapsedWidth !== 0 ? 'trigger' : 'responsive')
      }
      return this.collapsed
    },
    onWindowResize () {
      this.matchedResult = window.matchMedia(`(max-width: ${dimensionMap[this.breakpoint]})`).matches
    }
  },
  mounted () {
    if (this.breakpoint) {
      let self = this
      window.onresize = debounce(self.onWindowResize, 200)
    }
  }
}
</script>
