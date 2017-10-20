<template>
  <transition
    :enter-active-class="`${prefixCls}-zoom-enter`"
    :leave-active-class="`${prefixCls}-zoom-leave`"
    @after-leave="handleAfterClose">
    <div
      :class="classes"
      :style="style"
      v-if="!closed">
      <span :class="`${prefixCls}-text`">
        <slot></slot>
      </span>
      <atu-icon
        type="cross"
        v-if="closable"
        @click.native="handleClose" />
    </div>
  </transition>
</template>

<script>
import AtuIcon from '../icon'

export default {
  name: 'tag',
  data () {
    return {
      closed: false
    }
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tag'
    },
    color: {
      type: String
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AtuIcon
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        prefixCls,
        {
          [`${prefixCls}-${this.color}`]: this.isPresetColor,
          [`${prefixCls}-has-color`]: (this.color && !this.isPresetColor)
        }
      ]
    },
    isPresetColor () {
      return this.color ? /^(pink|red|yellow|orange|cyan|green|blue|purple)(-inverse)?$/.test(this.color) : false
    },
    style () {
      return {
        backgroundColor: (this.color && !this.isPresetColor) ? this.color : null
      }
    }
  },
  methods: {
    handleClose () {
      this.closed = true
      this.$emit('close')
    },
    handleAfterClose () {
      this.$emit('after-close')
    }
  }
}
</script>

