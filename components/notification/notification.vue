<template>
  <ant-transition type="move" :motion="moveFrom" @after-leave="destroyElement">
    <div v-show="visible" :class="[`${prefixCls}-notice`,`${prefixCls}-closable`]">
      <div :class="`${prefixCls}-notice-content`">
        <div :class="{[`${prefixCls}-notice-with-icon`]: type || icon}">
          <ant-icon v-if="type || icon" :type="typeIcon" :class="`${prefixCls}-notice-icon ${prefixCls}-notice-icon-${type}`" :style="iconStyle" />
          <div :class="`${prefixCls}-notice-message`">{{message}}</div>
          <div :class="`${prefixCls}-notice-description`">{{description}}</div>
          <span v-if="btn" :class="`${prefixCls}-notice-btn`">
            <ant-button size="small" :type="btnType" @click="handleClose">{{btn}}</ant-button>
          </span>
        </div>
      </div>
      <a tabindex="0" :class="`${prefixCls}-notice-close`" @click="handleClose">
        <span :class="`${prefixCls}-notice-close-x`"></span>
      </a>
    </div>
  </ant-transition>
</template>

<script>
import AntTransition from '@/transition'
import AntIcon from '@/icon'
import AntButton from '@/button'

export default {
  name: 'notification',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-notification'
    },
    message: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    duration: {
      type: Number,
      default: 4.5
    },
    onClose: {
      type: Function
    },
    type: {
      type: String,
      validator (value) {
        return ['success', 'info', 'warning', 'error', ''].includes(value)
      },
      default: ''
    },
    icon: {
      type: String
    },
    iconStyle: Object,
    btn: String,
    btnType: {
      type: String,
      validator (value) {
        return ['primary', 'default', 'dashed', 'danger'].includes(value)
      },
      default: 'primary'
    },
    moveFrom: {
      type: String,
      validator (value) {
        return ['left', 'right'].includes(value)
      }
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
    typeIcon () {
      const typeToIcon = {
        success: 'check-circle-o',
        info: 'info-circle-o',
        error: 'cross-circle-o',
        warning: 'exclamation-circle-o'
      }
      if (this.type) return typeToIcon[this.type]
      else if (this.icon) return this.icon
    }
  },
  components: {
    AntTransition,
    AntIcon,
    AntButton
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
      // this.destroyElement()
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

