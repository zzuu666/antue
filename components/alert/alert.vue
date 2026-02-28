<template>
  <transition name="ant-alert-slide-up">
    <div v-if="!closed" :class="classes">
      <icon v-if="showIcon" :class="`${prefixCls}-icon`" :type="iconType"></icon>
      <span :class="`${prefixCls}-message`"><slot>{{ message }}</slot></span>
      <span v-if="hasDescription" :class="`${prefixCls}-description`"><slot name="description">{{ description }}</slot></span>
      <a v-if="closable" :class="`${prefixCls}-close-icon`" @click="handleClose">
        <slot name="closeText">
          <icon type="cross"></icon>
        </slot>
      </a>
    </div>
  </transition>
</template>

<script>
  import Icon from '../icon'
  import { oneOf } from '../_util/proptype'

  const ICON_MAP = {
    success: 'check-circle',
    info: 'info-circle',
    warning: 'exclamation-circle',
    error: 'close-circle'
  }

  export default {
    name: 'atu-alert',
    props: {
      type: {
        type: String,
        default: 'info',
        validator (value) {
          return oneOf(value, ['success', 'info', 'warning', 'error'])
        }
      },
      message: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      closable: {
        type: Boolean,
        default: false
      },
      showIcon: {
        type: Boolean,
        default: false
      },
      banner: {
        type: Boolean,
        default: false
      },
      prefixCls: {
        type: String,
        default: 'ant-alert'
      }
    },
    data () {
      return {
        closed: false
      }
    },
    computed: {
      classes () {
        return [
          this.prefixCls,
          `${this.prefixCls}-${this.type}`,
          {
            [`${this.prefixCls}-with-description`]: this.hasDescription,
            [`${this.prefixCls}-no-icon`]: !this.showIcon,
            [`${this.prefixCls}-closable`]: this.closable,
            [`${this.prefixCls}-banner`]: this.banner
          }
        ]
      },
      hasDescription () {
        return this.description || this.$slots.description
      },
      iconType () {
        return ICON_MAP[this.type] || 'info-circle'
      }
    },
    methods: {
      handleClose (e) {
        this.closed = true
        this.$emit('close', e)
      }
    },
    components: {
      Icon
    }
  }
</script>
