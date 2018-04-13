<template>
  <div :style="placeholderStyle">
    <div :class="classes" ref="fixedNode" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import getScroll from '../_util/getScroll'

  function getDefaultTarget () {
    return typeof window !== 'undefined' ? window : null
  }

  function getTargetRect (target) {
    return target !== window ? target.getBoundingClientRect() : {top: 0, left: 0, bottom: 0}
  }

  function getOffset (element, target) {
    const elemRect = element.getBoundingClientRect()
    const targetRect = getTargetRect(target)

    const scrollTop = getScroll(target, true)
    const scrollLeft = getScroll(target, false)

    const docElem = window.document.body
    const clientTop = docElem.clientTop || 0
    const clientLeft = docElem.clientLeft || 0

    return {
      top: elemRect.top - targetRect.top +
      scrollTop - clientTop,
      left: elemRect.left - targetRect.left +
      scrollLeft - clientLeft,
      width: elemRect.width,
      height: elemRect.height
    }
  }

  export default {
    data () {
      return {
        affixStyle: null,
        eventHandlers: {},
        placeholderStyle: null
      }
    },
    props: {
      prefixCls: {
        type: String,
        default: 'ant-affix'
      },
      offsetBottom: Number,
      offsetTop: Number,
      target: {
        type: Function,
        default: () => window
      }
    },
    computed: {
      classes () {
        return {
          [this.prefixCls || 'ant-affix']: this.affixStyle
        }
      }
    },
    methods: {
      clearEventListeners () {
        this.events.forEach(eventName => {
          const handler = this.eventHandlers[eventName]
          if (handler && handler.remove) {
            handler.remove()
          }
        })
      },
      setTargetEventListeners (getTarget) {
        const target = getTarget()
        if (!target) {
          return
        }
        this.clearEventListeners()

        this.events.forEach(eventName => {
          this.eventHandlers[eventName] = addEventListener(target, eventName, this.updatePosition)
        })
      },
      updatePosition (e) {
        console.log(111)
        let {offsetTop, offsetBottom, offset, target = getDefaultTarget} = this.props
        const targetNode = target()

        // Backwards support
        offsetTop = offsetTop || offset
        const scrollTop = getScroll(targetNode, true)
        const affixNode = this.$refs.fixedNode
        const elemOffset = getOffset(affixNode, targetNode)
        const elemSize = {
          width: this.$refs.fixedNode.offsetWidth,
          height: this.$refs.fixedNode.offsetHeight
        }

        const offsetMode = {
          top: false,
          bottom: false
        }
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
          offsetMode.top = true
          offsetTop = 0
        } else {
          offsetMode.top = typeof offsetTop === 'number'
          offsetMode.bottom = typeof offsetBottom === 'number'
        }

        const targetRect = getTargetRect(targetNode)
        const targetInnerHeight =
          targetNode.innerHeight || targetNode.clientHeight
        if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
          // Fixed Top
          const width = elemOffset.width
          this.setAffixStyle(e, {
            position: 'fixed',
            top: targetRect.top + offsetTop,
            left: targetRect.left + elemOffset.left,
            width
          })
          this.setPlaceholderStyle({
            width,
            height: elemSize.height
          })
        } else if (
          scrollTop < elemOffset.top + elemSize.height + offsetBottom - targetInnerHeight &&
          offsetMode.bottom
        ) {
          // Fixed Bottom
          const targetBottomOffet = targetNode === window ? 0 : (window.innerHeight - targetRect.bottom)
          const width = elemOffset.width
          this.setAffixStyle(e, {
            position: 'fixed',
            bottom: targetBottomOffet + offsetBottom,
            left: targetRect.left + elemOffset.left,
            width
          })
          this.setPlaceholderStyle({
            width,
            height: elemOffset.height
          })
        } else {
          const affixStyle = this.affixStyle
          if (e.type === 'resize' && affixStyle && affixStyle.position === 'fixed' && affixNode.offsetWidth) {
            this.setAffixStyle(e, {...affixStyle, width: affixNode.offsetWidth})
          } else {
            this.setAffixStyle(e, null)
          }
          this.setPlaceholderStyle(null)
        }
      },
      setAffixStyle (e, affixStyle) {
        console.log(affixStyle)
        const {target = getDefaultTarget} = this.props
        const originalAffixStyle = this.affixStyle
        const isWindow = target() === window
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
          return
        }
        if (affixStyle === originalAffixStyle) {
          return
        }
        const affixed = !!this.affixStyle
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) this.$emit('change', affixed)
      },
      setPlaceholderStyle (placeholderStyle) {
        const originalPlaceholderStyle = this.placeholderStyle
        if (placeholderStyle === originalPlaceholderStyle) {
          return
        }
        this.placeholderStyle = placeholderStyle
      }
    },
    watch: {
      target () {
        this.clearEventListeners()
        this.setTargetEventListeners(this.target)

        // Mock Event object.
        this.updatePosition({})
      }
    }
  }
</script>
