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
import AtuTransition from '../transition'
import Icon from '../icon'
const ICONTYPES = {
  info: 'info-circle',
  success: 'check-circle',
  error: 'cross-circle',
  warning: 'exclamation-circle',
  loading: 'loading'
}

export default {
  name: 'message',
  props: {
    content: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 3
    },
    onClose: {
      type: Function
    },
    prefixCls: {
      type: String,
      default: 'ant-message'
    },
    type: {
      type: String,
      default: 'info'
    }
  },
  data () {
    return {
      visible: false,
      closed: false,
      timer: null
    }
  },
  computed: {
    durationMS () {
      return this.duration * 1000
    },
    iconType () {
      return ICONTYPES[this.type]
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
      this.onClose()
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
