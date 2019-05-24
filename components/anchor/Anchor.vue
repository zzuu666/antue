<script>
import debounce from 'lodash.debounce'
import getScroll from '../_util/getScroll'
import getRequestAnimationFrame from '../_util/getRequestAnimationFrame'
import Affix from '@/affix'

function getOffsetTop (element) {
  if (!element) {
    return 0
  }

  if (!element.getClientRects().length) {
    return 0
  }

  const rect = element.getBoundingClientRect()

  if (rect.width || rect.height) {
    const doc = element.ownerDocument
    const docElem = doc.documentElement
    return rect.top - docElem.clientTop
  }

  return rect.top
}

const easeInOutCubic = (t, b, c, d) => {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return cc / 2 * t * t * t + b
  } else {
    return cc / 2 * ((t -= 2) * t * t + 2) + b
  }
}

const reqAnimFrame = getRequestAnimationFrame()
const sharpMatcherRegx = /#([^#]+)$/

function scrollTo (href, offsetTop = 0, target, callback = () => { }) {
  const scrollTop = getScroll(target(), true)
  const sharpLinkMatch = sharpMatcherRegx.exec(href)
  if (!sharpLinkMatch) { return }
  const targetElement = document.getElementById(sharpLinkMatch[1])
  if (!targetElement) {
    return
  }
  const eleOffsetTop = getOffsetTop(targetElement)
  const targetScrollTop = scrollTop + eleOffsetTop - offsetTop
  const startTime = Date.now()
  const frameFunc = () => {
    const timestamp = Date.now()
    const time = timestamp - startTime
    window.scrollTo(window.pageXOffset, easeInOutCubic(time, scrollTop, targetScrollTop, 450))
    if (time < 450) {
      reqAnimFrame(frameFunc)
    } else {
      callback()
    }
  }
  reqAnimFrame(frameFunc)
  history.pushState(null, '', href)
}

export default {
  name: 'Anchor',
  provide () {
    return {
      anchorRoot: this
    }
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-anchor'
    },
    affix: {
      type: Boolean,
      default: true
    },
    bounds: {
      type: Number,
      default: 5
    },
    getContainer: {
      type: Function,
      default: () => window
    },
    offsetBottom: {
      type: Number,
      default: 0
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    showInkInFixed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      links: [],
      activeLink: null,
      scrollHandler: debounce(this.handleScroll, 50),
      animating: false
    }
  },
  computed: {
    baseCls () {
      return [
        `${this.prefixCls}`,
        {
          'fixed': !this.affix && !this.showInkInFixed
        }
      ]
    },
    ballCls () {
      return [
        `${this.prefixCls}-ink-ball`,
        {
          'visible': !!this.activeLink
        }
      ]
    }
  },
  watch: {
    activeLink (newv, oldv) {
      this.updateInk()
      if (oldv !== null) oldv.active = false
      if (newv !== null) newv.active = true
    }
  },
  components: {
    Affix
  },
  methods: {
    registerLink (link) {
      if (!this.links.includes(link)) this.links.push(link)
    },
    unregisterLink (link) {
      const index = this.links.indexOf(link)
      if (index !== -1) {
        this.links.splice(index, 1)
      }
    },
    handleAnchorClick (link) {
      this.activeLink = link
      this.handleScrollTo(this.activeLink.href)
    },
    updateInk () {
      if (typeof document === 'undefined') {
        return
      }
      if (!this.activeLink) return
      const linkNode = this.activeLink.$el.firstElementChild
      if (linkNode) {
        this.$refs.ink.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`
      }
    },
    handleScroll () {
      if (this.animating) {
        return
      }
      this.activeLink = this.getCurrentAnchor()
    },
    handleScrollTo (link) {
      this.animating = true
      scrollTo(link, this.offsetTop, this.getContainer, () => {
        this.animating = false
      })
    },
    getCurrentAnchor () {
      let activeLink = null
      if (typeof document === 'undefined') {
        return activeLink
      }
      const inArea = (target) => {
        const areaHeight = this.offsetTop + this.bounds
        return getOffsetTop(target) < areaHeight && (getOffsetTop(target) + target.offsetHeight) > areaHeight
      }
      if (this.links.length > 0) {
        for (let i = 0; i < this.links.length; i++) {
          if (typeof document === 'undefined') {
            return
          }
          const target = document.querySelector(this.links[i].href)
          if (target && inArea(target)) {
            return this.links[i]
          }
        }
      }
      return null
    }
  },
  mounted () {
    this.$on('anchorClick', this.handleAnchorClick)
    this.getContainer().addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy () {
    this.getContainer().removeEventListener('scroll', this.scrollHandler)
  },
  render (h) {
    const { prefixCls, baseCls, ballCls, offsetTop, affix } = this
    const anchorContent = (
      <div class={`${prefixCls}-wrapper`} style={{ maxHeight: '100vh' }}>
        <div class={baseCls}>
          <div class={`${prefixCls}-ink`}>
            <span class={ballCls} style={{ top: '10.5px' }} ref="ink"></span>
          </div>
          { this.$slots.default }
        </div>
      </div>
    )
    return !affix ? anchorContent : (
      <Affix offsetTop={offsetTop}>
        {anchorContent}
      </Affix>
    )
  }
}
</script>

