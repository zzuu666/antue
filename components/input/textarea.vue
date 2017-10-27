<template>
  <textarea :style="textareaStyles" rows="4" ref="textAreaRef" :class="prefixCls" @input="handleInput" @keypress="handleKeyDown" @change="handleChange"></textarea>
</template>

<script>
  import calculateNodeHeight from './calculateNodeHeight'

  function onNextFrame (cb) {
    if (window.requestAnimationFrame) {
      return window.requestAnimationFrame(cb)
    }
    return window.setTimeout(cb, 1)
  }

  function clearNextFrameAction (nextFrameId) {
    if (window.cancelAnimationFrame) {
      window.cancelAnimationFrame(nextFrameId)
    } else {
      window.clearTimeout(nextFrameId)
    }
  }

  export default {
    props: {
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      prefixCls: {
        type: String,
        default: 'ant-input'
      },
      value: null
    },
    data () {
      return {
        textareaStyles: {}
      }
    },
    methods: {
      handleChange (e) {
        this.$emit('change', e)
      },
      handleInput (e) {
        if (this.nextFrameActionId) {
          clearNextFrameAction(this.nextFrameActionId)
        }
        this.nextFrameActionId = onNextFrame(this.resizeTextarea)
        this.$emit('input', e.target.value)
      },
      handleKeyDown (e) {
        if (e.keyCode === 13) {
          this.$emit('press-enter', e)
        }
        this.$emit('keydown', e)
      },
      resizeTextarea () {
        if (!this.autosize) {
          return false
        }
        const minRows = this.autosize ? this.autosize.minRows : null
        const maxRows = this.autosize ? this.autosize.maxRows : null
        this.textareaStyles = calculateNodeHeight(this.$refs.textAreaRef, false, minRows, maxRows)
      }
    },
    mounted () {
      this.resizeTextarea()
    }
  }
</script>
