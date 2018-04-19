<template>
  <svg
    :class="[`${prefixCls}-circle`, className]"
    viewBox="0 0 100 100"
    :style="styles"
  >
    <path
      :d="pathString"
      :stroke="trailColor"
      :stroke-width="trailWidth || strokeWidth"
      fill-opacity="0"
      :style="trailPathStyle"
    />
    <path
      :d="pathString"
      :stroke-linecap="strokeLinecap"
      :stroke="strokeColor"
      :stroke-width="percent === 0 ? 0 : strokeWidth"
      fill-opacity="0"
      ref="path"
      :style="strokePathStyle"
    />
  </svg>
</template>

<script>

export default {
  name: 'circle',
  props: {
    className: {
      type: [String, Object],
      default: ''
    },
    percent: {
      type: [Number, String],
      default: 0
    },
    prefixCls: {
      type: String,
      default: 'vue-progress'
    },
    styles: {
      type: Object
    },
    strokeColor: {
      type: String,
      default: '#2db7f5'
    },
    strokeLinecap: {
      type: String,
      default: 'round',
      validator (value) {
        return ['butt', 'round', 'square'].indexOf(value) !== -1
      }
    },
    strokeWidth: {
      type: [String, Number],
      default: 1
    },
    trailWidth: {
      type: [String, Number],
      default: 1
    },
    trailColor: {
      type: String,
      default: '#D9D9D9'
    },
    gapDegree: {
      type: Number,
      default: 0
    },
    gapPosition: {
      validator (value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1
      },
      default: 'top'
    }
  },
  computed: {
    pathString () {
      const radius = 50 - (this.strokeWidth / 2)
      let beginPositionX = 0
      let beginPositionY = -radius
      let endPositionX = 0
      let endPositionY = -2 * radius
      switch (this.gapPosition) {
        case 'left':
          beginPositionX = -radius
          beginPositionY = 0
          endPositionX = 2 * radius
          endPositionY = 0
          break
        case 'right':
          beginPositionX = radius
          beginPositionY = 0
          endPositionX = -2 * radius
          endPositionY = 0
          break
        case 'bottom':
          beginPositionY = radius
          endPositionY = 2 * radius
          break
        default:
      }
      return `M 50,50 m ${beginPositionX},${beginPositionY}
      a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
      a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`
    },
    trailPathStyle () {
      const radius = 50 - (this.strokeWidth / 2)
      const len = Math.PI * 2 * radius
      return {
        strokeDasharray: `${len - this.gapDegree}px ${len}px`,
        strokeDashoffset: `-${this.gapDegree / 2}px`,
        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
      }
    },
    strokePathStyle () {
      const radius = 50 - (this.strokeWidth / 2)
      const len = Math.PI * 2 * radius
      return {
        strokeDasharray: `${(this.percent / 100) * (len - this.gapDegree)}px ${len}px`,
        strokeDashoffset: `-${this.gapDegree / 2}px`,
        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
      }
    }
  },
  updated () {
    if (!this.$refs.path) {
      return
    }
    const pathStyle = this.$refs.path.style
    pathStyle.transitionDuration = '.3s, .3s, .3s, .06s'
    const now = Date.now()
    if (this.prevTimeStamp && now - this.prevTimeStamp < 100) {
      pathStyle.transitionDuration = '0s, 0s'
    }
    this.prevTimeStamp = Date.now()
  }
}
</script>
