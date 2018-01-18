
<template>
  <div :class="classes">
    <div v-if="type === 'line'">
      <div :class="`${prefixCls}-outer`">
        <div :class="`${prefixCls}-inner`">
          <div :class="`${prefixCls}-bg`" :style="percentStyle"></div>
        </div>
      </div>
      <progress-info v-show="showInfo" :progress-status="progressStatus" :percent="percent" :format="format" :icon-type="iconType" :prefix-cls="prefixCls"></progress-info>
    </div>
    <div v-else-if="type === 'circle' || type === 'dashboard'">
      <div :class="`${prefixCls}-inner`" :style="circleStyle">
        <v-circle
          :percent="percent"
          :stroke-width="circleWidth"
          :trail-width="circleWidth"
          :stroke-color="statusColorMap[progressStatus]"
          :trail-color="trailColor"
          :prefix-cls="prefixCls"
          :gap-degree="gapDeg"
          :gap-position="gapPos"
        >
        </v-circle>
        <progress-info v-show="showInfo" :progress-status="progressStatus" :percent="percent" :format="format" :icon-type="iconType" :prefix-cls="prefixCls"></progress-info>
      </div>
    </div>
  </div>
</template>

<script>
import { oneOf } from '../_util/proptype'
import VCircle from './circle'
import ProgressInfo from './progressInfo'

export default {
  components: {
    VCircle,
    ProgressInfo
  },
  name: 'progress',
  props: {
    percent: {
      type: Number,
      default: 0
    },
    prefixCls: {
      type: String,
      default: 'ant-progress'
    },
    strokeWidth: {
      type: Number
    },
    type: {
      type: String,
      default: 'line',
      validator (value) {
        return oneOf(value, ['line', 'circle', 'dashboard'])
      }
    },
    showInfo: {
      type: Boolean,
      default: true
    },
    format: {
      type: Function
    },
    status: {
      type: String,
      validator (value) {
        return oneOf(value, ['success', 'active', 'exception'])
      }
    },
    width: {
      type: Number
    },
    trailColor: {
      type: String,
      default: '#f3f3f3 '
    },
    gapDegress: {
      type: Number
    },
    gapPosition: {
      type: String,
      validator (value) {
        return oneOf(value, ['top', 'bottom', 'right', 'left'])
      }
    }
  },
  data () {
    return {
      statusColorMap: {
        normal: '#108ee9',
        exception: '#ff5500',
        success: '#87d068'
      }
    }
  },
  computed: {
    progressStatus () {
      return parseInt(this.percent.toString(), 10) >= 100 && !this.status ? 'success' : (this.status || 'normal')
    },
    classes () {
      const prefixCls = this.prefixCls

      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${(this.type === 'dashboard' && 'circle') || this.type}`]: true,
          [`${prefixCls}-status-${this.progressStatus}`]: true,
          [`${prefixCls}-show-info`]: this.showInfo
        }
      ]
    },
    percentStyle () {
      return {
        width: `${this.percent}%`,
        height: `${this.strokeWidth || 10}px`
      }
    },
    iconType () {
      return this.type === 'circle' || this.type === 'dashboard' ? '' : '-circle'
    },
    circleStyle () {
      const circleSize = this.width || 132
      return {
        width: circleSize + 'px',
        height: circleSize + 'px',
        fontSize: circleSize * 0.16 + 6 + 'px'
      }
    },
    circleWidth () {
      return Number(this.strokeWidth || 6)
    },
    gapPos () {
      return this.gapPosition || this.type === 'dashboard' && 'bottom' || 'top'
    },
    gapDeg () {
      return Number(this.gapDegress || this.type === 'dashboard' && 75)
    }
  }
}
</script>
