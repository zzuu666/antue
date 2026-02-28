<template>
  <div :class="classes" @mousedown="handleTrackClick">
    <div :class="`${prefixCls}-rail`"></div>
    <div :class="`${prefixCls}-track`" :style="trackStyle"></div>
    <div
      :class="`${prefixCls}-handle`"
      :style="handleStyle"
      @mousedown.stop="handleMouseDown"
    ></div>
  </div>
</template>

<script>
  export default {
    name: 'atu-slider',
    props: {
      value: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      disabled: {
        type: Boolean,
        default: false
      },
      vertical: {
        type: Boolean,
        default: false
      },
      prefixCls: {
        type: String,
        default: 'ant-slider'
      }
    },
    data () {
      return {
        currentValue: this.value,
        dragging: false
      }
    },
    computed: {
      classes () {
        return [
          this.prefixCls,
          {
            [`${this.prefixCls}-disabled`]: this.disabled,
            [`${this.prefixCls}-vertical`]: this.vertical
          }
        ]
      },
      percentage () {
        return ((this.currentValue - this.min) / (this.max - this.min)) * 100
      },
      trackStyle () {
        if (this.vertical) {
          return { height: this.percentage + '%', bottom: '0' }
        }
        return { width: this.percentage + '%' }
      },
      handleStyle () {
        if (this.vertical) {
          return { bottom: this.percentage + '%' }
        }
        return { left: this.percentage + '%' }
      }
    },
    watch: {
      value (val) {
        this.currentValue = val
      }
    },
    methods: {
      handleMouseDown (e) {
        if (this.disabled) return
        this.dragging = true
        document.addEventListener('mousemove', this.handleDrag)
        document.addEventListener('mouseup', this.handleDragEnd)
      },
      handleDrag (e) {
        if (!this.dragging) return
        this.updateValue(e)
      },
      handleDragEnd (e) {
        this.dragging = false
        document.removeEventListener('mousemove', this.handleDrag)
        document.removeEventListener('mouseup', this.handleDragEnd)
        this.$emit('afterChange', this.currentValue)
      },
      handleTrackClick (e) {
        if (this.disabled) return
        this.updateValue(e)
        this.$emit('afterChange', this.currentValue)
      },
      updateValue (e) {
        const rect = this.$el.getBoundingClientRect()
        let ratio
        if (this.vertical) {
          ratio = (rect.bottom - e.clientY) / rect.height
        } else {
          ratio = (e.clientX - rect.left) / rect.width
        }
        ratio = Math.max(0, Math.min(1, ratio))
        let newValue = this.min + ratio * (this.max - this.min)
        newValue = Math.round(newValue / this.step) * this.step
        newValue = Math.max(this.min, Math.min(this.max, newValue))
        this.currentValue = newValue
        this.$emit('change', newValue)
      }
    }
  }
</script>
