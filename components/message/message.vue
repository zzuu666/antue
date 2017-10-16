<template>
  <atu-transition type="move" motion="up" @after-leave="destroyElement">
    <div :class="`${prefixCls}-notice`" v-show="visible">
      <div :class="`${prefixCls}-notice-content`">
        <div :class="`${prefixCls}-${type}`" @mouseenter="clearTimer" @mouseleave="startTimer">
          <Icon :type="iconType" />
          <span>{{content}}</span>
        </div>
      </div>
    </div>
  </atu-transition>
</template>

<script>
import AtuTransition from '@/transition'
import Icon from '@/icon'
const IconTypes = {
  info: 'info-circle',
  success: 'check-circle',
  error: 'cross-circle',
  warning: 'exclamation-circle',
  loading: 'loading'
}

export default {
  name: 'message',
  data () {
    return {
      prefixCls: 'ant-message',
      visible: false,
      content: '',
      duration: 3,
      type: 'info',
      onClose: null,
      closed: false,
      timer: null
    }
  },
  computed: {
    iconType () {
      return IconTypes[this.type]
    },
    durationMS () {
      return this.duration * 1000
    }
  },
  components: {
    AtuTransition,
    Icon
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  },
  methods: {
    destroyElement () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    handleClose () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    clearTimer () {
      clearTimeout(this.timer)
    },
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.handleClose()
          }
        }, this.durationMS)
      }
    }
  },
  mounted () {
    this.startTimer()
  }
}
</script>
